import Stripe from 'stripe';
import { publicCheckoutSummary } from '../../lib/stripe/publicSession.js';

const SESSION_ID = /^cs_[A-Za-z0-9_]+$/;

function applyCors(res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');
}

function sessionIdFrom(req) {
  const fromQuery = req.query?.sessionId;
  if (typeof fromQuery === 'string' && fromQuery) return fromQuery;
  const path = (req.url || '').split('?')[0];
  const last = path.split('/').filter(Boolean).pop();
  if (!last || last === 'checkout-session') return '';
  try {
    return decodeURIComponent(last);
  } catch {
    return '';
  }
}

export default async function handler(req, res) {
  applyCors(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const sessionId = sessionIdFrom(req);
  if (!SESSION_ID.test(sessionId)) return res.status(400).json({ error: 'invalid_session' });
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: 'checkout_unavailable' });

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const summary = publicCheckoutSummary(session);
    if (!summary) return res.status(404).json({ error: 'not_found' });
    return res.status(200).json(summary);
  } catch (error) {
    const status = error.statusCode === 404 ? 404 : 500;
    if (status >= 500) console.error('checkout_summary_failed');
    return res.status(status).json({ error: status === 404 ? 'not_found' : 'checkout_unavailable' });
  }
}

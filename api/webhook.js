import Stripe from 'stripe';
import { readRawBody } from '../lib/stripe/readRawBody.js';
import { processStripeEvent } from '../lib/stripe/stripeEvents.js';

export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Vercel webhook. Verifies the Stripe signature against the raw body.
 * Dedupes by event.id in process memory only — see stripeEvents.js.
 * Never logs the event payload (it contains the customer email).
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!secret || !key) return res.status(500).json({ error: 'webhook_not_configured' });

  let event;
  try {
    const rawBody = await readRawBody(req);
    const stripe = new Stripe(key);
    event = stripe.webhooks.constructEvent(rawBody, req.headers['stripe-signature'], secret);
  } catch {
    console.error('webhook_signature_failed');
    return res.status(400).json({ error: 'invalid_signature' });
  }

  try {
    const result = await processStripeEvent(event);
    return res.status(200).json({ received: true, duplicate: Boolean(result.duplicate) });
  } catch {
    console.error('webhook_handler_failed');
    return res.status(500).json({ error: 'webhook_failed' });
  }
}

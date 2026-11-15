import { createAllowedCheckout } from '../lib/stripe/createAllowedCheckout.js';

function applyCors(res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');
}

export default async function handler(req, res) {
  applyCors(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  try {
    const result = await createAllowedCheckout({
      plan: req.body?.plan,
      priceId: req.body?.priceId,
      lang: req.body?.lang,
      origin: req.headers.origin,
    });
    return res.status(200).json(result);
  } catch (error) {
    const status = error.statusCode || 500;
    if (status >= 500) console.error('checkout_session_failed', error.publicCode || 'error');
    return res.status(status).json({ error: error.publicCode || 'checkout_unavailable' });
  }
}

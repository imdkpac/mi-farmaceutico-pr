import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get sessionId from URL path
    const sessionId = req.url.split('/').pop();

    if (!sessionId || sessionId === 'checkout-session') {
      return res.status(400).json({ error: 'Session ID is required' });
    }

    console.log('Retrieving session:', sessionId);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'subscription']
    });

    return res.status(200).json(session);
  } catch (error) {
    console.error('Error retrieving session:', error);
    return res.status(500).json({ 
      error: error.message 
    });
  }
}
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Helper to handle CORS
const setCorsHeaders = (res) => {
  const allowedOrigins = [
    process.env.CLIENT_URL,
    'http://localhost:5173',
    'http://localhost:3000'
  ];
  
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', allowedOrigins.join(','));
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, stripe-signature');
};

// Main handler for Vercel serverless function
export default async function handler(req, res) {
  setCorsHeaders(res);

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url, method } = req;
  
  try {
    // Health check
    if (url === '/api/health' && method === 'GET') {
      return res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    }

    // Create Checkout Session for Subscriptions
    if (url === '/api/create-checkout-session' && method === 'POST') {
      const { priceId, quantity = 1, customerEmail, metadata = {} } = req.body;

      if (!priceId) {
        return res.status(400).json({ error: 'Price ID is required' });
      }

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{ price: priceId, quantity }],
        customer_email: customerEmail,
        metadata: { ...metadata, service_type: 'subscription' },
        success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL}/canceled`,
        billing_address_collection: 'required',
        allow_promotion_codes: true,
        subscription_data: { metadata: { ...metadata } }
      });

      return res.status(200).json({ sessionId: session.id, url: session.url });
    }

    // Create Checkout Session for One-time Payments
    if (url === '/api/create-payment-session' && method === 'POST') {
      const { priceId, quantity = 1, customerEmail, metadata = {} } = req.body;

      if (!priceId) {
        return res.status(400).json({ error: 'Price ID is required' });
      }

      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [{ price: priceId, quantity }],
        customer_email: customerEmail,
        metadata: { ...metadata, service_type: 'one_time' },
        success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL}/canceled`,
        billing_address_collection: 'required',
      });

      return res.status(200).json({ sessionId: session.id, url: session.url });
    }

    // Get checkout session details
    if (url.startsWith('/api/checkout-session/') && method === 'GET') {
      const sessionId = url.split('/').pop();
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['customer', 'subscription']
      });
      return res.status(200).json(session);
    }

    // Get subscription details
    if (url.startsWith('/api/subscription/') && method === 'GET') {
      const subscriptionId = url.split('/').pop();
      const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
        expand: ['customer', 'default_payment_method']
      });
      return res.status(200).json(subscription);
    }

    // Cancel subscription
    if (url === '/api/cancel-subscription' && method === 'POST') {
      const { subscriptionId, cancelAtPeriodEnd = true } = req.body;

      if (!subscriptionId) {
        return res.status(400).json({ error: 'Subscription ID is required' });
      }

      let subscription;
      if (cancelAtPeriodEnd) {
        subscription = await stripe.subscriptions.update(subscriptionId, {
          cancel_at_period_end: true
        });
      } else {
        subscription = await stripe.subscriptions.cancel(subscriptionId);
      }

      return res.status(200).json(subscription);
    }

    // Create customer portal session
    if (url === '/api/create-portal-session' && method === 'POST') {
      const { customerId } = req.body;

      if (!customerId) {
        return res.status(400).json({ error: 'Customer ID is required' });
      }

      const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env.CLIENT_URL}/account`,
      });

      return res.status(200).json({ url: session.url });
    }

    // Add subscription item
    if (url === '/api/add-subscription-item' && method === 'POST') {
      const { subscriptionId, priceId } = req.body;

      if (!subscriptionId || !priceId) {
        return res.status(400).json({ error: 'Subscription ID and Price ID are required' });
      }

      const subscriptionItem = await stripe.subscriptionItems.create({
        subscription: subscriptionId,
        price: priceId,
        proration_behavior: 'create_prorations',
      });

      return res.status(200).json(subscriptionItem);
    }

    // Remove subscription item
    if (url === '/api/remove-subscription-item' && method === 'POST') {
      const { subscriptionItemId } = req.body;

      if (!subscriptionItemId) {
        return res.status(400).json({ error: 'Subscription Item ID is required' });
      }

      const deleted = await stripe.subscriptionItems.del(subscriptionItemId, {
        proration_behavior: 'create_prorations',
      });

      return res.status(200).json(deleted);
    }

    // Webhook endpoint
    if (url === '/api/webhook' && method === 'POST') {
      const sig = req.headers['stripe-signature'];
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

      let event;
      try {
        // For Vercel, the body is already parsed, we need raw body
        const rawBody = await getRawBody(req);
        event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
      } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
      }

      // Handle webhook events
      console.log('Webhook event received:', event.type);
      
      return res.status(200).json({ received: true });
    }

    // 404 for unknown routes
    return res.status(404).json({ error: 'Route not found' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: error.message,
      type: error.type 
    });
  }
}

// Helper to get raw body for webhook verification
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(Buffer.from(data)));
    req.on('error', reject);
  });
}

import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import { createAllowedCheckout } from './lib/stripe/createAllowedCheckout.js';
import { processStripeEvent } from './lib/stripe/stripeEvents.js';
import { publicCheckoutSummary } from './lib/stripe/publicSession.js';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Important: Raw body for webhooks, JSON for other routes
app.use((req, res, next) => {
  if (req.originalUrl === '/api/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Create Checkout Session. Allowlist is foundation (subscription) and transition (payment).
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const result = await createAllowedCheckout({
      plan: req.body?.plan,
      priceId: req.body?.priceId,
      lang: req.body?.lang,
      origin: req.headers.origin,
    });
    res.json(result);
  } catch (error) {
    const status = error.statusCode || 500;
    if (status >= 500) console.error('checkout_session_failed');
    res.status(status).json({ error: error.publicCode || 'checkout_unavailable' });
  }
});

// Legacy one-time endpoint. Payment-mode allowlist only (transition).
app.post('/api/create-payment-session', async (req, res) => {
  try {
    const result = await createAllowedCheckout({
      plan: req.body?.plan,
      priceId: req.body?.priceId,
      lang: req.body?.lang,
      origin: req.headers.origin,
      requiredMode: 'payment',
    });
    res.json(result);
  } catch (error) {
    const status = error.statusCode || 500;
    if (status >= 500) console.error('payment_session_failed');
    res.status(status).json({ error: error.publicCode || 'checkout_unavailable' });
  }
});

// Webhook endpoint for Stripe events. Does not run on Vercel; api/webhook.js does.
// This copy stays so local Express matches the serverless handler.
app.post('/api/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return res.status(500).json({ error: 'webhook_not_configured' });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], webhookSecret);
    } catch {
      console.error('webhook_signature_failed');
      return res.status(400).json({ error: 'invalid_signature' });
    }

    try {
      const result = await processStripeEvent(event);
      res.json({ received: true, duplicate: Boolean(result.duplicate) });
    } catch {
      console.error('webhook_handler_failed');
      res.status(500).json({ error: 'webhook_failed' });
    }
  }
);

// Get subscription details
app.get('/api/subscription/:subscriptionId', async (req, res) => {
  try {
    const subscription = await stripe.subscriptions.retrieve(
      req.params.subscriptionId,
      {
        expand: ['customer', 'default_payment_method']
      }
    );
    res.json(subscription);
  } catch (error) {
    console.error('subscription_retrieve_failed');
    res.status(500).json({ error: error.message });
  }
});

// Cancel subscription
app.post('/api/cancel-subscription', async (req, res) => {
  try {
    const { subscriptionId, cancelAtPeriodEnd = true } = req.body;

    if (!subscriptionId) {
      return res.status(400).json({ error: 'Subscription ID is required' });
    }

    let subscription;
    if (cancelAtPeriodEnd) {
      // Cancel at end of billing period
      subscription = await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: true
      });
    } else {
      // Cancel immediately
      subscription = await stripe.subscriptions.cancel(subscriptionId);
    }

    res.json(subscription);
  } catch (error) {
    console.error('subscription_cancel_failed');
    res.status(500).json({ error: error.message });
  }
});

// Create customer portal session
app.post('/api/create-portal-session', async (req, res) => {
  try {
    const { customerId } = req.body;

    if (!customerId) {
      return res.status(400).json({ error: 'Customer ID is required' });
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.CLIENT_URL}/account`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('portal_session_failed');
    res.status(500).json({ error: error.message });
  }
});

// Get the few checkout fields the success page renders.
app.get('/api/checkout-session/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;
  if (!/^cs_[A-Za-z0-9_]+$/.test(sessionId || '')) {
    return res.status(400).json({ error: 'invalid_session' });
  }
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const summary = publicCheckoutSummary(session);
    if (!summary) return res.status(404).json({ error: 'not_found' });
    res.json(summary);
  } catch {
    console.error('checkout_summary_failed');
    res.status(500).json({ error: 'checkout_unavailable' });
  }
});

// Add subscription item (for add-ons)
app.post('/api/add-subscription-item', async (req, res) => {
  try {
    const { subscriptionId, priceId } = req.body;

    if (!subscriptionId || !priceId) {
      return res.status(400).json({ 
        error: 'Subscription ID and Price ID are required' 
      });
    }

    const subscriptionItem = await stripe.subscriptionItems.create({
      subscription: subscriptionId,
      price: priceId,
      proration_behavior: 'create_prorations',
    });

    res.json(subscriptionItem);
  } catch (error) {
    console.error('subscription_item_add_failed');
    res.status(500).json({ error: error.message });
  }
});

// Remove subscription item
app.post('/api/remove-subscription-item', async (req, res) => {
  try {
    const { subscriptionItemId } = req.body;

    if (!subscriptionItemId) {
      return res.status(400).json({ 
        error: 'Subscription Item ID is required' 
      });
    }

    const deleted = await stripe.subscriptionItems.del(subscriptionItemId, {
      proration_behavior: 'create_prorations',
    });

    res.json(deleted);
  } catch (error) {
    console.error('subscription_item_remove_failed');
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('server_error');
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
🚀 Server running on port ${PORT}
📡 API endpoint: http://localhost:${PORT}
🔗 Health check: http://localhost:${PORT}/health
💳 Stripe mode: ${process.env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? 'LIVE' : 'TEST'}
  `);
});

export default app;

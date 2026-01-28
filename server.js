import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

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

// Create Checkout Session for Subscriptions
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId, quantity = 1, customerEmail, metadata = {} } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        ...metadata,
        service_type: 'subscription'
      },
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/canceled`,
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      subscription_data: {
        metadata: {
          ...metadata
        }
      }
    });

    res.json({ 
      sessionId: session.id, 
      url: session.url 
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      error: error.message,
      type: error.type 
    });
  }
});

// Create Checkout Session for One-time Payments
app.post('/api/create-payment-session', async (req, res) => {
  try {
    const { priceId, quantity = 1, customerEmail, metadata = {} } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        ...metadata,
        service_type: 'one_time'
      },
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/canceled`,
      billing_address_collection: 'required',
    });

    res.json({ 
      sessionId: session.id, 
      url: session.url 
    });
  } catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).json({ 
      error: error.message,
      type: error.type 
    });
  }
});

// Webhook endpoint for Stripe events
app.post('/api/webhook', 
  express.raw({ type: 'application/json' }), 
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      console.error('⚠️  Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    try {
      switch (event.type) {
        case 'checkout.session.completed':
          const session = event.data.object;
          console.log('✅ Payment successful:', {
            sessionId: session.id,
            customerEmail: session.customer_email,
            amountTotal: session.amount_total,
            metadata: session.metadata
          });
          
          // TODO: Implement your business logic here:
          // - Send confirmation email
          // - Create user account
          // - Activate subscription in your database
          // - Send welcome email with next steps
          
          break;

        case 'customer.subscription.created':
          const subscriptionCreated = event.data.object;
          console.log('🎉 Subscription created:', {
            subscriptionId: subscriptionCreated.id,
            customerId: subscriptionCreated.customer,
            status: subscriptionCreated.status,
            metadata: subscriptionCreated.metadata
          });
          
          // TODO: Activate subscription in your database
          
          break;

        case 'customer.subscription.updated':
          const subscriptionUpdated = event.data.object;
          console.log('🔄 Subscription updated:', {
            subscriptionId: subscriptionUpdated.id,
            status: subscriptionUpdated.status,
            currentPeriodEnd: new Date(subscriptionUpdated.current_period_end * 1000)
          });
          
          // TODO: Update subscription status in your database
          
          break;

        case 'customer.subscription.deleted':
          const subscriptionDeleted = event.data.object;
          console.log('❌ Subscription canceled:', {
            subscriptionId: subscriptionDeleted.id,
            customerId: subscriptionDeleted.customer
          });
          
          // TODO: Deactivate subscription in your database
          
          break;

        case 'invoice.payment_succeeded':
          const invoice = event.data.object;
          console.log('💰 Invoice paid:', {
            invoiceId: invoice.id,
            amountPaid: invoice.amount_paid,
            subscriptionId: invoice.subscription
          });
          
          // TODO: Send receipt, update billing records
          
          break;

        case 'invoice.payment_failed':
          const failedInvoice = event.data.object;
          console.log('⚠️  Payment failed:', {
            invoiceId: failedInvoice.id,
            customerId: failedInvoice.customer,
            attemptCount: failedInvoice.attempt_count
          });
          
          // TODO: Send payment failed notification
          // - Notify customer via email
          // - Update subscription status
          // - Potentially pause service access
          
          break;

        case 'customer.created':
          const customer = event.data.object;
          console.log('👤 Customer created:', {
            customerId: customer.id,
            email: customer.email
          });
          break;

        default:
          console.log(`ℹ️  Unhandled event type: ${event.type}`);
      }

      res.json({ received: true });
    } catch (err) {
      console.error('Error processing webhook:', err);
      res.status(500).json({ error: 'Webhook processing failed' });
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
    console.error('Error retrieving subscription:', error);
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
    console.error('Error canceling subscription:', error);
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
    console.error('Error creating portal session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get checkout session details
app.get('/api/checkout-session/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.params.sessionId,
      {
        expand: ['customer', 'subscription']
      }
    );
    res.json(session);
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ error: error.message });
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
    console.error('Error adding subscription item:', error);
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
    console.error('Error removing subscription item:', error);
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
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

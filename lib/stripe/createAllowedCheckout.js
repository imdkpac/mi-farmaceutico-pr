import Stripe from 'stripe';
import { resolveCheckoutPlan } from './checkoutPlans.js';

let stripeClient;

function fail(statusCode, publicCode) {
  const error = new Error(publicCode);
  error.statusCode = statusCode;
  error.publicCode = publicCode;
  return error;
}

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw fail(500, 'checkout_unavailable');
  if (!stripeClient) stripeClient = new Stripe(key);
  return stripeClient;
}

function checkoutBase(origin) {
  const configured = typeof process.env.CLIENT_URL === 'string' ? process.env.CLIENT_URL.trim() : '';
  const base = (configured || origin || '').replace(/\/$/, '');
  if (!base || !/^https?:\/\//.test(base)) return '';
  return base;
}

/**
 * Create a Stripe-hosted Checkout session for an allowlisted plan.
 * Quantity is always 1. Customer email is collected by Stripe, not by us.
 * requiredMode, when set, rejects plans that use the other mode
 * (the legacy payment endpoint must not start a subscription).
 */
export async function createAllowedCheckout({ plan, priceId, lang, origin, requiredMode } = {}) {
  const resolved = resolveCheckoutPlan({ plan, priceId });
  if (!resolved) throw fail(400, 'plan_not_allowed');
  if (requiredMode && resolved.mode !== requiredMode) throw fail(400, 'plan_not_allowed');

  const base = checkoutBase(origin);
  if (!base) throw fail(500, 'checkout_unavailable');

  const safeLang = lang === 'es' ? 'es' : 'en';
  const planName = safeLang === 'es' ? resolved.nameEs : resolved.nameEn;
  const metadata = { plan: resolved.key, planName };

  const params = {
    mode: resolved.mode,
    payment_method_types: ['card'],
    line_items: [{ price: resolved.priceId, quantity: 1 }],
    metadata,
    locale: safeLang === 'es' ? 'es' : 'en',
    success_url: `${base}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${base}/canceled`,
    automatic_tax: { enabled: true },
    billing_address_collection: 'required',
  };

  if (resolved.mode === 'subscription') {
    params.allow_promotion_codes = true;
    params.subscription_data = { metadata };
  }

  try {
    const session = await getStripe().checkout.sessions.create(params);
    if (!session?.url) throw fail(502, 'checkout_unavailable');
    return { sessionId: session.id, url: session.url };
  } catch (error) {
    if (error.publicCode) throw error;
    console.error('stripe_checkout_error', error.type || '', error.code || '');
    throw fail(502, 'checkout_unavailable');
  }
}

import { STRIPE_PRICES } from '../../src/config/stripeConfig.js';

/**
 * Online checkout allowlist.
 * The browser may send a plan key or one of these price IDs.
 * Every other catalog price (foundationPlus, enhanced, concierge,
 * transitionExpress, homeVisit, safetyAudit) is rejected.
 *
 * Env vars override the live IDs stored in stripeConfig.js. Those IDs
 * stay as fallbacks so production keeps working before the owner sets them.
 */
const DEFAULTS = {
  foundation: STRIPE_PRICES.subscriptions.foundation,
  transition: STRIPE_PRICES.oneTime.transition,
};

export const CHECKOUT_PLANS = {
  foundation: {
    key: 'foundation',
    mode: 'subscription',
    nameEn: 'Foundation',
    nameEs: 'Fundación',
    env: 'STRIPE_PRICE_FOUNDATION',
  },
  transition: {
    key: 'transition',
    mode: 'payment',
    nameEn: 'Transition of Care',
    nameEs: 'Transición de Cuidado',
    env: 'STRIPE_PRICE_TRANSITION',
  },
};

export function priceIdFor(key) {
  const plan = CHECKOUT_PLANS[key];
  if (!plan) return '';
  const fromEnv = process.env[plan.env];
  if (typeof fromEnv === 'string' && fromEnv.trim()) return fromEnv.trim();
  return DEFAULTS[key] || '';
}

/**
 * Resolve a checkout request to an allowlisted plan.
 * A valid plan key wins. A raw price ID is accepted only when it equals
 * the server's current price for foundation or transition.
 * Client-supplied price IDs are ignored when a valid plan key is present.
 */
export function resolveCheckoutPlan({ plan, priceId } = {}) {
  if (typeof plan === 'string' && CHECKOUT_PLANS[plan]) {
    const id = priceIdFor(plan);
    if (!id) return null;
    return { ...CHECKOUT_PLANS[plan], priceId: id };
  }

  if (typeof priceId === 'string' && priceId) {
    for (const key of Object.keys(CHECKOUT_PLANS)) {
      const id = priceIdFor(key);
      if (id && priceId === id) return { ...CHECKOUT_PLANS[key], priceId: id };
    }
  }

  return null;
}

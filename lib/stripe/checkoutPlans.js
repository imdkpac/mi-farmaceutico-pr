import { STRIPE_PRICES } from '../../src/config/stripeConfig.js';

/**
 * Online checkout allowlist.
 * The browser may send a plan key or one of these price IDs.
 * STRIPE_STANDARD_PRICES (after family 10) is not listed here and is rejected.
 *
 * Env vars override the live IDs stored in stripeConfig.js. Those IDs
 * stay as fallbacks so production keeps working before the owner sets them.
 */
const DEFAULTS = {
  foundation: STRIPE_PRICES.subscriptions.foundation,
  foundationPlus: STRIPE_PRICES.subscriptions.foundationPlus,
  enhanced: STRIPE_PRICES.subscriptions.enhanced,
  concierge: STRIPE_PRICES.subscriptions.concierge,
  transition: STRIPE_PRICES.oneTime.transition,
  transitionExpress: STRIPE_PRICES.oneTime.transitionExpress,
  homeVisit: STRIPE_PRICES.oneTime.homeVisit,
  consult: STRIPE_PRICES.oneTime.consult,
};

export const CHECKOUT_PLANS = {
  foundation: {
    key: 'foundation',
    mode: 'subscription',
    nameEn: 'Foundation',
    nameEs: 'Fundación',
    env: 'STRIPE_PRICE_FOUNDATION',
  },
  foundationPlus: {
    key: 'foundationPlus',
    mode: 'subscription',
    nameEn: 'Foundation, two parents',
    nameEs: 'Fundación, dos padres',
    env: 'STRIPE_PRICE_FOUNDATION_PLUS',
  },
  enhanced: {
    key: 'enhanced',
    mode: 'subscription',
    nameEn: 'Enhanced',
    nameEs: 'Mejorado',
    env: 'STRIPE_PRICE_ENHANCED',
  },
  concierge: {
    key: 'concierge',
    mode: 'subscription',
    nameEn: 'Concierge',
    nameEs: 'Concierge',
    env: 'STRIPE_PRICE_CONCIERGE',
  },
  transition: {
    key: 'transition',
    mode: 'payment',
    nameEn: 'Transition of Care',
    nameEs: 'Transición de cuidado',
    env: 'STRIPE_PRICE_TRANSITION',
  },
  transitionExpress: {
    key: 'transitionExpress',
    mode: 'payment',
    nameEn: 'Transition of Care, expedited',
    nameEs: 'Transición de cuidado, expedita',
    env: 'STRIPE_PRICE_TRANSITION_EXPRESS',
  },
  homeVisit: {
    key: 'homeVisit',
    mode: 'payment',
    nameEn: 'Home visit and audit',
    nameEs: 'Visita y auditoría en el hogar',
    env: 'STRIPE_PRICE_HOME_VISIT',
  },
  consult: {
    key: 'consult',
    mode: 'payment',
    nameEn: '1-Hour Consultation',
    nameEs: 'Consulta de 1 hora',
    env: 'STRIPE_PRICE_CONSULT',
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
 * the server's current price for an allowlisted plan.
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

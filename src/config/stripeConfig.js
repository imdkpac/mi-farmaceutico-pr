/**
 * Stripe Price Configuration
 * All your actual Price IDs are configured here
 */

export const STRIPE_PRICES = {
  // Subscription Plans
  subscriptions: {
    foundation: 'price_1SuPSZBOaAFWSwOuMVEjx86j',
    foundationPlus: 'price_1SuPTEBOaAFWSwOuyLaLnGnj',
    enhanced: 'price_1SuPUSBOaAFWSwOuru7oJNSc',
    concierge: 'price_1SuPWrBOaAFWSwOukfUVB8zQ',
  },

  // Add-on Services
  addons: {
    priority: 'price_1SuPXvBOaAFWSwOuoZZTF3oU',
    complexity: 'price_1SuPYYBOaAFWSwOuxkv8RAw1',
  },

  // One-time Services
  oneTime: {
    transition: 'price_1SuPebBOaAFWSwOuEJcDyW7y',
    transitionExpress: 'price_1SuPffBOaAFWSwOupTtdMV2C',
    homeVisit: 'price_1SuPlBBOaAFWSwOuoNMsAPyw',
    safetyAudit: 'price_1SuPo1BOaAFWSwOuU9Nj4lww',
    structuredReview: 'price_1SuPoaBOaAFWSwOuhnqX8l73',
  },
};

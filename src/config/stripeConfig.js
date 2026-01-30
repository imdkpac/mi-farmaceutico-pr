/**
 * Stripe Price Configuration - PRODUCTION KEYS
 * All Price IDs are for LIVE mode (not test/sandbox)
 */

export const STRIPE_PRICES = {
  // Subscription Plans
  subscriptions: {
    foundation: 'price_1Sv7xjLm2d84XGYAGq7oO5FV',        // $110/month
    foundationPlus: 'price_1Sv801Lm2d84XGYA51lEDMgU',    // $165/month (2 parents)
    enhanced: 'price_1Sv80bLm2d84XGYApQDFLjwx',          // $195/month
    concierge: 'price_1Sv84XLm2d84XGYAljWslj3i',         // $325/month
  },

  // One-time Services
  oneTime: {
    transition: 'price_1Sv86TLm2d84XGYAr9vvlvuQ',             // $650
    transitionExpress: 'price_1Sv8J3Lm2d84XGYA2OlnYv72',      // $800
    homeVisit: 'price_1Sv878Lm2d84XGYAYV6dahTG',              // $350
    safetyAudit: 'price_1Sv87eLm2d84XGYAKbJawGlw',            // $250
  },
};

// Price labels for display
export const PRICE_LABELS = {
  foundation: '$110/month',
  foundationPlus: '$165/month',
  enhanced: '$195/month',
  concierge: '$325/month',
  transition: '$650',
  transitionExpress: '$800',
  homeVisit: '$350',
  safetyAudit: '$250',
};

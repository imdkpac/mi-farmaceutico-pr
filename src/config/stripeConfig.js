/**
 * Stripe price catalog. Server-side only — do not import this from React.
 * The browser sends a plan key. Price IDs never belong in the client bundle.
 *
 * Online checkout (env override, these live IDs are the fallback):
 *   STRIPE_PRICE_FOUNDATION  → foundation
 *   STRIPE_PRICE_TRANSITION  → transition
 *
 * Not on the allowlist and not wired to a button:
 *   foundationPlus ($165), enhanced ($195), concierge ($325),
 *   transitionExpress ($800), homeVisit ($350), safetyAudit ($250).
 * The site's displayed Safety Audit / Home Visit price is $425. Do not
 * attach homeVisit or safetyAudit to a button.
 */

export const STRIPE_PRICES = {
  subscriptions: {
    foundation: 'price_1Sv7xjLm2d84XGYAGq7oO5FV',        // $110/month
    foundationPlus: 'price_1Sv801Lm2d84XGYA51lEDMgU',    // $165/month (2 parents)
    enhanced: 'price_1Sv80bLm2d84XGYApQDFLjwx',          // $195/month
    concierge: 'price_1Sv84XLm2d84XGYAljWslj3i',         // $325/month
  },

  oneTime: {
    transition: 'price_1Sv86TLm2d84XGYAr9vvlvuQ',             // $650
    transitionExpress: 'price_1Sv8J3Lm2d84XGYA2OlnYv72',      // $800
    homeVisit: 'price_1Sv878Lm2d84XGYAYV6dahTG',              // $350
    safetyAudit: 'price_1Sv87eLm2d84XGYAKbJawGlw',            // $250
  },
};

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

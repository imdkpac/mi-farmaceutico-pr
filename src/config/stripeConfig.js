/**
 * Stripe price catalog. Server-side only — do not import this from React.
 * The browser sends a plan key. Price IDs never belong in the client bundle.
 *
 * Founding prices (first 10 families). Env override, live IDs are the fallback:
 *   STRIPE_PRICE_FOUNDATION          → foundation            $110/mo
 *   STRIPE_PRICE_FOUNDATION_PLUS     → foundationPlus        $165/mo (two parents)
 *   STRIPE_PRICE_ENHANCED            → enhanced              $195/mo
 *   STRIPE_PRICE_CONCIERGE           → concierge             $325/mo
 *   STRIPE_PRICE_TRANSITION          → transition            $650 one-time
 *   STRIPE_PRICE_TRANSITION_EXPRESS  → transitionExpress     $850 one-time
 *   STRIPE_PRICE_HOME_VISIT          → homeVisit             $350 one-time
 *   STRIPE_PRICE_CONSULT             → consult               $70 one-time
 *
 * STRIPE_STANDARD_PRICES is the after-10-families catalog. Those prices are
 * inactive in Stripe until family 11. They are not on the allowlist and
 * must not be displayed or charged from this site.
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
    transitionExpress: 'price_1Sv8J3Lm2d84XGYA2OlnYv72',      // $850
    homeVisit: 'price_1Sv878Lm2d84XGYAYV6dahTG',              // $350
    consult: 'price_1UcE4ULm2d84XGYAgtlYisKQ',                // $70
  },
};

/** Inactive until family 11. Not allowlisted. Not for display. */
export const STRIPE_STANDARD_PRICES = {
  subscriptions: {
    foundation: 'price_1UcE4WLm2d84XGYAiwYXF9Ab',   // $169/month
    enhanced: 'price_1UcE4ZLm2d84XGYAVdA5mMRK',     // $259/month
    concierge: 'price_1UcE4cLm2d84XGYAAZHTqBYO',    // $429/month
  },
  oneTime: {
    transition: 'price_1UcE4dLm2d84XGYAerHnT5hw',   // $1,050
    homeVisit: 'price_1UcE4QLm2d84XGYA6aPDgSOz',    // $425
  },
};

export const PRICE_LABELS = {
  foundation: '$110/month',
  foundationPlus: '$165/month',
  enhanced: '$195/month',
  concierge: '$325/month',
  transition: '$650',
  transitionExpress: '$850',
  homeVisit: '$350',
  consult: '$70',
};

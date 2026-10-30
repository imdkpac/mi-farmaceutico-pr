/**
 * Google Analytics 4 Event Tracking
 * GA4 Measurement ID: G-S9RFJRJXFG
 */

/**
 * Track a custom event
 * @param {string} action - The event action
 * @param {string} category - The event category
 * @param {string} label - Optional event label
 */
export const trackEvent = (action, category, label = '') => {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Analytics not initialized');
    return;
  }

  const eventParams = {
    event_category: category,
  };

  if (label) {
    eventParams.event_label = label;
  }

  window.gtag('event', action, eventParams);
  console.log('GA Event:', { action, category, label });
};

/**
 * Pre-configured event trackers
 */

// Schedule consultation clicks
export const trackScheduleClick = (location = 'unknown') => {
  trackEvent('schedule_click', 'engagement', location);
};

// Navigation/scroll events
export const trackScrollTo = (section) => {
  trackEvent('scroll_to', 'navigation', section);
};

// Pricing tier selections
export const trackSelectTier = (tierName) => {
  trackEvent('select_tier', 'pricing', tierName.toLowerCase());
};

// One-time service bookings
export const trackBookService = (serviceName) => {
  trackEvent('book_service', 'one_time', serviceName.toLowerCase().replace(/\s+/g, '_'));
};

// Phone and email clicks
export const trackPhoneClick = () => {
  trackEvent('phone_click', 'engagement', 'contact');
};

export const trackEmailClick = () => {
  trackEvent('email_click', 'engagement', 'contact');
};

// Checkout events
export const trackCheckoutStart = (planName, amount) => {
  trackEvent('begin_checkout', 'ecommerce', planName, amount);
};

export const trackCheckoutComplete = (planName, amount, transactionId) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: amount,
      currency: 'USD',
      items: [{
        item_name: planName,
        price: amount,
        quantity: 1
      }]
    });
  }
};

/**
 * Specific event trackers as requested
 */

// Hero section
export const trackHeroCTA = () => {
  trackEvent('schedule_click', 'engagement', 'hero_cta');
};

export const trackSeeHowItWorks = () => {
  trackEvent('scroll_to', 'navigation', 'how_it_works');
};

// Tier selections
export const trackFoundationTier = () => {
  trackEvent('select_tier', 'pricing', 'foundation');
};

export const trackEnhancedTier = () => {
  trackEvent('select_tier', 'pricing', 'enhanced');
};

export const trackConciergeTier = () => {
  trackEvent('select_tier', 'pricing', 'concierge');
};

// One-time services
export const trackTransitionOfCare = () => {
  trackEvent('book_service', 'one_time', 'transition_of_care');
};

export const trackInHomeVisit = () => {
  trackEvent('book_service', 'one_time', 'in_home_visit');
};

export const trackSafetyAudit = () => {
  trackEvent('book_service', 'one_time', 'safety_audit');
};
export const trackTierSelection = trackSelectTier;
export const trackOneTimeService = trackBookService;

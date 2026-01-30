/**
 * Google Analytics 4 Tracking Utility
 * 
 * Initialize GA4 tracking and track key conversion events
 */

/**
 * Initialize Google Analytics
 * Call this once in your App.jsx or main.jsx
 * 
 * @param {string} measurementId - Your GA4 Measurement ID (G-XXXXXXXXXX)
 */
export const initGA = (measurementId = 'G-XXXXXXXXXX') => {
  if (typeof window === 'undefined') return;

  // Create and append GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  // Make gtag globally available
  window.gtag = gtag;

  console.log('Google Analytics initialized:', measurementId);
};

/**
 * Track a custom event
 * 
 * @param {string} action - The event action (e.g., 'schedule_click', 'select_tier')
 * @param {string} category - The event category (e.g., 'engagement', 'pricing')
 * @param {string} label - Optional event label (e.g., 'hero_cta', 'foundation')
 * @param {number} value - Optional numeric value
 */
export const trackEvent = (action, category, label = '', value = null) => {
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

  if (value !== null) {
    eventParams.value = value;
  }

  window.gtag('event', action, eventParams);

  console.log('GA Event tracked:', { action, category, label, value });
};

/**
 * Pre-defined event trackers for common actions
 */
export const trackScheduleClick = (location = 'unknown') => {
  trackEvent('schedule_click', 'engagement', location);
};

export const trackTierSelection = (tierName, price) => {
  trackEvent('select_tier', 'pricing', tierName.toLowerCase(), price);
};

export const trackOneTimeService = (serviceName, price) => {
  trackEvent('select_service', 'one_time', serviceName.toLowerCase(), price);
};

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

export const trackPhoneClick = () => {
  trackEvent('phone_click', 'engagement', 'contact');
};

export const trackEmailClick = () => {
  trackEvent('email_click', 'engagement', 'contact');
};

/**
 * Example usage in components:
 * 
 * import { trackScheduleClick, trackTierSelection } from './utils/analytics';
 * 
 * // In button onClick:
 * onClick={() => {
 *   trackScheduleClick('hero_section');
 *   setCalendlyModal(true);
 * }}
 * 
 * // For tier selection:
 * onClick={() => {
 *   trackTierSelection('Enhanced', 195);
 *   handlePlanSelect(...);
 * }}
 */

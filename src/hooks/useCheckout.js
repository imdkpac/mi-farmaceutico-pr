import { useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const KNOWN_ERRORS = new Set(['plan_not_allowed', 'checkout_unavailable']);

function apiBase() {
  if (typeof window === 'undefined') return '';
  if (window.location.hostname.includes('localhost') || window.location.hostname === '127.0.0.1') {
    return import.meta.env.VITE_API_URL || 'http://localhost:3001';
  }
  return window.location.origin;
}

function checkoutError(code) {
  const error = new Error(code);
  error.code = code;
  return error;
}

function isStripeCheckoutUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'checkout.stripe.com';
  } catch {
    return false;
  }
}

/**
 * Start Stripe-hosted Checkout for an allowlisted plan key and redirect to session.url.
 * Allowed keys: foundation, foundationPlus, enhanced, concierge, transition,
 * transitionExpress, homeVisit, consult.
 */
export function useCheckout() {
  const { lang } = useLanguage();

  const startCheckout = useCallback(async (plan) => {
    let response;
    try {
      response = await fetch(`${apiBase()}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, lang: lang === 'es' ? 'es' : 'en' }),
      });
    } catch {
      throw checkoutError('checkout_unavailable');
    }

    let data = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      throw checkoutError(KNOWN_ERRORS.has(data.error) ? data.error : 'checkout_unavailable');
    }
    if (!isStripeCheckoutUrl(data.url)) {
      throw checkoutError('checkout_unavailable');
    }

    window.location.assign(data.url);
  }, [lang]);

  return { startCheckout };
}

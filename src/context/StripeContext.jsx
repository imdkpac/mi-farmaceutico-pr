import React, { createContext, useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeContext = createContext();

export const useStripe = () => {
  const context = useContext(StripeContext);
  if (!context) {
    throw new Error('useStripe must be used within StripeProvider');
  }
  return context;
};

export const StripeProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Detect API URL - works for both local dev and Vercel deployment
  const getApiUrl = () => {
    // If explicit API URL is set, use it
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    }
    
    // For Vercel deployment, use the same origin
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      // If we're on localhost, use the dev server
      if (origin.includes('localhost')) {
        return 'http://localhost:3001';
      }
      // Otherwise use the same origin (Vercel deployment)
      return origin;
    }
    
    return 'http://localhost:3001';
  };

  const API_URL = getApiUrl();

  /**
   * Create a Stripe Checkout Session for subscriptions
   */
  const createCheckoutSession = async (priceId, customerEmail, metadata = {}) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Creating checkout session...', { API_URL, priceId, customerEmail });

      const response = await fetch(`${API_URL}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          customerEmail,
          metadata,
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log('Checkout session created:', data);
      
      if (data.url) {
        console.log('Redirecting to:', data.url);
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received from server');
      }
      
      return data;
    } catch (err) {
      console.error('Error creating checkout session:', err);
      const errorMessage = err.message || 'Failed to create checkout session. Please try again.';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Create a Stripe Checkout Session for one-time payments
   */
  const createPaymentSession = async (priceId, customerEmail, metadata = {}) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Creating payment session...', { API_URL, priceId, customerEmail });

      const response = await fetch(`${API_URL}/api/create-payment-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          customerEmail,
          metadata,
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log('Payment session created:', data);
      
      if (data.url) {
        console.log('Redirecting to:', data.url);
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received from server');
      }
      
      return data;
    } catch (err) {
      console.error('Error creating payment session:', err);
      const errorMessage = err.message || 'Failed to create payment session. Please try again.';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Get subscription details
   */
  const getSubscription = async (subscriptionId) => {
    try {
      const response = await fetch(`${API_URL}/api/subscription/${subscriptionId}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get subscription');
      }

      return await response.json();
    } catch (err) {
      console.error('Error getting subscription:', err);
      throw err;
    }
  };

  /**
   * Cancel a subscription
   */
  const cancelSubscription = async (subscriptionId, cancelAtPeriodEnd = true) => {
    try {
      const response = await fetch(`${API_URL}/api/cancel-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId,
          cancelAtPeriodEnd,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to cancel subscription');
      }

      return await response.json();
    } catch (err) {
      console.error('Error canceling subscription:', err);
      throw err;
    }
  };

  /**
   * Create customer portal session
   */
  const createPortalSession = async (customerId) => {
    try {
      const response = await fetch(`${API_URL}/api/create-portal-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create portal session');
      }

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      }
      
      return data;
    } catch (err) {
      console.error('Error creating portal session:', err);
      throw err;
    }
  };

  /**
   * Get checkout session details
   */
  const getCheckoutSession = async (sessionId) => {
    try {
      const response = await fetch(`${API_URL}/api/checkout-session/${sessionId}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get checkout session');
      }

      return await response.json();
    } catch (err) {
      console.error('Error getting checkout session:', err);
      throw err;
    }
  };

  /**
   * Add subscription item (for add-ons)
   */
  const addSubscriptionItem = async (subscriptionId, priceId) => {
    try {
      const response = await fetch(`${API_URL}/api/add-subscription-item`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId,
          priceId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add subscription item');
      }

      return await response.json();
    } catch (err) {
      console.error('Error adding subscription item:', err);
      throw err;
    }
  };

  /**
   * Remove subscription item
   */
  const removeSubscriptionItem = async (subscriptionItemId) => {
    try {
      const response = await fetch(`${API_URL}/api/remove-subscription-item`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionItemId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to remove subscription item');
      }

      return await response.json();
    } catch (err) {
      console.error('Error removing subscription item:', err);
      throw err;
    }
  };

  const value = {
    loading,
    error,
    createCheckoutSession,
    createPaymentSession,
    getSubscription,
    cancelSubscription,
    createPortalSession,
    getCheckoutSession,
    addSubscriptionItem,
    removeSubscriptionItem,
  };

  return (
    <StripeContext.Provider value={value}>
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    </StripeContext.Provider>
  );
};

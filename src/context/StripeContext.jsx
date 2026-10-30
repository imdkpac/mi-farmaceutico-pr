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
  
  // Get API URL - in production on Vercel, API routes are at the same origin
  const getApiUrl = () => {
    // If we're in the browser
    if (typeof window !== 'undefined') {
      // In production (not localhost), use the same origin for API routes
      if (!window.location.hostname.includes('localhost')) {
        return window.location.origin;
      }
    }
    
    // Local development - use env variable or default to localhost:3001
    return import.meta.env.VITE_API_URL || 'http://localhost:3001';
  };

  const API_URL = getApiUrl();

  /**
   * Create a Stripe Checkout Session for subscriptions
   */
  const createCheckoutSession = async (priceId, customerEmail, metadata = {}) => {
    setLoading(true);
    setError(null);

    try {
      console.log('=== CHECKOUT DEBUG ===');
      console.log('API_URL:', API_URL);
      console.log('Full URL:', `${API_URL}/api/create-checkout-session`);
      console.log('Price ID:', priceId);
      console.log('Email:', customerEmail);
      console.log('Metadata:', metadata);
      console.log('====================');

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
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { error: errorText || `HTTP error ${response.status}` };
        }
        
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
      console.log('=== PAYMENT SESSION DEBUG ===');
      console.log('API_URL:', API_URL);
      console.log('Full URL:', `${API_URL}/api/create-payment-session`);
      console.log('Price ID:', priceId);
      console.log('Email:', customerEmail);
      console.log('============================');

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
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { error: errorText || `HTTP error ${response.status}` };
        }
        
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
   * Get checkout session details
   */
  const getCheckoutSession = async (sessionId) => {
    try {
      const response = await fetch(`${API_URL}/api/checkout-session/${sessionId}`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to get checkout session');
      }

      return await response.json();
    } catch (err) {
      console.error('Error getting checkout session:', err);
      throw err;
    }
  };

  const value = {
    loading,
    error,
    createCheckoutSession,
    createPaymentSession,
    getCheckoutSession,
  };

  return (
    <StripeContext.Provider value={value}>
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    </StripeContext.Provider>
  );
};

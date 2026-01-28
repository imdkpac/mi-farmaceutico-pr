import React, { useState } from 'react';
import { X, Loader, Check, CreditCard, Shield } from 'lucide-react';
import { useStripe } from '../context/StripeContext';

export default function CheckoutModal({ isOpen, onClose, plan, type = 'subscription' }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { createCheckoutSession, createPaymentSession } = useStripe();

  if (!isOpen || !plan) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const priceId = plan.priceId;
      
      if (!priceId) {
        throw new Error('Price ID is missing. Please contact support.');
      }

      const metadata = {
        planName: plan.name,
        planSubtitle: plan.sub || '',
        planType: type,
        language: plan.language || 'en',
      };

      if (type === 'subscription') {
        await createCheckoutSession(priceId, email, metadata);
      } else {
        await createPaymentSession(priceId, email, metadata);
      }
    } catch (err) {
      setError(err.message || 'Failed to start checkout. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !loading) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        {!loading && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        )}

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {plan.name}
          </h2>
          {plan.sub && (
            <p className="text-teal-600 dark:text-teal-400 font-medium">
              {plan.sub}
            </p>
          )}
        </div>

        {/* Price display */}
        <div className="mb-6 p-6 bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-900/20 dark:to-sky-900/20 rounded-2xl border border-teal-100 dark:border-teal-800">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-teal-600 dark:text-teal-400">
              {plan.price}
            </span>
            {type === 'subscription' && (
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                /month
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {type === 'subscription' 
              ? 'Billed monthly • Cancel anytime' 
              : 'One-time payment • No recurring charges'}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl animate-in slide-in-from-top duration-200">
            <p className="text-sm text-red-600 dark:text-red-400 font-medium">
              {error}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            />
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              We'll send your receipt and service details to this email
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading || !email}
            className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                <span>Proceed to Secure Checkout</span>
              </>
            )}
          </button>
        </form>

        {/* Security badges */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-600" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              <span>Stripe Verified</span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
            You'll be redirected to Stripe's secure checkout page
          </p>
        </div>
      </div>
    </div>
  );
}

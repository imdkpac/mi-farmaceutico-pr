import React, { useState } from 'react';
import { X, Loader, Check, CreditCard, Shield, AlertCircle } from 'lucide-react';
import { useStripe } from '../context/StripeContext';

export default function CheckoutModal({ isOpen, onClose, plan, type = 'subscription' }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { createCheckoutSession, createPaymentSession } = useStripe();

  if (!isOpen || !plan) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Show confirmation modal before proceeding
    setShowConfirmation(true);
  };

  const handleConfirmCharge = async () => {
    setShowConfirmation(false);
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

  const handleCancelConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !loading && !showConfirmation) {
      onClose();
    }
  };

  // Extract price amount for display
  const priceAmount = plan.price;
  const chargeType = type === 'subscription' ? 'monthly subscription' : 'one-time payment';

  return (
    <>
      {/* Main Checkout Modal */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={handleBackdropClick}
      >
        <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
          {/* Close button */}
          {!loading && !showConfirmation && (
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
                {priceAmount}
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

          {/* Production Warning */}
          <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                  Real Payment - Not a Test
                </p>
                <p className="text-xs text-amber-800 dark:text-amber-300 mt-1">
                  Your card will be charged immediately. You'll receive a confirmation before processing.
                </p>
              </div>
            </div>
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
                  <span>Continue to Secure Checkout</span>
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

      {/* Confirmation Modal Overlay */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-8 shadow-2xl animate-in zoom-in duration-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Confirm Your {type === 'subscription' ? 'Subscription' : 'Purchase'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                This is a real charge to your credit card
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600 dark:text-slate-400">Service:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{plan.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600 dark:text-slate-400">Amount:</span>
                <span className="text-2xl font-bold text-teal-600">{priceAmount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Type:</span>
                <span className="text-slate-900 dark:text-white capitalize">{chargeType}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleConfirmCharge}
                className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg"
              >
                Yes, Proceed to Payment
              </button>
              <button
                onClick={handleCancelConfirmation}
                className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold py-4 rounded-xl transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

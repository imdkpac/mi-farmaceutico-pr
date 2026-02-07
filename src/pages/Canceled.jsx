import React from 'react';
import { XCircle, Home, ArrowLeft, HelpCircle } from 'lucide-react';

export default function Canceled() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleTryAgain = () => {
    window.location.href = '/#services';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-12 max-w-2xl w-full">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-8 animate-in zoom-in duration-500">
            <XCircle className="w-20 h-20 text-slate-400 dark:text-slate-500" />
          </div>
        </div>
        
        {/* Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Payment Canceled
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
            Your payment was not processed
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            No charges were made to your account. You can try again whenever you're ready.
          </p>
        </div>

        {/* Info Box */}
        <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            What happened?
          </h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex gap-2">
              <span className="text-slate-400">•</span>
              <span>You may have clicked the back button or closed the payment window</span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-400">•</span>
              <span>The payment session may have expired</span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-400">•</span>
              <span>You decided not to complete the purchase at this time</span>
            </li>
          </ul>
        </div>

        {/* Common Questions */}
        <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Have questions?
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            We're here to help! If you experienced any issues during checkout or have questions about our services:
          </p>
          <div className="space-y-2 text-sm">
            <a 
              href="mailto:boticarxpr@outlook.com" 
              className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span>📧</span>
              <span>boticarxpr@outlook.com</span>
            </a>
            <a 
              href="tel:+17876676560" 
              className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span>📞</span>
              <span>+1 (787) 457-0388</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleTryAgain}
            className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Try Again
          </button>

          <button
            onClick={handleGoHome}
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </button>
        </div>

        {/* Reassurance */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            All payment information is securely processed by Stripe. We never store your payment details.
          </p>
        </div>
      </div>
    </div>
  );
}

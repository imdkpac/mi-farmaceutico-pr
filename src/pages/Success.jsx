import React, { useEffect, useState } from 'react';
import { CheckCircle, Home, Mail, Calendar, Loader } from 'lucide-react';
import { useStripe } from '../context/StripeContext';

export default function Success() {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getCheckoutSession } = useStripe();

  useEffect(() => {
    const fetchSessionData = async () => {
      // Get session ID from URL params
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id');

      if (sessionId) {
        try {
          const data = await getCheckoutSession(sessionId);
          setSessionData(data);
        } catch (error) {
          console.error('Error fetching session:', error);
        }
      }
      setLoading(false);
    };

    fetchSessionData();
  }, [getCheckoutSession]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-sky-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Loading your confirmation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-12 max-w-2xl w-full">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-full p-8 animate-in zoom-in duration-500">
            <CheckCircle className="w-20 h-20 text-teal-600 dark:text-teal-400" />
          </div>
        </div>
        
        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
            Thank you for choosing Mi Farmacéutico en PR
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Your payment has been processed successfully.
          </p>
        </div>

        {/* Session Details */}
        {sessionData && (
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wide">
              Order Details
            </h3>
            <div className="space-y-3">
              {sessionData.customer_email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {sessionData.customer_email}
                    </p>
                  </div>
                </div>
              )}
              
              {sessionData.amount_total && (
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Amount Paid
                    </p>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">
                      ${(sessionData.amount_total / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              )}

              {sessionData.metadata?.planName && (
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Service Selected
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {sessionData.metadata.planName}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="mb-8 p-6 bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-900/20 dark:to-sky-900/20 rounded-2xl border border-teal-100 dark:border-teal-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            What's Next?
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-bold">1.</span>
              <span>You'll receive a confirmation email shortly with your receipt</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-bold">2.</span>
              <span>Our team will contact you within 24 hours to schedule your initial consultation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-bold">3.</span>
              <span>We'll gather necessary information about medications and care needs</span>
            </li>
          </ul>
        </div>

        {/* Support Info */}
        <div className="mb-8 text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Need help?</strong> Contact us at{' '}
            <a href="mailto:boticarxpr@outlook.com" className="underline hover:text-amber-700">
              info@mifarmaceuticopr.com
            </a>
            {' '}or{' '}
            <a href="tel:+17876676560" className="underline hover:text-amber-700">
              +1 (787) 457-0388
            </a>
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={handleGoHome}
          className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </button>

        {/* Fine Print */}
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-6">
          Transaction ID: {sessionData?.id || 'Processing...'}
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import { XCircle, Home, ArrowLeft, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  es: {
    title: 'Pago Cancelado',
    paymentNotProcessed: 'Su pago no fue procesado',
    noCharges: 'No se realizaron cargos a su cuenta. Puede intentar de nuevo cuando esté listo.',
    whatHappened: '¿Qué pasó?',
    reasons: [
      'Es posible que haya presionado el botón de regreso o cerrado la ventana de pago',
      'La sesión de pago puede haber expirado',
      'Decidió no completar la compra en este momento',
    ],
    haveQuestions: '¿Tiene preguntas?',
    hereToHelp: '¡Estamos aquí para ayudar! Si experimentó algún problema durante el pago o tiene preguntas sobre nuestros servicios:',
    tryAgain: 'Intentar de Nuevo',
    returnHome: 'Volver al Inicio',
    secure: 'Toda la información de pago es procesada de forma segura por Stripe. Nunca almacenamos sus datos de pago.',
  },
  en: {
    title: 'Payment Canceled',
    paymentNotProcessed: 'Your payment was not processed',
    noCharges: 'No charges were made to your account. You can try again whenever you\'re ready.',
    whatHappened: 'What happened?',
    reasons: [
      'You may have clicked the back button or closed the payment window',
      'The payment session may have expired',
      'You decided not to complete the purchase at this time',
    ],
    haveQuestions: 'Have questions?',
    hereToHelp: 'We\'re here to help! If you experienced any issues during checkout or have questions about our services:',
    tryAgain: 'Try Again',
    returnHome: 'Return to Home',
    secure: 'All payment information is securely processed by Stripe. We never store your payment details.',
  },
};

export default function Canceled() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleTryAgain = () => {
    window.location.href = '/servicios';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-2xl w-full">
        <div className="mb-8 flex justify-center">
          <div className="bg-slate-100 rounded-full p-8">
            <XCircle className="w-20 h-20 text-slate-400" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.title}</h1>
          <p className="text-xl text-slate-600 mb-2">{t.paymentNotProcessed}</p>
          <p className="text-slate-500">{t.noCharges}</p>
        </div>

        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            {t.whatHappened}
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {t.reasons.map((reason, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-400">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">{t.haveQuestions}</h3>
          <p className="text-sm text-slate-700 mb-4">{t.hereToHelp}</p>
          <div className="space-y-2 text-sm">
            <a href="mailto:boticarxpr@outlook.com" className="flex items-center gap-2 text-teal-600 hover:underline">
              <span>📧</span>
              <span>boticarxpr@outlook.com</span>
            </a>
            <a href="tel:+17876676560" className="flex items-center gap-2 text-teal-600 hover:underline">
              <span>📞</span>
              <span>+1 (787) 457-0388</span>
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleTryAgain}
            className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.tryAgain}
          </button>

          <button
            onClick={handleGoHome}
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all"
          >
            <Home className="w-5 h-5" />
            {t.returnHome}
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">{t.secure}</p>
        </div>
      </div>
    </div>
  );
}

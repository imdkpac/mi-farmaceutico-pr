import React, { useEffect, useState } from 'react';
import { CheckCircle, Home, Mail, Calendar, Loader } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function formatAmount(cents, currency, lang) {
  if (!Number.isFinite(cents)) return '';
  const code = typeof currency === 'string' && currency ? currency.toUpperCase() : 'USD';
  try {
    return new Intl.NumberFormat(lang === 'es' ? 'es-PR' : 'en-US', {
      style: 'currency',
      currency: code,
    }).format(cents / 100);
  } catch {
    return `$${(cents / 100).toFixed(2)}`;
  }
}

const translations = {
  es: {
    loading: 'Cargando su confirmación...',
    title: '¡Pago Exitoso!',
    thankYou: 'Gracias por elegir Mi Farmacéutico en PR',
    paymentProcessed: 'Su pago ha sido procesado exitosamente.',
    orderDetails: 'Detalles del Pedido',
    email: 'Correo',
    amountPaid: 'Monto Pagado',
    serviceSelected: 'Servicio Seleccionado',
    whatsNext: '¿Qué sigue?',
    steps: [
      'Recibirá un correo de confirmación con su recibo',
      'Nuestro equipo se contactará dentro de 24 horas para agendar su consulta inicial',
      'Recopilaremos la información necesaria sobre medicamentos y necesidades de cuidado',
    ],
    needHelp: '¿Necesita ayuda?',
    contactUs: 'Contáctenos en',
    orCall: 'o llame al',
    returnHome: 'Volver al Inicio',
    transactionId: 'ID de Transacción',
  },
  en: {
    loading: 'Loading your confirmation...',
    title: 'Payment Successful!',
    thankYou: 'Thank you for choosing Mi Farmacéutico en PR',
    paymentProcessed: 'Your payment has been processed successfully.',
    orderDetails: 'Order Details',
    email: 'Email',
    amountPaid: 'Amount Paid',
    serviceSelected: 'Service Selected',
    whatsNext: "What's Next?",
    steps: [
      "You'll receive a confirmation email shortly with your receipt",
      'Our team will contact you within 24 hours to schedule your initial consultation',
      "We'll gather necessary information about medications and care needs",
    ],
    needHelp: 'Need help?',
    contactUs: 'Contact us at',
    orCall: 'or call',
    returnHome: 'Return to Home',
    transactionId: 'Transaction ID',
  },
};

export default function Success() {
  // status: 'loading' | 'ready' | 'unavailable'  (unavailable = no session id or lookup failed;
  // the page still confirms the payment generically, it just hides order details)
  const [status, setStatus] = useState('loading');
  const [sessionData, setSessionData] = useState(null);
  const { lang } = useLanguage();
  const t = translations[lang];
  const loading = status === 'loading';

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    if (!sessionId) {
      setStatus('unavailable');
      return undefined;
    }
    const controller = new AbortController();
    const base = window.location.hostname.includes('localhost')
      ? import.meta.env.VITE_API_URL || 'http://localhost:3001'
      : window.location.origin;
    fetch(`${base}/api/checkout-session/${encodeURIComponent(sessionId)}`, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data) => { setSessionData(data); setStatus('ready'); })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('Could not load checkout summary');
        setStatus('unavailable');
      });
    return () => controller.abort();
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const planName = sessionData?.planName || sessionData?.metadata?.planName;
  const amountLabel = formatAmount(sessionData?.amount_total, sessionData?.currency, lang);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-sky-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">{t.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-emerald-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-2xl w-full">
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full p-8">
            <CheckCircle className="w-20 h-20 text-teal-600" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.title}</h1>
          <p className="text-xl text-slate-600 mb-2">{t.thankYou}</p>
          <p className="text-slate-500">{t.paymentProcessed}</p>
        </div>

        {sessionData && (
          <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">{t.orderDetails}</h3>
            <div className="space-y-3">
              {sessionData.customer_email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{t.email}</p>
                    <p className="text-slate-900 font-medium">{sessionData.customer_email}</p>
                  </div>
                </div>
              )}
              {amountLabel && (
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{t.amountPaid}</p>
                    <p className="text-slate-900 font-bold text-lg">{amountLabel}</p>
                  </div>
                </div>
              )}
              {planName && (
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{t.serviceSelected}</p>
                    <p className="text-slate-900 font-medium">{planName}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mb-8 p-6 bg-gradient-to-br from-teal-50 to-sky-50 rounded-2xl border border-teal-100">
          <h3 className="text-lg font-bold text-slate-900 mb-3">{t.whatsNext}</h3>
          <ul className="space-y-3 text-slate-700">
            {t.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-teal-600 font-bold">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>{t.needHelp}</strong> {t.contactUs}{' '}
            <a href="mailto:boticarxpr@outlook.com" className="underline hover:text-amber-700">boticarxpr@outlook.com</a>
            {' '}{t.orCall}{' '}
            <a href="tel:+17876676560" className="underline hover:text-amber-700">+1 (787) 667-6560</a>
          </p>
        </div>

        <button
          onClick={handleGoHome}
          className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          {t.returnHome}
        </button>

        <p className="text-center text-xs text-slate-500 mt-6">
          {t.transactionId}: {sessionData?.id || 'Processing...'}
        </p>
      </div>
    </div>
  );
}

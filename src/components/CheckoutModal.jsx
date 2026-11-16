import React, { useEffect, useReducer, useState } from 'react';
import { X, Loader, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCheckout } from '../hooks/useCheckout';
import { checkoutReducer, CHECKOUT_INITIAL, isBusy, canClose } from '../lib/checkoutMachine';
import { SERVICE_AGREEMENT_HREF } from '../lib/serviceAgreement';
import { refundCopy } from '../lib/refundPolicy';

const copy = {
  en: {
    close: 'Close',
    oneTime: 'One-time payment. This charge does not renew.',
    agreeBefore: "I've read the ",
    agreeLink: 'Service Agreement',
    agreementRequired: 'Check the box to confirm you have read the Service Agreement.',
    continue: 'Continue to secure checkout',
    starting: 'Starting checkout...',
    redirect: "You'll be redirected to Stripe's secure checkout page.",
    plan_not_allowed: 'This service is not available for online checkout. Please schedule a consultation.',
    checkout_unavailable: 'Checkout could not be started. Please try again in a moment.',
  },
  es: {
    close: 'Cerrar',
    oneTime: 'Pago único. Este cargo no se renueva.',
    agreeBefore: 'He leído el ',
    agreeLink: 'Acuerdo de Servicio',
    agreementRequired: 'Marque la casilla para confirmar que ha leído el Acuerdo de Servicio.',
    continue: 'Continuar al pago seguro',
    starting: 'Abriendo el pago...',
    redirect: 'Se le redirigirá a la página de pago seguro de Stripe.',
    plan_not_allowed: 'Este servicio no está disponible para pago en línea. Por favor agende una consulta.',
    checkout_unavailable: 'No se pudo iniciar el pago. Inténtelo de nuevo en un momento.',
  },
};

export default function CheckoutModal({ isOpen, onClose, plan }) {
  const { lang } = useLanguage();
  const t = copy[lang] || copy.es;
  const policy = refundCopy(lang === 'en' ? 'en' : 'es');
  const { startCheckout } = useCheckout();
  const [agreed, setAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState('');
  const [machine, dispatch] = useReducer(checkoutReducer, CHECKOUT_INITIAL);
  const loading = isBusy(machine);

  useEffect(() => {
    if (!isOpen) {
      dispatch({ type: 'RESET' });
      setAgreed(false);
      setAgreementError('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape' && canClose(machine)) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, machine, onClose]);

  if (!isOpen || !plan) return null;

  const errorCode = machine.error;
  const errorText = errorCode ? (t[errorCode] || t.checkout_unavailable) : agreementError;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!agreed) {
      setAgreementError(t.agreementRequired);
      return;
    }
    if (loading) return;
    setAgreementError('');
    dispatch({ type: 'SUBMIT' });
    try {
      await startCheckout(plan.key);
      dispatch({ type: 'SUCCEEDED' });
    } catch (err) {
      dispatch({
        type: 'FAILED',
        message: err.code === 'plan_not_allowed' ? 'plan_not_allowed' : 'checkout_unavailable',
      });
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget && canClose(machine)) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(15, 46, 48, 0.72)' }}
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        className="relative w-full max-w-lg p-6 sm:p-8"
        style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}
      >
        {canClose(machine) && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full"
            style={{ color: 'var(--pine)' }}
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <h2 id="checkout-title" className="font-display text-3xl font-medium text-[#0F2E30] pr-10 mb-4">
          {plan.name}
        </h2>

        <div className="mb-5 p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '20px' }}>
          <p className="font-display text-4xl font-medium" style={{ color: 'var(--flamboyan)' }}>
            {plan.price}
            {plan.period && (
              <span className="font-body text-lg" style={{ color: 'var(--muted-ink)' }}>{plan.period}</span>
            )}
          </p>
          {plan.mode === 'payment' && (
            <p className="font-body text-sm mt-2" style={{ color: 'var(--muted-ink)' }}>{t.oneTime}</p>
          )}
        </div>

        {/* PENDING LEGAL REVIEW by Natalie Ramos. See src/lib/refundPolicy.js */}
        <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--pine)' }}>
          {plan.mode === 'subscription' ? policy.combined : policy.refund}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => {
                setAgreed(event.target.checked);
                if (event.target.checked) setAgreementError('');
              }}
              disabled={loading}
              required
              className="mt-1 h-5 w-5 flex-shrink-0"
              style={{ accentColor: 'var(--pine)' }}
            />
            <span className="font-body text-base" style={{ color: 'var(--pine)' }}>
              {t.agreeBefore}
              <a
                href={SERVICE_AGREEMENT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: 'var(--flamboyan)' }}
              >
                {t.agreeLink}
              </a>
            </span>
          </label>

          {errorText && (
            <p role="alert" className="font-body text-sm" style={{ color: 'var(--flamboyan)' }}>
              {errorText}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !agreed}
            className="btn-capsule btn-capsule-primary w-full text-base px-6 py-3 inline-flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>{t.starting}</span>
              </>
            ) : (
              <span>{t.continue}</span>
            )}
          </button>
        </form>

        <p className="mt-5 flex items-center justify-center gap-2 font-body text-xs" style={{ color: 'var(--muted-ink)' }}>
          <Shield className="w-4 h-4" aria-hidden="true" />
          {t.redirect}
        </p>
      </div>
    </div>
  );
}

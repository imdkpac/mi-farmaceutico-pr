/**
 * PENDING LEGAL REVIEW by Natalie Ramos.
 * Owner rule: money is returned only when the service was not provided.
 * Once the service has been provided, there is no refund.
 * Subscription cancellation still requires 30 days' written notice.
 * Do not restore "first month refundable" or satisfaction-guarantee wording.
 */
export const REFUND_POLICY = {
  es: {
    refund: 'Si no recibiste el servicio, te devolvemos tu dinero. Una vez el servicio se ofrece, no hay reembolso.',
    cancel: 'Puedes cancelar la suscripción con un aviso por escrito de 30 días.',
  },
  en: {
    refund: 'If you did not receive the service, we return your money. Once the service has been provided, there is no refund.',
    cancel: "You can cancel a subscription with 30 days' written notice.",
  },
};

export function refundCopy(lang) {
  const copy = REFUND_POLICY[lang] || REFUND_POLICY.es;
  return {
    ...copy,
    combined: `${copy.cancel} ${copy.refund}`,
  };
}

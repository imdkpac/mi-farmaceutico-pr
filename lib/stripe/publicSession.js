/**
 * Fields the success page is allowed to see.
 * Do not add customer names, addresses, payment methods, or the raw session.
 */
export function publicCheckoutSummary(session) {
  if (!session || typeof session.id !== 'string') return null;
  const email = session.customer_details?.email || session.customer_email || null;
  return {
    id: session.id,
    customer_email: typeof email === 'string' ? email : null,
    amount_total: Number.isFinite(session.amount_total) ? session.amount_total : null,
    currency: typeof session.currency === 'string' ? session.currency : null,
    planName: typeof session.metadata?.planName === 'string' ? session.metadata.planName : null,
  };
}

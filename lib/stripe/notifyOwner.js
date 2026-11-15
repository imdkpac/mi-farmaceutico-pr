/**
 * Email the owner when a checkout completes.
 * No-ops when RESEND_API_KEY, NOTIFY_EMAIL, or NOTIFY_FROM is unset.
 * The customer email is included in the message body so the service can be
 * delivered. It is never written to logs. Card data is never read.
 */

function clean(value) {
  if (typeof value !== 'string') return '';
  if (/[\r\n]/.test(value)) return '';
  return value.trim();
}

function oneLine(value, max) {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .slice(0, max);
}

function noticeText(session) {
  const amountCents = session?.amount_total;
  const amount = Number.isFinite(amountCents) ? (amountCents / 100).toFixed(2) : 'unknown';
  const email = session?.customer_details?.email || session?.customer_email || 'unknown';
  return [
    'A Stripe checkout session completed.',
    `Plan: ${oneLine(session?.metadata?.plan, 40) || 'unknown'}`,
    `Plan name: ${oneLine(session?.metadata?.planName, 80) || 'unknown'}`,
    `Amount: ${amount} ${oneLine(session?.currency, 12) || 'unknown'}`,
    `Payment status: ${oneLine(session?.payment_status, 40) || 'unknown'}`,
    `Session: ${oneLine(session?.id, 120) || 'unknown'}`,
    `Customer email: ${oneLine(email, 200) || 'unknown'}`,
  ].join('\n');
}

export async function notifyOwner(session) {
  const apiKey = clean(process.env.RESEND_API_KEY);
  const to = clean(process.env.NOTIFY_EMAIL);
  const from = clean(process.env.NOTIFY_FROM);
  if (!apiKey || !to || !from) return { sent: false };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) return { sent: false };

  const plan = oneLine(session?.metadata?.plan, 40) || 'checkout';
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Checkout completed: ${plan}`,
      text: noticeText(session),
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    console.error('owner_notification_failed', response.status);
    const error = new Error('notify_failed');
    error.statusCode = 500;
    throw error;
  }

  return { sent: true };
}

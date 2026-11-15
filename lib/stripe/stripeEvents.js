import { notifyOwner } from './notifyOwner.js';

/**
 * Best-effort dedupe of Stripe event ids.
 *
 * There is no datastore. This Set lives in the memory of one serverless
 * instance (or one local Node process). A cold start, a second instance,
 * or two deliveries that arrive at the same time can both pass the check.
 * The owner email can therefore be sent more than once for the same event.
 * A shared store (for example Vercel KV) is required before this is exact.
 */
const seenEventIds = new Set();
const MAX_SEEN = 500;

export function rememberEvent(eventId) {
  if (!eventId) return false;
  if (seenEventIds.has(eventId)) return true;
  seenEventIds.add(eventId);
  if (seenEventIds.size > MAX_SEEN) {
    const oldest = seenEventIds.values().next().value;
    seenEventIds.delete(oldest);
  }
  return false;
}

export function forgetEvent(eventId) {
  if (eventId) seenEventIds.delete(eventId);
}

export function resetSeenEvents() {
  seenEventIds.clear();
}

/**
 * Acknowledge every verified event. Email the owner only for
 * checkout.session.completed. Throws if that email was configured and failed,
 * after forgetting the id so Stripe's retry can try again.
 */
export async function processStripeEvent(event) {
  if (!event || typeof event.id !== 'string' || typeof event.type !== 'string') {
    const error = new Error('invalid_event');
    error.statusCode = 400;
    throw error;
  }

  if (rememberEvent(event.id)) return { duplicate: true };

  try {
    if (event.type === 'checkout.session.completed') {
      await notifyOwner(event.data?.object);
    }
    return { duplicate: false };
  } catch (error) {
    forgetEvent(event.id);
    throw error;
  }
}

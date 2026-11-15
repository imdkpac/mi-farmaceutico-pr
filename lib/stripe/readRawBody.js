import { buffer } from 'node:stream/consumers';

/**
 * Bytes Stripe signed. A re-serialized JSON object would fail verification,
 * so a parsed object is treated as missing.
 */
export async function readRawBody(req) {
  if (Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === 'string') return Buffer.from(req.body, 'utf8');
  if (req.body != null) {
    const error = new Error('raw_body_unavailable');
    error.statusCode = 400;
    throw error;
  }
  return buffer(req);
}

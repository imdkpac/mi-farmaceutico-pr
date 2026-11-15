// Checkout modal state. The service-agreement checkbox lives in the component.
// This machine only tracks the request so a second click cannot start another session.
//
//   idle ──SUBMIT──▶ submitting ──SUCCEEDED──▶ redirecting (terminal)
//    ▲                    │
//    └── (reset)          └──FAILED──▶ error ──SUBMIT──▶ submitting
//   any state ──RESET──▶ idle
//
// Invalid transitions are ignored.

export const CHECKOUT_INITIAL = { status: 'idle', error: '' };

const TRANSITIONS = {
  idle: { SUBMIT: 'submitting' },
  error: { SUBMIT: 'submitting' },
  submitting: { SUCCEEDED: 'redirecting', FAILED: 'error' },
  redirecting: {},
};

export function checkoutReducer(state, event) {
  if (event.type === 'RESET') return CHECKOUT_INITIAL;
  const next = TRANSITIONS[state.status]?.[event.type];
  if (!next) return state;
  return { status: next, error: next === 'error' ? event.message || '' : '' };
}

export const isBusy = (s) => s.status === 'submitting' || s.status === 'redirecting';
export const canClose = (s) => s.status === 'idle' || s.status === 'error';

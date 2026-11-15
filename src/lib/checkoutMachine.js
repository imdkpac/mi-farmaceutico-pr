// Explicit state machine for the checkout modal.
// Replaces the implicit combination of { loading, showConfirmation, error } booleans.
//
//   idle ──SUBMIT──▶ confirming ──CONFIRM──▶ submitting ──SUCCEEDED──▶ redirecting (terminal)
//     ▲                  │                        │
//     └──────CANCEL──────┘                        └──FAILED──▶ error ──SUBMIT──▶ confirming
//   any state ──RESET──▶ idle
//
// Invalid transitions are ignored (state is returned unchanged), which is what
// prevents double-submits and charges while a request is in flight.

export const CHECKOUT_INITIAL = { status: 'idle', error: '' };

const TRANSITIONS = {
  idle: { SUBMIT: 'confirming' },
  error: { SUBMIT: 'confirming' },
  confirming: { CANCEL: 'idle', CONFIRM: 'submitting' },
  submitting: { SUCCEEDED: 'redirecting', FAILED: 'error' },
  redirecting: {},
};

export function checkoutReducer(state, event) {
  if (event.type === 'RESET') return CHECKOUT_INITIAL;
  const next = TRANSITIONS[state.status]?.[event.type];
  if (!next) return state;
  return { status: next, error: next === 'error' ? event.message || '' : '' };
}

// Derived flags so components never re-derive them ad hoc.
export const isBusy = (s) => s.status === 'submitting' || s.status === 'redirecting';
export const canClose = (s) => s.status === 'idle' || s.status === 'error';

# AGENTS.md — mi-farmaceutico-pr

Canonical public site for Mi Farmacéutico en PR. Vite + React 18 + Tailwind CSS + React Router. Stripe Checkout is created on the server; the browser does not load Stripe.js. Production is the `main` branch on Vercel: https://mi-farmaceutico-pr.vercel.app

This file is a draft for Christian to approve as a PR. Do not push or merge it without his review.

## Run, build, and test

Commands from `package.json` and `README-INSTALACION.md`:

```bash
npm install
npm run dev       # Vite dev server, port 5173 (vite.config.js)
npm run build     # vite build, output dist/, sourcemaps on
npm run preview   # vite preview
```

There is no `test` or `lint` script in `package.json`. There is no `start` script for the local API.

Local Stripe API: `server.js` listens on `process.env.PORT` or 3001. `.env.example` sets `VITE_API_URL=http://localhost:3001` for localhost only. On Vercel, `api/*.js` are the serverless handlers; `api/webhook.js` handles webhooks there, not `server.js`. Copy `.env.example` for local env. Server secrets must not use a `VITE_` prefix. Do not set `VITE_STRIPE_PUBLISHABLE_KEY`.

Required Vercel env (Production and Preview): `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `NOTIFY_EMAIL` (`portalatin@mifarmaceuticopr.com`), `NOTIFY_FROM`. `STRIPE_AUTOMATIC_TAX` must be exactly `true` to turn tax on; leave it unset or false until Stripe Tax is active. Optional: `CLIENT_URL`, `STRIPE_PRICE_*` for founding plans (fallbacks live in `src/config/stripeConfig.js`). After-10-family prices and Foundation Plus are not on the checkout allowlist.

## Folder map

- `src/App.jsx` — routes: `/`, `/servicios`, `/acuerdo-de-servicio`, `/guia`, `/aprende`, `/success`, `/canceled`
- `src/pages/` — page components, plus `guia-sections/` and `aprende-sections/`
- `src/components/` — `Navbar.jsx`, `CheckoutModal.jsx`, `CalendlyModal.jsx`
- `src/config/stripeConfig.js` — plan keys and price fallbacks
- `src/context/` — language (default Spanish)
- `src/data/` — hospitals, nursing homes, guides, medication lookup and costs
- `src/hooks/`, `src/lib/`, `src/utils/`
- `api/` — Vercel functions: `create-checkout-session.js`, `create-payment-session.js`, `checkout-session/[sessionId].js`, `webhook.js`, `health.js`
- `lib/stripe/` — allowlist, session creation, webhook processing, owner email
- `public/builder.html` — medication list (stays on the device); CSP in `vercel.json`
- `public/` — logo, photo, fonts, icons, `sw.js`, manifest
- Docs: `README.md`, `README-INSTALACION.md`, `.env.example`

Allowed checkout plan keys: `foundation`, `enhanced`, `concierge`, `transition`, `transitionExpress`, `homeVisit`, `consult`. Quantity is always 1. Free 15-minute consults, hospital, and hogar programs stay on Calendly or email, not Stripe.

## Deploy

`main` deploys to Vercel. `vercel.json` rewrites every non-`/api/` path to `index.html`. Production webhook: `https://mi-farmaceutico-pr.vercel.app/api/webhook` (minimum event: `checkout.session.completed`). Preview URLs have the same path; use test-mode signing secrets for tests. Webhook signature is checked against the raw body. There is no database; event dedup is in-memory only and can double-send the owner email.

Do not change live Stripe prices without Christian's confirmation. Do not merge PRs; open a PR and wait for him.

## Content rules (Natalie Ramos / standing)

- Do not change wording waiting on Natalie: the public HIPAA badge, privacy claims, refund text, and `/acuerdo-de-servicio`. Keep the HIPAA badge until she decides. Never write "HIPAA safe."
- Site Spanish privacy line, if you must quote it: "Su información nunca sale de este dispositivo." Do not use "nosotros nunca la vemos" or "nunca la vemos" until she confirms.
- Never write "healthcare proxy" (it does not exist in Puerto Rico). Signing authority, if mentioned: the Patient signs if they have capacity; otherwise only a PR court-appointed *tutor*, an *apoderado* under a *poder general* or *poder duradero* that expressly covers health care or health information, or a *mandatario* under Law 160-2001. Documentation is required before the start date; no provisional option.
- Never show the $165 price on public pages, in checkout, or in marketing. It belongs only in the private agreement.
- Phone number is (787) 667-6560. 457-0388 and 677-6560 are errors. Public email: portalatin@mifarmaceuticopr.com
- No readmission-reduction claims. No legal advice. Cite a source for every statistic. No patient information anywhere (including this repo, chats, and the shared bot computer).
- Nothing is posted or published without Christian's review.

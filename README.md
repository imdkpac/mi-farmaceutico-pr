# Mi Farmacéutico en PR

Sitio Vite/React. El despliegue de producción es la rama `main` en Vercel.

La guía de instalación, diseño y cobro está en [README-INSTALACION.md](README-INSTALACION.md). El ejemplo de variables está en [.env.example](.env.example).

## Cobro en línea

Checkout hospedado de Stripe. El navegador envía la clave del plan (`foundation`, `enhanced`, `concierge`, `transition`, `transitionExpress`, `homeVisit`, `consult`). El servidor elige el Price ID.

En Vercel (Production y Preview) haga falta:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_AUTOMATIC_TAX` — solo `true` enciende `automatic_tax`. Si falta, queda apagado.
- `RESEND_API_KEY`
- `NOTIFY_EMAIL` — `portalatin@mifarmaceuticopr.com`
- `NOTIFY_FROM`

Los Price IDs de fundador pueden fijarse con `STRIPE_PRICE_FOUNDATION`, `STRIPE_PRICE_ENHANCED`, `STRIPE_PRICE_CONCIERGE`, `STRIPE_PRICE_TRANSITION`, `STRIPE_PRICE_TRANSITION_EXPRESS`, `STRIPE_PRICE_HOME_VISIT` y `STRIPE_PRICE_CONSULT`. Si faltan, el código usa los IDs vivos de `src/config/stripeConfig.js`. `STRIPE_PRICE_FOUNDATION_PLUS` no está en la lista permitida.

Webhook de producción: `https://mi-farmaceutico-pr.vercel.app/api/webhook`

Correo público: portalatin@mifarmaceuticopr.com. Teléfono: (787) 667-6560.

El acuerdo en `/acuerdo-de-servicio` y el texto de reembolso están pendientes de revisión legal por Natalie Ramos.

# Mi Farmacéutico en PR — Unificación

## Resumen

La raíz del repositorio es el sitio canónico (lista de medicamentos, guía de salud, Aprende y Stripe). Las carpetas duplicadas `unified-site/`, `app/` y `Guia-de-Salud-PR-main/` se eliminaron; su contenido ya vive bajo `src/`.

## Estructura del sitio unificado

| Ruta | Contenido |
|------|-----------|
| `/` | **Inicio** — Lista de medicamentos (front and center) |
| `/guia` | Guía de Salud PR (hospitales, costos, etc.) |
| `/aprende` | Aprende sobre tu salud (enfermedades, medicamentos) |
| `/servicios` | Servicios profesionales con Stripe |
| `/success` | Confirmación de pago Stripe |
| `/canceled` | Pago cancelado Stripe |

## Archivos nuevos/modificados

### Copiar a su proyecto (sobrescribir existentes)

```
src/
├── App.jsx                          ← NUEVO ROUTING
├── context/
│   └── LanguageContext.jsx          ← NUEVO (i18n global)
├── components/
│   └── Navbar.jsx                   ← NUEVO (navegación unificada)
└── pages/
    ├── HomePage.jsx                 ← NUEVO (lista de medicamentos al frente)
    ├── LandingPage.jsx              ← MODIFICADO (default español, usa contexto)
    ├── GuiaPage.jsx                 ← NUEVO
    ├── AprendePage.jsx              ← NUEVO
    ├── Success.jsx                  ← MODIFICADO (bilingüe)
    └── Canceled.jsx                 ← MODIFICADO (bilingüe)
```

## Instrucciones de instalación

### Paso 1: Hacer backup

```bash
cd /home/christian/Documents/mi-farmaceutico-pr-main
git add -A
git commit -m "backup-antes-unificacion"
```

### Paso 2: Crear carpeta context

```bash
mkdir -p src/context
```

### Paso 3: Copiar archivos

Copie todos los archivos de este paquete a su proyecto:

```bash
# Desde la raíz de este repositorio (no existe una carpeta unified-site/)
cp src/context/LanguageContext.jsx  /ruta/a/su/proyecto/src/context/
cp src/components/Navbar.jsx        /ruta/a/su/proyecto/src/components/
cp src/App.jsx                      /ruta/a/su/proyecto/src/
cp src/pages/HomePage.jsx           /ruta/a/su/proyecto/src/pages/
cp src/pages/GuiaPage.jsx           /ruta/a/su/proyecto/src/pages/
cp src/pages/AprendePage.jsx        /ruta/a/su/proyecto/src/pages/
cp src/pages/LandingPage.jsx        /ruta/a/su/proyecto/src/pages/
cp src/pages/Success.jsx            /ruta/a/su/proyecto/src/pages/
cp src/pages/Canceled.jsx           /ruta/a/su/proyecto/src/pages/
```

### Paso 4: Verificar dependencias

Su `package.json` ya debe tener:
- `react-router-dom` (para routing)
- `lucide-react` (para iconos)
- Tailwind CSS configurado

Si le falta algo, instale:

```bash
npm install react-router-dom lucide-react
```

### Paso 5: Ajustar index.css (si es necesario)

Asegúrese que su `src/index.css` tenga al menos:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Paso 6: Probar

```bash
npm run dev
```

## Cambios importantes

### 1. Navbar compartido
- Aparece en TODAS las páginas
- Idioma por defecto: **español**
- Botón ES/EN siempre visible
- Teléfono (787) 667-6560 siempre visible
- En móvil: tabs horizontales scrolleables (no hamburguesa escondida)

### 2. LandingPage (/servicios)
- Ya NO tiene su propio toggle de idioma (usa el global)
- Sigue teniendo dark mode toggle
- Header interno sticky ahora aparece **debajo** del Navbar compartido
- Todo el código Stripe permanece intacto

### 3. HomePage (/)
- Lista de medicamentos es lo PRIMERO que se ve
- Hero con gradiente teal invita a usar la herramienta
- Tarjetas de acceso rápido a otras secciones
- Barra de confianza
- Footer con emergencias 9-1-1 y Línea PAS

### 4. GuiaPage y AprendePage
- Marcadores "Próximamente" — listos para que usted agregue contenido
- Cada uno tiene CTA de retorno a la lista de medicamentos

### 5. Success / Canceled
- Ahora bilingües usando el contexto global
- "Return to Home" va a `/` (lista de medicamentos)

## Próximos pasos sugeridos

### Prioridad Alta
1. **Guía y Aprende ya están en el sitio raíz**
   - `/guia` usa `src/pages/GuiaPage.jsx` y `src/pages/guia-sections/`
   - `/aprende` usa `src/pages/AprendePage.jsx` y `src/pages/aprende-sections/`
   - No quedan carpetas fuente aparte que portar

### Prioridad Media
3. **Agregar más interacción para 45+**:
   - Botón "Texto grande" (toggle de font-size)
   - Botón "Alto contraste"
   - Compartir lista por WhatsApp
   - Recordatorios de medicamentos

4. **SEO y Meta tags** por página

### Prioridad Baja
5. **Animaciones suaves** (scroll-reveal)
6. **Analytics** en todas las páginas

## Notas de diseño para 45+

- Texto mínimo: 16px-18px
- Botones mínimo: 48px de alto
- Contraste alto: texto oscuro sobre fondo claro
- Labels explícitos: nunca solo íconos
- Lenguaje simple: evitar jerga médica
- Siempre visible: teléfono y emergencias

## Si algo falla

1. Revise la consola del navegador (F12)
2. Verifique que `LanguageContext.jsx` esté en `src/context/`
3. Verifique que no haya dos `BrowserRouter` (solo debe estar en `App.jsx`)
4. La lista de medicamentos abre `/builder.html` (`public/builder.html`), enlazada desde `HomePage.jsx`. El componente `src/components/medicamentos/BuilderMedicamentos.jsx` se eliminó porque nada lo importaba.

## Variables de entorno (Vercel)

El cobro en línea es Stripe Checkout hospedado: el navegador hace POST a `/api/create-checkout-session` y redirige a `session.url`. No hace falta clave publicable ni Stripe.js.

Defina estas variables en el proyecto de Vercel (Production y Preview). Los Price IDs de abajo son el respaldo en código: si la variable falta, el servidor usa ese ID vivo para que producción no se caiga antes de configurarlas. Aun así, conviene fijarlas en Vercel. El ejemplo está en `.env.example`.

| Variable | Cuándo hace falta | Qué es |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | Para crear sesiones | Clave secreta (`sk_live_...` o `sk_test_...`). Solo en el servidor. |
| `STRIPE_WEBHOOK_SECRET` | Para aceptar webhooks | Secreto de firma (`whsec_...`) del endpoint registrado en Stripe. |
| `STRIPE_AUTOMATIC_TAX` | Impuesto en Checkout | `true` solo si Stripe Tax ya está activo en la cuenta. Cualquier otro valor, o si la variable falta, deja `automatic_tax` apagado. Sin Tax activo, `true` hace fallar la creación de la sesión. Aunque esté en `true`, Stripe solo cobra impuesto donde hay un registro activo. |
| `STRIPE_PRICE_FOUNDATION` | Fundación | Suscripción, $110/mes. Respaldo: `price_1Sv7xjLm2d84XGYAGq7oO5FV`. |
| `STRIPE_PRICE_FOUNDATION_PLUS` | Fundación, dos padres | Suscripción, $165/mes. Respaldo: `price_1Sv801Lm2d84XGYA51lEDMgU`. |
| `STRIPE_PRICE_ENHANCED` | Mejorado | Suscripción, $195/mes. Respaldo: `price_1Sv80bLm2d84XGYApQDFLjwx`. |
| `STRIPE_PRICE_CONCIERGE` | Concierge | Suscripción, $325/mes. Respaldo: `price_1Sv84XLm2d84XGYAljWslj3i`. |
| `STRIPE_PRICE_TRANSITION` | Transición de cuidado | Pago único, $650. Respaldo: `price_1Sv86TLm2d84XGYAr9vvlvuQ`. |
| `STRIPE_PRICE_TRANSITION_EXPRESS` | Transición expedita | Pago único, $850. Respaldo: `price_1Sv8J3Lm2d84XGYA2OlnYv72`. |
| `STRIPE_PRICE_HOME_VISIT` | Visita en el hogar | Pago único, $425. Respaldo: `price_1UcE4QLm2d84XGYA6aPDgSOz`. |
| `STRIPE_PRICE_SAFETY_AUDIT` | Auditoría de seguridad | Pago único, $425. Respaldo: `price_1UcE4SLm2d84XGYA7ebzKZWh`. |
| `STRIPE_PRICE_CONSULT` | Consulta de 1 hora | Pago único, $70. Respaldo: `price_1UcE4ULm2d84XGYAgtlYisKQ`. |
| `RESEND_API_KEY` | Aviso al dueño | API key de [Resend](https://resend.com). Si falta, el webhook no envía correo y responde 200. |
| `NOTIFY_EMAIL` | Aviso al dueño | Correo que recibe el aviso de pago. Valor a usar: `portalatin@mifarmaceuticopr.com`. Si falta, no se envía correo. |
| `NOTIFY_FROM` | Aviso al dueño | Remitente verificado en Resend, por ejemplo `Mi Farmacéutico <avisos@mifarmaceuticopr.com>`. Si falta, no se envía correo. |
| `CLIENT_URL` | Opcional | Origen de `/success` y `/canceled`, sin barra final. Si falta, se usa el encabezado `Origin` de la petición. |
| `VITE_API_URL` | Solo en local | Origen del API cuando el sitio corre en localhost (por defecto `http://localhost:3001`). En Vercel no se usa. |

No ponga en esas variables los Price IDs de después de la familia 10 (`STRIPE_STANDARD_PRICES` en `src/config/stripeConfig.js`). Están inactivos hasta la familia 11, no se muestran en el sitio y el servidor los rechaza.

No configure `VITE_STRIPE_PUBLISHABLE_KEY`. El cliente ya no carga Stripe.js.

### Webhook en Stripe

En Stripe → Developers → Webhooks, el endpoint de producción es:

`https://mi-farmaceutico-pr.vercel.app/api/webhook`

Evento mínimo: `checkout.session.completed`.

Copie el signing secret a `STRIPE_WEBHOOK_SECRET`. El mismo endpoint existe en cada preview de Vercel (`https://<preview>.vercel.app/api/webhook`); para pruebas use el secreto de un endpoint de test mode.

El manejador verifica la firma sobre el cuerpo crudo (`bodyParser` desactivado). No registra el evento: el cuerpo trae el correo del cliente.

### Deduplicación

No hay base de datos. El id del evento se recuerda solo en la memoria de esa instancia serverless. Un arranque en frío, otra instancia, o dos entregas a la vez pueden procesar el mismo `event.id` dos veces, y el correo al dueño puede duplicarse. Para que sea exacto hace falta un almacén compartido (por ejemplo Vercel KV). Si el correo está configurado y Resend falla, se olvida el id y se responde 500 para que Stripe reintente.

### Lista permitida

El servidor crea sesiones para `foundation`, `foundationPlus`, `enhanced`, `concierge`, `transition`, `transitionExpress`, `homeVisit`, `safetyAudit` y `consult`. Cualquier otro `plan` o `priceId` recibe `plan_not_allowed`. La cantidad siempre es 1. El correo del cliente lo pide Stripe en su página, no este sitio.

La consulta gratis de 15 minutos, y los programas para hospitales y hogares, siguen en Calendly o por correo. No tienen cobro en línea.

### Lo que todavía hay que probar en test mode

Cree una sesión con las claves `sk_test_` / `whsec_` de test, pague con `4242...`, confirme que `/success` muestra solo correo, monto, moneda, nombre del plan e id, y que el webhook llega a `/api/webhook` sin error de firma. Deje `STRIPE_AUTOMATIC_TAX` sin definir, o en cualquier valor que no sea `true`, hasta que Stripe Tax esté activo en la cuenta.

## Contacto

Christian Alexis Portalatín Cordero, Pharm.D.
(787) 667-6560 | portalatin@mifarmaceuticopr.com

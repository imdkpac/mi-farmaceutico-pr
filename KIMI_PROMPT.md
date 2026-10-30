PROYECTO: /home/christian/Documents/mi-farmaceutico-pr-main (rama: main)

URL PÚBLICA DEL DEV SERVER (proyecto raíz — Mi Farmacéutico en PR):
https://vdsdlk-ip-38-93-165-204.tunnelmole.net
(túnel tunnelmole → http://localhost:3000; local: npm run dev -- --port 3000)

Para el subproyecto Guía de Salud PR: cd Guia-de-Salud-PR-main && npm run dev (puerto 5173)

PERMISOS SUGERIDOS PARA ESTA SESIÓN:
--allow-read --allow-write --allow-run="git,npm,tree,cloudflared" --cwd="/home/christian/Documents/mi-farmaceutico-pr-main"

INSTRUCCIÓN: Reference these files by path for edits.

EXCLUSIONES (.kimiignore): node_modules/ .git/ .env *.log dist/ .next/

----- KIMI_CONTEXT.md -----

.
api/
  checkout-session/
    [sessionId].js
  create-checkout-session.js
  create-payment-session.js
  health.js
app/
  components.json
  eslint.config.js
  .gitignore
  index.html
  info.md
  package.json
  package-lock.json
  postcss.config.js
  public/
    fonts/
    images/
  README.md
  src/
    App.tsx
    assets/
    components/
    data/
    hooks/
    index.css
    lib/
    main.tsx
    types/
  tailwind.config.js
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
.gitignore
Guia-de-Salud-PR-main/
  components.json
  eslint.config.js
  .gitignore
  index.html
  info.md
  package.json
  package-lock.json
  postcss.config.js
  public/
    images/
  README.md
  src/
    App.css
    App.tsx
    components/
    data/
    hooks/
    index.css
    lib/
    main.tsx
    pages/
    sections/
    types/
  tailwind.config.js
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
index.html
KIMI_CONTEXT.md
.kimiignore
package.json
package-lock.json
postcss.config.js
public/
  christian-portalatin.jpg
server.js
src/
  App.jsx
  components/
    CalendlyModal.jsx
    CheckoutModal.jsx
    medicamentos/
  config/
    stripeConfig.js
  context/
    StripeContext.jsx
  data/
    guias.js
  hooks/
    usePersistentState.js
  index.css
  main.jsx
  pages/
    Canceled.jsx
    HomePage.jsx
    LandingPage.jsx
    Success.jsx
  utils/
    analytics.js
    fechas.js
    listaMedicamentos.js
tailwind.config.js
vercel.json
vite.config.js


## Scripts (package.json)

### raíz — mi-farmaceutico-pr (React 18 + Vite 4, JSX)
- `dev`: `vite`
- `build`: `vite build`
- `preview`: `vite preview`
- `vercel-build`: `vite build`

### Guia-de-Salud-PR-main (React 19 + Vite 7 + TypeScript + shadcn)
- `dev`: `vite`
- `build`: `tsc -b && vite build`
- `lint`: `eslint .`
- `preview`: `vite preview`

## Git

- Rama actual: main

### Últimos 5 commits
- 7be423d backup-pre-kimi

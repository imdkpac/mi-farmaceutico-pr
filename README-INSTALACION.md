# Mi Farmacéutico en PR — Unificación

## Resumen

Este paquete une tres proyectos en uno solo:
- **mi-farmaceutico-pr** (root) — Lista de medicamentos + Stripe
- **app/** — Aprende (educación del paciente)
- **Guia-de-Salud-PR-main** — Guía de salud PR

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
# Desde esta carpeta (unified-site/)
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
1. **Portar contenido de Guia-de-Salud-PR-main** → `/guia`
   - Copiar componentes: Hospitals, NursingHomes, Costs, Checklist
   - Convertir de TypeScript a JSX si es necesario

2. **Portar contenido de app/** → `/aprende`
   - Copiar componentes: Library, SlideDetail
   - Copiar datos: DECKS
   - Convertir de TypeScript a JSX

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
4. Si `BuilderMedicamentos` no aparece, verifique la ruta de importación en `HomePage.jsx`

## Contacto

Christian Alexis Portalatín Cordero, Pharm.D.
(787) 667-6560 | boticarxpr@outlook.com

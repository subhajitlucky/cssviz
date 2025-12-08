# CSS Universe — Visual CSS Learning Labs

Futuristic, neon-minimal learning experience for every CSS topic. Explore layouts, typography, gradients, animations, rendering, and Houdini APIs with interactive visualizers and live, copy-ready CSS.

## Features
- React + Vite + TypeScript + Tailwind (glassmorphism, gradients, motion)
- Routing for all topics listed in the spec (selectors through Houdini + debugging)
- Visualizers: Flexbox, Grid, Box Model, Typography, Colors/Gradients, Animations, Custom Properties
- Dark/light theme with persistence in `localStorage`
- Copy CSS buttons, draggable flex items, smooth page transitions, and scroll reveal
- Responsive layout with animated hero, cards, and glowing backgrounds

## Getting started
```bash
npm install
npm run dev   # local dev server
npm run build # production build
npm run preview
npm run lint  # lint all files
```

## Project structure
- `src/index.css` — Tailwind layers, global gradients, base theme styles
- `src/theme/ThemeProvider.tsx` — theme context + persistence
- `src/data/topics.ts` — all topic metadata and routing info
- `src/components/` — layout (navbar/footer), UI primitives, visualizers, common helpers
- `src/pages/` — `Home`, topic pages, and `NotFound`
- `tailwind.config.js` — theme tokens (fonts, colors, keyframes)

## Visualizers at a glance
- **Flexbox Lab**: direction, wrapping, alignment, gap, animated draggable tiles
- **Grid Lab**: auto-fit vs explicit tracks, gaps, alignment
- **Box Model**: margin/padding/border/radius with layered preview
- **Typography Lab**: font size, line height, letter spacing, variable weight
- **Color Lab**: HSL sliders, dual-hue gradients, live CSS variables
- **Animation Studio**: duration, timing, delay, iterations, directions
- **Custom Properties**: tokens for color, radius, gaps, elevation with live card

## Theming
- Toggle in navbar; theme stored under `css-universe-theme`
- Applies `light`/`dark` classes to `document.documentElement` and updates `color-scheme`

## Notes
- Tailwind configured with custom fonts (Space Grotesk, Inter), glow shadows, and animated gradients
- Paths use alias `@/*` (see `tsconfig.app.json` and `vite.config.ts`)


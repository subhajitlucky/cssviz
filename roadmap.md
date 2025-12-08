# CSS Universe Roadmap

## Goals (from project.json)
- Deliver a full React + Vite app with Tailwind CSS (shadcn optional), react-router.
- All pages and visualizers functional, with dark/light mode persisted.
- Modern, futuristic UI; smooth animations; real-time rendering and copy‑CSS.
- Mobile-responsive, accessible controls and docs included.

## Phases

### Phase 1 — Foundation & Theming
- Finalize theme tokens for light/dark (no stray neon unless intentional).
- Hardening: layout shell, global spacing, typography, focus states.
- Global components ready: Navbar, Footer, Button, ThemeToggle, GlassCard.

### Phase 2 — Routing & Structure
- Define routes for all topics/visualizers listed in project.json.
- Build reusable TopicCard/Category grid; stub pages with meaningful copy.
- Add “How to use visualizers” helper panel.

### Phase 3 — Visualizer Framework
- Stabilize `VisualizerPanel` (controls + canvas + CSS output + reset).
- Control kit: Slider, ToggleGroup, Select, Switch, color inputs (HSL), accessible and touch-friendly.
- Copy-to-clipboard feedback; drag-and-drop where applicable.

### Phase 4 — Core Labs (MVP)
- Flexbox: justify/align/direction/wrap/gap, DnD tiles, live CSS.
- Grid: auto-fit/auto-fill, rows/cols, gap, align-items, responsive preview.
- Box Model: margin/padding/border/radius, box-sizing toggle.
- Colors & Gradients: HSL sliders, gradient builder with stops/direction.
- Typography: font size/line-height/letter-spacing/variable axes, live preview.
- Animations: duration/timing/delay/iterations + keyframe editor, live preview.

### Phase 5 — Topic Pages (Fundamentals)
- Selectors, Cascade, Box Model, Display, Positioning, Floats/Clearfix.
- Responsive/Media/Container queries pages with examples and links to labs.
- CSS Architecture page (BEM/OOCSS/SMACSS) with patterns.

### Phase 6 — Advanced & Rendering
- Rendering pipeline: reflow/repaint/compositing, GPU acceleration.
- Motion path, 3D transforms/perspective demos.
- Houdini mini-labs: paint, typed OM, layout API.
- Debugging tools page with devtools tips.

### Phase 7 — Polish & QA
- Page transitions/scroll-reveal with reduced-motion support.
- Responsiveness QA across breakpoints.
- Accessibility pass: focus rings, ARIA for controls, contrast checks.
- Performance: lazy-load heavy visualizers, memoize control state.

### Phase 8 — Docs & Delivery
- Update README/docs: run/build, theming guidance, how to add labs.
- Smoke tests on key visual flows; lint/format pass.
- Verify deliverables: all pages implemented, all visualizers functional, dark/light persisted.


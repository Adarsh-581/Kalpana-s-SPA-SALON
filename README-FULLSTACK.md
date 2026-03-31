# Velvet Aura Design - Project Overview

## 1. Project Summary
Velvet Aura Design is a premium brand website template for a luxury salon & spa. It consists of a modern, responsive front-end built with React + TypeScript and a rich UI suite (Tailwind + custom components). The goal is to be easy to migrate to WordPress/Elementor with a pixel-perfect replication of the core customer experience.

---

## 2. Tech Stack
### Frontend
- React 18 (functional components, hooks)
- TypeScript (strict typing)
- Vite (fast dev server + bundling)
- Tailwind CSS (utility-first styling)
- Lucide icons (icon library)
- React Router (single-page routing)
- Radix UI components (accessibility-ready UI primitives)

### Styling / Design System
- Global CSS variables in `src/index.css` (brand palette, gradients, radius, shadows)
- `tailwind.config.ts` (theme extension for color tokens and typographic scales)
- Local design token file: `src/design/color-palette.ts` and `src/design/color-palette.md`

### Components
- `src/components/Navbar.tsx` (global header with scroll states)
- `src/components/Footer.tsx` (site-wide footer with CTA, links, contacts, newsletter)
- `src/components/ui/*` (reusable atomic components)
- Page-level components in `src/pages` (Home, About, Services, etc.)

### Backend / Data
- None (static content, local data arrays). Content is embedded in TS for demo.
- Placeholder GitHub or CMS should serve API in production.

### Optional / Platform
- WordPress + Elementor (non-pro) is an intended deployment target via manual rebuild.
- No server-side code in current repo.

---

## 3. Project Structure
```
src/
  components/
    Navbar.tsx
    Footer.tsx
    BrandMark.tsx
    ui/ [...]
  pages/
    HomePage.tsx
    AboutPage.tsx
    ServicesPage.tsx
  design/
    color-palette.ts
    color-palette.md
  index.css
  main.tsx
package.json
vite.config.ts
```

---

## 4. Core Pages + Sections (Important for WP/Elementor replication)
- **Hero**: full-screen background + gradient overlay + strong headline/button.
- **About**: mission, values cards, journey timeline, team cards.
- **Services**: category tabs, service cards, expandable treatment list.
- **Footer**: top CTA strip, 4-column links + contact, lower legal bar.

---

## 5. Color + Typography Reference (exact values)
### Color palette
- `#F9F6F1` (ivory)
- `#EDE3D3` (beige)
- `#DCCBB3` (sand)
- `#C9A96E` (gold)
- `#A07B45` (gold-deep)
- `#E8D5B7` (gold-light)
- `#6B4F3A` (earth)
- `#4A3E38` (text-body)
- `#2E2E2E` (text-heading)
- `#8C7B73` (text-muted)

### Typography
- Headings: `Cormorant Garamond` (serif)
- Body: `Jost` (sans-serif)
- Navbar links: 11px uppercase, tracking 0.16em
- Hero title: 5xl / 6xl

---

## 6. How to run locally (developer / client)
1. Install Node.js 18+.
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173`
5. `npm run build` to build production bundle.

---

## 7. WordPress + Elementor (free) migration guide
### Footer packing
- Build footer in Theme Builder (full site display).
- 3 section layout: CTA strip + 4 columns + bottom legals.
- Exact token usage defined above.

### About page section build approach
- Hero, mission, values, timeline, team, quote.
- Use global classes from above for consistent look.

### Services section approach
- Sticky category tabs (UI interactions in JS, replicate with anchor scroll behavior)
- 8 sections with service list and CTA.

---

## 8. Notes for client
- The repo is a frontend prototype; no backend services are required.
- WP/Elementor is fully supported with manual rebuild; all tokens are explicit for easy mapping.
- We recommend 1 developer for implementation and 1 for QA (pixel match).

---

## 9. Author
- Created from the existing `velvet-aura-design-main` project.
- Provide this doc to designers & developers for guided transfer to WP.


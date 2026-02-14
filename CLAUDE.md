# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Manguitos Tech is a single-page portfolio/landing site for "Kevin Tech" (a full-stack developer). Built with Nuxt 3, Vue 3, and Vuetify 3. Content is in Spanish with a "Day of the Dead" visual theme. Deployed to GitHub Pages at `/manguitos_techs/`.

## Development Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run generate` — Generate static site for GitHub Pages
- `npm run build` — Build for production
- `npm run preview` — Preview production build

No test runner or linter is configured.

## Architecture

This is a single-page app (`ssr: false`) where `pages/index.vue` composes all section components in order: Hero, About, Services, Portfolio, Contact. Navigation uses anchor links (`#sobre-mi`, `#services`, `#proyectos`, `#contacto`).

All components use **Composition API** with `<script setup>`.

### Vuetify Setup

Vuetify is integrated via a custom Nuxt plugin (`plugins/vuetify.js`) that imports three config modules:
- `plugins/vuetify/theme.js` — Light/dark themes (dark is default) with Pink/Purple modern palette (primary `#ff6b9d`, secondary `#7c3aed`/`#b69aff`, tertiary `#0891b2`/`#67d8f0`)
- `plugins/vuetify/defaults.js` — Global component defaults (VBtn, VCard, VTextField, etc. all use `rounded: "lg"`)
- `plugins/vuetify/icons.js` — MDI icon set configuration

Vuetify is loaded exclusively via `vite-plugin-vuetify` (no CDN). The plugin is registered as a Nuxt module hook.

### Typography

**Space Grotesk** (Google Fonts) — loaded via CDN in `nuxt.config.ts` head. Weights: 400, 500, 700.

### Layout

`layouts/default.vue` wraps content in `<v-app>` with `<LayoutNavigation />` and `<v-main>`. The footer (`layout/Footer.vue`) is rendered independently by each page/component as needed.

### Styling Notes

- `assets/css/cursor.css` — Custom mango-shaped SVG cursors (globally loaded via `nuxt.config.ts` css array)
- Components use scoped CSS with Vuetify theme variables (`rgb(var(--v-theme-primary))`, `rgba(var(--v-theme-primary), 0.2)`, etc.)
- All colors are driven by the centralized theme — no hardcoded hex values in components
- Glassmorphism effects (backdrop-filter, rgba backgrounds) and Day of the Dead float animations are kept as scoped CSS

### GitHub Pages Deployment

`nuxt.config.ts` sets `app.baseURL` to `/manguitos_techs/` in production via `NODE_ENV` check. The `router.base` is also set statically. When adding new static assets, reference them with the base URL in mind.

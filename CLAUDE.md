# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 application called "Manguitos Tech" built with Vue 3, TypeScript, and Vuetify for the UI components. The application is configured for deployment to GitHub Pages with a base URL of `/manguitos_techs/`.

## Development Commands

- **Development server**: `npm run dev` - Starts dev server on http://localhost:3000
- **Build**: `npm run build` - Build for production
- **Generate**: `npm run generate` - Generate static site
- **Preview**: `npm run preview` - Preview production build locally
- **Install dependencies**: `npm install`

## Architecture

### Directory Structure
- `components/` - Vue components organized by feature
  - `layout/` - Layout components (Footer, Navigation)
  - Main components: Hero, Services, Tecnologi
- `layouts/` - Nuxt layout templates (default.vue)
- `pages/` - File-based routing (index.vue)
- `plugins/` - Nuxt plugins (Vuetify configuration)
- `assets/css/` - Custom CSS files
- `public/` - Static assets

### Key Configuration
- **Vuetify Integration**: Configured via vite-plugin-vuetify with auto-import
- **GitHub Pages**: Base URL set to `/manguitos_techs/` for production
- **TypeScript**: Extends `.nuxt/tsconfig.json`
- **CSS**: Custom cursor.css in assets/css/

### Build Configuration
- Transpiles Vuetify for SSR compatibility
- Uses CDN links for Vuetify and Material Design Icons in production
- Vite configuration disables debug mode in production
- Router base set for GitHub Pages deployment

### Deployment
The application is configured for GitHub Pages deployment with appropriate base URL and router configuration in `nuxt.config.ts`.
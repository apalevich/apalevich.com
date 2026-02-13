# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with hot reload
npm run dev

# Type checking and build (runs astro check then astro build)
npm run build

# Preview production build locally
npm run preview

# Format code with Prettier
npx prettier --write .
```

## Architecture Overview

This is an **Astro Micro** personal website - a fork of Astro Nano with additional features. It's a static site generator using Astro with zero frontend frameworks installed.

### Content Collections System

The site uses Astro's content collections with the glob loader pattern defined in `src/content.config.ts`:

- **Blog collection** (`src/content/blog/`): Markdown/MDX files with schema: `title`, `description`, `date`, `draft` (optional), `tags` (optional)
- **Projects collection** (`src/content/projects/`): Markdown/MDX files with schema: `title`, `description`, `date`, `draft` (optional), `URL` (optional)

Both collections filter out draft posts in production. Content is sorted by date (newest first).

### Site Configuration

**`src/consts.ts`** is the central configuration file containing:
- `SITE`: Site metadata (title, description, email, homepage counts)
- `HOME`, `BLOG`, `PROJECTS`: Page-specific metadata
- `SOCIALS`: Array of social media links

Modify this file to update site-wide settings.

### Path Aliases

TypeScript paths are configured in `tsconfig.json`:
- `@*` maps to `./src/*`
- Example: `@components/Header.astro`, `@lib/utils.ts`, `@consts`

### Key Integrations

Configured in `astro.config.mjs`:
- **Sitemap**: Auto-generates sitemap for SEO
- **MDX**: Markdown with JSX component support
- **Pagefind**: Client-side search (initialized via `PageFind.astro` component)
- **TailwindCSS v4**: Styling via Vite plugin (no separate config file needed)

### Layout Structure

Main layout (`src/layouts/Layout.astro`) provides the base template:
- `<Head>` component: Meta tags, SEO, favicons
- `<Header>`: Site navigation
- `<main><slot /></main>`: Page content
- `<Footer>`: Site footer
- `<Pagefind>`: Search initialization

### Utility Functions

`src/lib/utils.ts` provides:
- `cn()`: TailwindCSS class merging utility (clsx + twMerge)
- `formatDate()`: Formats dates using Intl.DateTimeFormat
- `readingTime()`: Calculates estimated reading time from HTML content (200 words/min)

### Dynamic Routes

- **`/blog/[...id].astro`**: Individual blog post pages
  - Includes post navigation (prev/next)
  - Table of contents (if headings exist)
  - Giscus comments integration
  - Tags display and linking

- **`/projects/[...id].astro`**: Individual project pages
  - Table of contents
  - Optional external URL link

- **`/tags/[...id].astro`**: Tag archive pages showing all posts with a specific tag

### RSS Feed

`src/pages/rss.xml.js` generates an RSS feed combining both blog posts and projects, sorted by date.

### Styling Approach

- TailwindCSS v4 with `@tailwindcss/typography` plugin
- Dark mode support via CSS variables
- Prettier configured with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- Syntax highlighting uses `css-variables` theme (configured in `astro.config.mjs`)

### Animation Pattern

Components use `.animate` class for entrance animations. Without JavaScript, a noscript style block in Layout.astro ensures content is immediately visible.

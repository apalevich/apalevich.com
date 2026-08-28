# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository shape

A monorepo of two **independent** Astro sites. There is no root `package.json` and no workspace tooling — each directory has its own dependencies, its own Astro major version, and its own Tailwind setup. Always `cd` into the subproject before running anything.

| Directory | Deployed to | Astro | Tailwind | Content model |
|---|---|---|---|---|
| `general/` | apalevich.com | 5.x | v4 (Vite plugin) | Content collections (MDX) |
| `mate/` | mate.apalevich.com | 4.x | v3 (`tailwind.config.mjs`) | One typed TS object |

`general/CLAUDE.md` holds project-specific detail for that site, but parts of it are stale (see "Known drift" below).

## Commands

Both projects expose the same Astro scripts, run from inside the project directory:

```bash
npm run dev      # dev server on localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the built output
```

Only `general` type-checks: its `build` runs `astro check && astro build`. To type-check without a full build, run `npx astro check` in `general/`.

There are no tests, no lint script, and no CI. `general` carries Prettier plus `prettier-plugin-astro` and `prettier-plugin-tailwindcss` as devDependencies with no config file, so format with `npx prettier --write .` from `general/`.

`mate` pins Node 18 in `.nvmrc` and sets `engineStrict`, so `nvm use` there before installing.

## general/ — personal site

Built on the Astro Micro template. No frontend framework is installed; everything is `.astro` and MDX.

**Two collections**, both defined in `src/content.config.ts` with the glob loader: `blog` and `library` (book reviews). The `library` schema is the richer one, carrying `author`, `rating` (1-5), `coverImage`, `fiction`, `externalLinks` (amazon / goodreads / bookshop), and `relatedBooks`.

**Content lives one folder per entry**, e.g. `src/content/library/zero-to-one/index.mdx`, with images colocated in that folder. The folder name becomes the entry `id` and therefore the URL slug. `relatedBooks` is an array of those folder names; `RelatedBooks.astro` resolves each with `getEntry` and silently drops missing or draft entries.

**Every collection query filters `draft` itself.** There is no global filter, so any new `getCollection` call must repeat `.filter((e) => !e.data.draft)`.

**MDX authoring**: `mdxComponents` (in `src/components/mdx/mdx-components.ts`) remaps `img` to `CaptionedImage`, which renders the alt text as a visible caption. It only applies where a route passes `<Content components={mdxComponents} />`. `Callout.astro` is not global — each MDX file that uses it imports it explicitly.

**Site-wide settings** live in `src/consts.ts` (`SITE`, `HOME`, `BLOG`, `LIBRARY`, `SOCIALS`), typed by `src/types.ts`. Homepage entry counts come from `SITE.NUM_POSTS_ON_HOMEPAGE` and `SITE.NUM_BOOKS_ON_HOMEPAGE`.

**Tailwind v4 has no JS config.** The theme is declared in `src/styles/global.css` with `@import "tailwindcss"`, `@theme`, and `@custom-variant dark`. Dark mode is class-based (`html.dark`), driven by the three theme buttons in `Footer.astro` and the inline scripts in `Head.astro`.

**Path aliases** map `@*` to `./src/*` (`@components/...`, `@layouts/...`, `@lib/utils`, `@consts`, `@types`). This alias exists only in `general`.

**Entrance animations** use a `.animate` class; `Layout.astro` carries a `noscript` block that forces content visible when JS is off. New sections that should fade in need that class.

`rss.xml.js` merges both collections into one feed. `/tags` is built from the `blog` collection only — tags on library entries render as chips with an empty `href`.

## mate/ — MATE landing page

A single marketing page (`src/pages/index.astro`) plus `/privacy`. All copy is centralized in `src/content.ts` as one `content` object typed by `MATELandingPageContent`; components receive their slice as a prop (`<Cards content={content.featuresSection} />`). **Edit the copy in `content.ts`, not in the components.**

`MateLayout.astro` owns the `<head>`, including the Google Tag Manager snippet and the Inter webfont from Google Fonts. Brand colors (`dark`, `gradient1`, `gradient2`) are Tailwind theme extensions in `tailwind.config.mjs`.

## Known drift in general/CLAUDE.md

Correct these if you touch that file:

- It describes a `projects` collection at `src/content/projects/`. That was replaced by `library`; the routes are `/library` and `/library/[...id]`.
- It says blog posts render Giscus comments. `Giscus.astro` still exists but no route imports it, and its `data-repo` still points at the upstream `astro-micro` template repository.

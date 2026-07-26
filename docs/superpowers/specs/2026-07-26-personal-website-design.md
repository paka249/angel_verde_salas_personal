# Personal Website — Design

## Purpose

A personal website for Angel Verde: a generic, modern, minimal template with placeholder
content the user will fill in themselves. Built to be easy to reskin (single-file color
swap) and easy to extend with real content later without touching component code.

## Sections (v1)

- **Home/About** — landing page, short intro/bio
- **Projects** — showcase of things built
- **Resume/CV** — work experience, education, skills
- **Hobbies/Misc** — personal interests, freeform

Contact info (email/social links) lives as simple links, not a separate page — e.g. in
the sidebar footer or on the Home page.

## Visual direction

Minimal/clean: lots of whitespace, calm typography, subtle borders, understated accent
usage (links, active nav state, small highlights). Not bold/graphic, not dark/glass.

## Tech stack

- **Vite + React + TypeScript** — static SPA, fast dev server, no server-side complexity
- **React Router** — client-side routing between the 4 sections
- **Tailwind CSS**, configured to read colors from CSS custom properties (see Theming)

## Architecture

- `Layout` component renders the `Sidebar` plus a routed content area (`<Outlet />`)
- Routes: `/` (Home), `/projects`, `/resume`, `/hobbies`
- `Sidebar`:
  - Nav links to the 4 sections with active-route highlighting
  - Fixed/visible on desktop
  - Collapses behind a hamburger toggle on mobile (below Tailwind's `md` breakpoint),
    opening as a drawer/overlay
- Page components (`Home`, `Projects`, `Resume`, `Hobbies`) are presentational — they
  import data from `src/data/*` and render it. No business logic beyond mapping over
  arrays.
- Small shared UI components added only as needed (e.g. `Card`, `SectionHeading`) — no
  component library, no speculative abstraction.

## Theming (swappable color system)

Five semantic color tokens, defined once as CSS custom properties in
`src/styles/theme.css`:

```css
:root {
  --color-bg: ...;       /* page background */
  --color-surface: ...;  /* cards/panels/sidebar */
  --color-text: ...;     /* primary text */
  --color-muted: ...;    /* secondary text, borders, dividers */
  --color-accent: ...;   /* blue — links, active nav item, highlights */
}
```

`tailwind.config.ts` maps semantic Tailwind color names (`bg-surface`, `text-accent`,
`border-muted`, etc.) to these variables via `theme.extend.colors`. Components and pages
use only the semantic Tailwind classes — never a raw hex code or a Tailwind default
palette color (`blue-500`, etc.). To reskin the entire site, only the 5 variables in
`theme.css` change; no component files are touched.

Initial accent: blue.

## Content data

Two typed data files hold placeholder content the user edits directly later:

- `src/data/projects.ts` — exports `Project[]` (e.g. `{ name, description, url?, tags?
  }`)
- `src/data/resume.ts` — exports `ResumeEntry[]` (e.g. `{ role, org, dates, summary?
  }`), grouped/typed enough to cover experience, education, and skills sections

`Projects` and `Resume` pages `.map()` over these arrays. Filling in real content means
editing these two files only — no component changes required.

`Hobbies` and `Home` can start as static JSX with placeholder copy (lower structure need
than Projects/Resume, per user's "fill out the text myself" intent) — freeform text is
fine, no data file needed unless it grows.

## Out of scope (v1)

- No CMS, no backend, no database
- No dark/light mode toggle (single palette; the theming system makes this
  straightforward to add later, but not built now)
- No automated test suite — placeholder content makes tests low-value; verification is
  type-checking and a manual browser check (see below)
- No deployment/CI setup (not requested yet)

## Verification

- `tsc --noEmit` passes
- `npm run build` succeeds
- Manual check in the browser: sidebar navigation works, mobile hamburger opens/closes,
  all 4 routes render without errors

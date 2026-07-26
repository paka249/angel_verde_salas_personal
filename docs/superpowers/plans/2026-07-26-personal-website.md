# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite + React + TypeScript personal website with a sidebar-routed layout (Home, Projects, Resume, Hobbies), a centralized 5-token color system that can be reskinned by editing one CSS file, and typed placeholder content the user fills in later.

**Architecture:** Single-page app. `App.tsx` sets up client-side routing (React Router) to a shared `Layout` (sidebar + routed outlet). Colors are five CSS custom properties in `src/styles/theme.css`, wired into Tailwind v4 via its `@theme` directive so components only ever use semantic utility classes (`bg-surface`, `text-accent`, etc.), never raw hex values.

**Tech Stack:** Vite, React 18, TypeScript, React Router v6, Tailwind CSS v4 (via `@tailwindcss/vite`, no separate `tailwind.config.js` needed — tokens live in CSS).

## Global Constraints

- No CMS, backend, or database — static content only.
- No dark/light mode toggle in v1.
- No automated test suite. Verification per task is `npx tsc --noEmit`, `npm run build`, and a manual browser check — never invent unit tests for placeholder content.
- No deployment/CI setup.
- Exactly 5 color tokens total (`bg`, `surface`, `text`, `muted`, `accent`); accent is blue.
- Components must reference colors only via semantic Tailwind classes generated from the 5 tokens (e.g. `bg-surface`, `text-accent`) — never a raw hex code or a Tailwind default palette color (`blue-500`, `gray-200`, etc.).

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `.gitignore`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

**Interfaces:**
- Produces: npm scripts `dev`, `build` (`tsc --noEmit && vite build`), `preview`; `App` default export from `src/App.tsx` rendered by `src/main.tsx` into `#root`.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "angel-verde-personal-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.0"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["vite/client"]
  },
  "include": ["src", "vite.config.ts"]
}
```

- [ ] **Step 3: Create `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 4: Create `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Angel Verde</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Create `.gitignore`**

```
node_modules
dist
.DS_Store
*.local
```

- [ ] **Step 6: Create `src/index.css`**

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

- [ ] **Step 7: Create `src/main.tsx`**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 8: Create `src/App.tsx`**

```tsx
function App() {
  return <div>Angel Verde — personal website</div>
}

export default App
```

- [ ] **Step 9: Install dependencies**

Run: `npm install`
Expected: installs without errors, creates `node_modules` and `package-lock.json`.

- [ ] **Step 10: Verify build**

Run: `npm run build`
Expected: PASS — `tsc --noEmit` reports no errors, `vite build` produces a `dist/` folder.

- [ ] **Step 11: Commit**

```bash
git add package.json package-lock.json tsconfig.json vite.config.ts index.html .gitignore src/main.tsx src/App.tsx src/index.css
git commit -m "chore: scaffold Vite + React + TypeScript project"
```

---

### Task 2: Tailwind v4 + Theme Tokens

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`
- Create: `src/styles/theme.css`
- Modify: `src/index.css`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `src/index.css` from Task 1 (appends imports at the top).
- Produces: Tailwind utility classes derived from 5 color tokens — `bg-bg`, `bg-surface`, `bg-text`, `bg-muted`, `bg-accent` and their `text-*` / `border-*` equivalents. All later tasks must use only these semantic classes for color.

- [ ] **Step 1: Install Tailwind v4**

Run: `npm install -D tailwindcss @tailwindcss/vite`
Expected: adds `tailwindcss` and `@tailwindcss/vite` to `devDependencies`.

- [ ] **Step 2: Add the Tailwind Vite plugin**

Modify `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 3: Create the theme token file**

Create `src/styles/theme.css`:

```css
@theme {
  --color-bg: #ffffff;
  --color-surface: #f4f5f7;
  --color-text: #1a1d23;
  --color-muted: #6b7280;
  --color-accent: #2563eb;
}
```

This is the single file to edit to reskin the entire site — every component-level color comes from these 5 values.

- [ ] **Step 4: Wire Tailwind and the theme into `src/index.css`**

Replace the contents of `src/index.css` with:

```css
@import "tailwindcss";
@import "./styles/theme.css";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

- [ ] **Step 5: Temporarily verify the tokens render, via `src/App.tsx`**

```tsx
function App() {
  return (
    <div className="min-h-screen bg-bg p-8 text-text">
      <h1 className="text-2xl font-semibold">Angel Verde</h1>
      <p className="mt-2 text-muted">Theme check: this text is muted-colored.</p>
      <button className="mt-4 rounded-md bg-accent px-4 py-2 text-bg">
        Accent button
      </button>
    </div>
  )
}

export default App
```

- [ ] **Step 6: Manually verify in the browser**

Run: `npm run dev`, open the printed local URL.
Expected: white page background, near-black heading/paragraph text, a gray "muted" line, and a blue button with light-colored text. If any element is unstyled (black text on white with no button color), Tailwind isn't picking up the theme — check Step 2 and Step 4.

- [ ] **Step 7: Verify build**

Run: `npm run build`
Expected: PASS, no type or build errors.

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vite.config.ts src/styles/theme.css src/index.css src/App.tsx
git commit -m "feat: add Tailwind v4 with a 5-token color system"
```

---

### Task 3: Typed Content Data

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/resume.ts`

**Interfaces:**
- Produces: `Project` interface and `projects: Project[]` from `src/data/projects.ts`; `ResumeEntryType`, `ResumeEntry` interface, and `resumeEntries: ResumeEntry[]` from `src/data/resume.ts`. Task 5 imports both.

- [ ] **Step 1: Create `src/data/projects.ts`**

```ts
export interface Project {
  id: string
  name: string
  description: string
  url?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'project-one',
    name: 'Project One',
    description: 'A short description of this project goes here.',
    url: 'https://example.com',
    tags: ['TypeScript', 'React'],
  },
  {
    id: 'project-two',
    name: 'Project Two',
    description: 'A short description of this project goes here.',
    tags: ['Python'],
  },
]
```

- [ ] **Step 2: Create `src/data/resume.ts`**

```ts
export type ResumeEntryType = 'experience' | 'education' | 'skill'

export interface ResumeEntry {
  id: string
  type: ResumeEntryType
  title: string
  subtitle?: string
  dates?: string
  summary?: string
}

export const resumeEntries: ResumeEntry[] = [
  {
    id: 'exp-one',
    type: 'experience',
    title: 'Job Title',
    subtitle: 'Company Name',
    dates: '20XX — Present',
    summary: 'A short summary of this role goes here.',
  },
  {
    id: 'edu-one',
    type: 'education',
    title: 'Degree Name',
    subtitle: 'School Name',
    dates: '20XX — 20XX',
  },
  {
    id: 'skill-one',
    type: 'skill',
    title: 'Skill Category',
    summary: 'List of skills goes here.',
  },
]
```

- [ ] **Step 3: Verify types**

Run: `npx tsc --noEmit`
Expected: PASS, no type errors. (These files aren't imported anywhere yet, but `include: ["src", ...]` in `tsconfig.json` means they're still type-checked.)

- [ ] **Step 4: Commit**

```bash
git add src/data/projects.ts src/data/resume.ts
git commit -m "feat: add typed placeholder data for projects and resume"
```

---

### Task 4: Router, Layout, and Sidebar

**Files:**
- Modify: `package.json`
- Modify: `src/App.tsx`
- Create: `src/components/Layout.tsx`
- Create: `src/components/Sidebar.tsx`
- Create: `src/pages/Home.tsx`
- Create: `src/pages/Projects.tsx`
- Create: `src/pages/Resume.tsx`
- Create: `src/pages/Hobbies.tsx`

**Interfaces:**
- Consumes: `bg-bg`/`bg-surface`/`text-text`/`text-muted`/`bg-accent`/`text-bg` utility classes from Task 2.
- Produces: `Layout` default export (renders `Sidebar` + `<Outlet />`), `Sidebar` default export (includes a footer with placeholder contact links), four page components each with a default export, routes `/`, `/projects`, `/resume`, `/hobbies`. Task 5 modifies the four page files in place — it does not change their file paths or default-export shape.

- [ ] **Step 1: Install React Router**

Run: `npm install react-router-dom`
Expected: adds `react-router-dom` to `dependencies`.

- [ ] **Step 2: Create placeholder page components**

Create `src/pages/Home.tsx`:

```tsx
function Home() {
  return <h1 className="text-2xl font-semibold text-text">Home</h1>
}

export default Home
```

Create `src/pages/Projects.tsx`:

```tsx
function Projects() {
  return <h1 className="text-2xl font-semibold text-text">Projects</h1>
}

export default Projects
```

Create `src/pages/Resume.tsx`:

```tsx
function Resume() {
  return <h1 className="text-2xl font-semibold text-text">Resume</h1>
}

export default Resume
```

Create `src/pages/Hobbies.tsx`:

```tsx
function Hobbies() {
  return <h1 className="text-2xl font-semibold text-text">Hobbies</h1>
}

export default Hobbies
```

- [ ] **Step 3: Create `src/components/Sidebar.tsx`**

```tsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Hobbies', path: '/hobbies' },
]

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:you@example.com' },
  { label: 'GitHub', href: 'https://github.com/your-username' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
]

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-md bg-surface text-text md:hidden"
        aria-label="Toggle navigation"
      >
        <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-10 flex w-64 transform flex-col justify-between bg-surface p-6 transition-transform duration-200 ease-in-out md:static md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="mb-8 text-lg font-semibold text-text">Angel Verde</div>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent text-bg'
                      : 'text-muted hover:bg-bg hover:text-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-1 border-t border-muted/20 pt-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1 text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
```

- [ ] **Step 4: Create `src/components/Layout.tsx`**

```tsx
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="flex min-h-screen bg-bg text-text">
      <Sidebar />
      <main className="flex-1 px-6 py-10 md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
```

- [ ] **Step 5: Replace `src/App.tsx` with routing**

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Hobbies from './pages/Hobbies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="hobbies" element={<Hobbies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

- [ ] **Step 6: Manually verify navigation**

Run: `npm run dev`, open the printed local URL.
Expected: sidebar visible on desktop width with 4 nav links plus 3 contact links (Email/GitHub/LinkedIn) pinned to the bottom; clicking a nav link shows the matching placeholder heading and highlights the active link in blue. Resize the browser below ~768px width — the sidebar should disappear behind a hamburger button in the top-left; clicking it opens the sidebar as an overlay, and clicking a nav link both navigates and closes the overlay.

- [ ] **Step 7: Verify build**

Run: `npm run build`
Expected: PASS, no type or build errors.

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json src/App.tsx src/components/Layout.tsx src/components/Sidebar.tsx src/pages/Home.tsx src/pages/Projects.tsx src/pages/Resume.tsx src/pages/Hobbies.tsx
git commit -m "feat: add sidebar-routed layout with mobile navigation"
```

---

### Task 5: Real Page Content

**Files:**
- Create: `src/components/Card.tsx`
- Create: `src/components/SectionHeading.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Projects.tsx`
- Modify: `src/pages/Resume.tsx`
- Modify: `src/pages/Hobbies.tsx`

**Interfaces:**
- Consumes: `Project`/`projects` and `ResumeEntry`/`ResumeEntryType`/`resumeEntries` from Task 3; `Layout`/routing from Task 4 (unchanged).
- Produces: `Card` default export (props: `title: string; description: string; url?: string; tags?: string[]`); `SectionHeading` default export (props: `children: ReactNode`). Both are leaf presentational components with no further consumers in this plan.

- [ ] **Step 1: Create `src/components/Card.tsx`**

```tsx
interface CardProps {
  title: string
  description: string
  url?: string
  tags?: string[]
}

function Card({ title, description, url, tags }: CardProps) {
  const className =
    'block rounded-lg border border-muted/20 bg-surface p-6 transition-colors hover:border-accent/40'

  const content = (
    <>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

export default Card
```

- [ ] **Step 2: Create `src/components/SectionHeading.tsx`**

```tsx
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
      {children}
    </h2>
  )
}

export default SectionHeading
```

- [ ] **Step 3: Fill in `src/pages/Home.tsx`**

```tsx
function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-text">Angel Verde</h1>
      <p className="mt-2 text-lg text-muted">Your title/role goes here</p>
      <p className="mt-6 max-w-xl text-text">
        A short bio goes here. Replace this placeholder with a couple of sentences
        about who you are, what you work on, and what you're interested in.
      </p>
    </div>
  )
}

export default Home
```

- [ ] **Step 4: Fill in `src/pages/Projects.tsx`**

```tsx
import { projects } from '../data/projects'
import Card from '../components/Card'

function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-text">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            description={project.description}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
```

- [ ] **Step 5: Fill in `src/pages/Resume.tsx`**

```tsx
import { resumeEntries, type ResumeEntryType } from '../data/resume'
import SectionHeading from '../components/SectionHeading'

const SECTIONS: { type: ResumeEntryType; label: string }[] = [
  { type: 'experience', label: 'Experience' },
  { type: 'education', label: 'Education' },
  { type: 'skill', label: 'Skills' },
]

function Resume() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-text">Resume</h1>
      <div className="mt-8 space-y-10">
        {SECTIONS.map((section) => {
          const entries = resumeEntries.filter((entry) => entry.type === section.type)
          if (entries.length === 0) return null

          return (
            <section key={section.type}>
              <SectionHeading>{section.label}</SectionHeading>
              <div className="space-y-6">
                {entries.map((entry) => (
                  <div key={entry.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-medium text-text">{entry.title}</h3>
                      {entry.dates && (
                        <span className="text-sm text-muted">{entry.dates}</span>
                      )}
                    </div>
                    {entry.subtitle && (
                      <div className="text-sm text-muted">{entry.subtitle}</div>
                    )}
                    {entry.summary && (
                      <p className="mt-1 text-sm text-text">{entry.summary}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Resume
```

- [ ] **Step 6: Fill in `src/pages/Hobbies.tsx`**

```tsx
function Hobbies() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-text">Hobbies</h1>
      <p className="mt-6 max-w-xl text-text">
        Replace this placeholder with whatever you want to share here — hobbies,
        interests, photos, side projects that don't fit elsewhere.
      </p>
    </div>
  )
}

export default Hobbies
```

- [ ] **Step 7: Verify build**

Run: `npm run build`
Expected: PASS — this also confirms `Card`/`SectionHeading` prop types match how the pages call them.

- [ ] **Step 8: Manually verify all pages**

Run: `npm run dev`, click through all 4 sidebar links.
Expected: Home shows the bio placeholder; Projects shows 2 cards (one linking out, one without a link) pulled from `src/data/projects.ts`; Resume shows 3 grouped sections (Experience, Education, Skills) pulled from `src/data/resume.ts`; Hobbies shows its placeholder text. All text/background/border colors should visibly come from the 5-token palette (white background, near-black text, gray muted text/borders, blue accents on hover/active states).

- [ ] **Step 9: Commit**

```bash
git add src/components/Card.tsx src/components/SectionHeading.tsx src/pages/Home.tsx src/pages/Projects.tsx src/pages/Resume.tsx src/pages/Hobbies.tsx
git commit -m "feat: fill in real page content from typed data"
```

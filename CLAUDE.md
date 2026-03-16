# GPSL Technology — Developer Context

## Project Overview
Company technology showcase site for GPSL. Displays team, projects, AI approach, and contact form.
Live at: https://gpsl-technology.vercel.app

## Tech Stack
- **Framework:** Next.js 15.5 (App Router, Turbopack dev)
- **Runtime:** React 19
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 3.4 with custom design tokens
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Testing:** Jest 30 + Testing Library
- **Deploy:** Vercel

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer + SEO metadata)
│   ├── page.tsx            # Home — hero, capabilities grid, CTA
│   ├── globals.css         # CSS vars, Tailwind directives, .bg-grid
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── team/page.tsx       # Team member cards (3 members)
│   ├── projects/page.tsx   # Project cards (5 projects)
│   ├── ai/page.tsx         # AI philosophy + stack overview
│   └── contact/page.tsx    # Contact form (mailto handler)
├── components/
│   ├── Nav.tsx             # Sticky nav, mobile hamburger, icons, animated underline
│   ├── Footer.tsx          # Site footer with links + socials
│   ├── CTA.tsx             # Reusable call-to-action section
│   └── FadeIn.tsx          # Scroll-triggered animation wrapper (framer-motion)
└── __tests__/
    ├── pages.test.tsx      # Tests for all 5 pages
    └── components.test.tsx # Tests for Nav, Footer
```

## Design System
- **Colors:** Zinc base + Cyan (#22d3ee) accent. See `tailwind.config.ts` for `surface.*` and `accent.*` tokens.
- **Typography:** System monospace for labels/nav (`font-mono`), system sans for body.
- **Cards:** `rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm`
- **Shadows:** `shadow-glow` and `shadow-glow-sm` for cyan glow effects.
- **Grid pattern:** `.bg-grid` class in globals.css (24x24 subtle grid).

## Commands
```bash
npm run dev        # Start dev server (Turbopack, port 3000)
npm run build      # Production build
npm test           # Run all tests (24 tests across 2 suites)
npm run lint       # ESLint
```

## Key Patterns
- All pages are `"use client"` for Framer Motion animations
- `FadeIn` component wraps sections for scroll-triggered entrance animations
- Nav uses `layoutId="nav-underline"` for animated active indicator
- Contact form uses `mailto:` — no backend API route needed
- All data is static (team members, projects defined inline in page components)
- Footer is in layout.tsx, renders on every page

## Adding a New Project
Edit `src/app/projects/page.tsx` — add to the `projects` array:
```ts
{
  icon: SomeLucideIcon,   // import from "lucide-react"
  title: "Project name",
  description: "What it does...",
  tags: ["Tag1", "Tag2"],
}
```

## Adding a Team Member
Edit `src/app/team/page.tsx` — add to the `team` array:
```ts
{
  name: "Full Name",
  role: "Role | Specialties",
  bio: "Description...",
}
```

## Testing
- Tests mock `framer-motion`, `next/link`, and `next/navigation`
- Run `npm test` before pushing — all 24 tests must pass
- Jest config: `jest.config.ts`, setup: `jest.setup.ts`

## Troubleshooting
- **Build fails on types:** Run `npx tsc --noEmit` to see type errors
- **Dev server port in use:** `npx kill-port 3000` or change port with `npm run dev -- -p 3001`
- **Test failures after framer-motion update:** Check the mock in test files matches the API
- **Tailwind classes not working:** Verify `content` paths in `tailwind.config.ts`
- **ESLint version mismatch:** ESLint 9 + eslint-config-next 15 are compatible

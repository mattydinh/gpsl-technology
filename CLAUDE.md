# GPSL Technology — Developer Context

## Project Overview
Company marketing site for GPSL — a diversified operating group with two engines: an Execution arm (ventures we own and run) and a Technology division (agentic software we ship into those ventures and to client engagements).
Live at: https://gpsl-technology.vercel.app

## Tech Stack
- **Framework:** Next.js 15.5 (App Router, Turbopack dev)
- **Runtime:** React 19
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 3.4 with CSS-var-backed design tokens
- **Fonts:** Fraunces (display serif) + Figtree (body sans) via `next/font/google`
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Testing:** Jest 30 + Testing Library
- **Deploy:** Vercel (auto-deploy on push to `main`)

## Default Branch
`main` (not `master`)

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root: Nav + Footer, Fraunces + Figtree, inline theme-init <script>
│   ├── page.tsx            # Home — operating-group hero, two-engine grid, operating-model steps
│   ├── globals.css         # Theme tokens (light + dark per surface), body typography, animations
│   ├── robots.ts / sitemap.ts
│   ├── execution/page.tsx  # Execution arm — ventures, operating model, sectors
│   ├── technology/page.tsx # Technology division — dark zinc surface, flagships, philosophy, stack
│   ├── portfolio/page.tsx  # Ventures + Technology island (soft tonal panel, not black card)
│   ├── team/page.tsx       # Team cards
│   └── contact/page.tsx    # Contact form (mailto handler)
├── components/
│   ├── Nav.tsx             # Sticky nav, mobile hamburger, ThemeToggle, animated active underline
│   ├── Footer.tsx          # Links + contact
│   ├── ThemeSurface.tsx    # Wraps pages; sets data-surface="operating" | "technology"
│   ├── ThemeToggle.tsx     # Sun/moon toggle, persists to localStorage, hydration-safe
│   ├── CTA.tsx / FadeIn.tsx
└── __tests__/              # 6 suites, 66 tests — must pass before push
```

## Design System

### Surfaces
Every page wraps its content in `<ThemeSurface surface="operating" | "technology">`.
- `operating` — warm paper aesthetic (default brand). Follows the light/dark toggle.
- `technology` — brand-locked dark (near-black zinc, cyan accent). Intentionally does NOT follow the toggle — the Technology division's identity is the dark surface.

### Light + Dark Mode
`data-theme="light"` or `data-theme="dark"` is set on `<html>` by an inline `<script>` in `layout.tsx:49`. The script reads `localStorage['gpsl-theme']` first, falls back to `prefers-color-scheme`. This runs **before** React hydrates, so there is no FOUC. `<html>` carries `suppressHydrationWarning`.

The `ThemeToggle` component flips the attribute and persists the choice.

### Theme Tokens (CSS-variable-backed)
**⚠️ Critical — do not hardcode hex values OR static Tailwind color classes on themed surfaces.** The `op.*` Tailwind tokens resolve to `rgb(var(--op-*) / <alpha-value>)`. CSS variables live in [src/app/globals.css](src/app/globals.css) under `:root` (light) and `:root[data-theme="dark"]` (dark). Adding a new color means adding the RGB triplet to BOTH blocks, then extending `tailwind.config.ts`. Editing static hex in `tailwind.config.ts` will not theme.

**⚠️ `bg-white` is a trap on operating-surface pages.** `bg-white` stays white in dark mode while `text-op-ink` flips to warm ivory — card titles become invisible. Always use `bg-op-card` for cards, `bg-op-panel` for full-width section lifts. The *only* pages that may use static zinc/white classes are those wrapped in `<ThemeSurface surface="technology">` — the Technology division surface is brand-locked dark on purpose.

Operating surface tokens (light → dark):
| Token | Light | Dark | Purpose |
|---|---|---|---|
| `op.bg` | `#F7F5F0` | `#161310` | Page background |
| `op.panel` | `#EFEAE0` | `#1F1B16` | Section panel — one step off bg |
| `op.card` | `#FFFFFF` | `#28231D` | Card — one step off panel (always lifts) |
| `op.ink` | `#1A1A1A` | `#F2EBDE` | Primary text |
| `op.muted` | `#5A5550` | `#AAA094` | Secondary text |
| `op.accent` | `#B55A30` | `#E08259` | Terracotta — brightened in dark for AA |
| `op.line` | `#E5E0D8` | `#38322C` | Hairlines |

Hierarchy: `bg → panel → card` always reads as a lift in both modes. Don't mix `op.bg` and `op.card` on adjacent surfaces — you'll invert the hierarchy in one mode.

### Typography
- **Display:** Fraunces (serif) — `.font-display` / `font-display:`. Loaded at weights **500 / 600 / 700 only**. Stylistic sets 01/02/03 enabled in globals.css.
- **Body:** Figtree (sans) — applied via `font-sans` in Tailwind (default). Loaded at 400/500/600/700. `ss01` + `cv11` feature sets enabled. `letter-spacing: -0.005em` + `optimizeLegibility`.
- **Labels:** system monospace (`font-mono`) — the small uppercase `tracking-[0.2em]` kicker pattern used throughout.

**⚠️ Fraunces weight gotcha.** Body weight is 400. Fraunces is NOT loaded at 400 — the browser falls back to weight 500 when a heading inherits 400, which reads too thin for card titles. **Always put an explicit `font-semibold` (600) or `font-bold` (700) on `.font-display` headings inside cards or small contexts.** Hero h1s usually get away with the implicit 500 because of the large size, but `text-xl`/`text-2xl` titles need explicit weight.

## Commands
```bash
npm run dev        # Dev server (Turbopack, port 3000)
npm run build      # Production build
npm test           # Jest — 66 tests across 6 suites, must pass before push
npm run lint       # ESLint
npx tsc --noEmit   # Typecheck
```

## Commit Convention
```
<type>(<scope>): <imperative description>
```
Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`. Author commits as `Matthew Dinh <matthew.dinh@gpsl-ubo.com>`.

## Key Patterns
- Client components (`"use client"`) only where needed — Nav, ThemeToggle, FadeIn. Pages are server components.
- `FadeIn` wraps sections for scroll-triggered entrance animations.
- Nav active indicator uses Framer Motion `layoutId="nav-underline"`.
- All page data (ventures, products, team) lives inline in page components — no CMS.
- Technology page and the Portfolio `/tech` island intentionally live in different surface languages; the Portfolio island uses soft tonal inset (`bg-op-panel` + `bg-op-card`) rather than full dark to avoid the harsh contrast break on the operating surface.

## Testing
- Jest mocks `next/font/google` (both `Fraunces` and `Figtree`), `framer-motion`, `next/link`, `next/navigation`.
- Tests check structure + content, NOT color classes — safe to restyle without breaking tests.
- Pre-push: `npm test && npm run build`.

## Troubleshooting
- **Colors don't change on theme toggle:** You likely hardcoded a hex in a component instead of using an `op.*` Tailwind class. Replace with a token.
- **New color needed:** Add RGB triplet to both `:root` and `:root[data-theme="dark"]` in `globals.css`, then add the key under `op` in `tailwind.config.ts` with `rgb(var(--op-name) / <alpha-value>)`.
- **FOUC on first paint:** Check that the inline theme-init script in `layout.tsx` still runs in `<head>` and that `<html>` has `suppressHydrationWarning`.
- **Build fails on types:** `npx tsc --noEmit`.
- **Tailwind classes not working:** Verify `content` paths in `tailwind.config.ts`.

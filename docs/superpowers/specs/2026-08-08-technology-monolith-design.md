# Technology Page — "The Monolith" Redesign

**Date:** 2026-08-08
**Status:** Approved design, pending implementation plan
**Scope:** `/technology` page only (plus its nav chrome, which derives from `tech-*` tokens)
**Reference:** Stitch project "The Monolith - PRD" (`stitch.withgoogle.com/projects/8730569644739728201`)

## Goal

Restyle the Technology tab of gpsl-ubo.com into the "Monolith" aesthetic — a
Linear/Vercel/Swiss-engineering-manual look — and rework the copy so that
**Cornerstone is the flagship** and **forward-deployed engineering is the lead
service**. LegacyCompass, Meridian, and LuxusAI demote to a compact
small-projects index. The rest of the site (Home, Execution, Contact) is
untouched.

## Non-goals

- No changes to Home, Execution, or Contact pages, their tokens, or copy.
- No new routes or sub-pages. `/technology` stays a single scrolling page.
- No fabricated claims: no invented SLAs, latency numbers, data volumes, or
  compliance certifications (the Stitch mock's "SOC2 Type II", "45ms",
  "12TB+", "Rust + PyTorch", "Milvus" specs are fiction and must not ship).
- No functional contact form on the page — the terminal CTA is cosmetic and
  links to the existing `/contact?topic=technology`.

## Design language

From the Stitch PRD, adapted to be theme-toggle-aware:

- **Structure:** hairline 1px borders define all layout; edge-to-edge grid
  sections; `0px` border radius everywhere on this page; no shadows.
  Hierarchy through scale, weight, and position only.
- **Type:** Geist (display 600 with tight tracking, body 400) and Geist Mono
  (uppercase 12–14px labels, buttons, data values). Loaded via
  `next/font/google`, scoped to the technology surface via CSS variables so
  the rest of the site keeps Fraunces/Figtree.
- **Buttons:** rectangular, 1px border, uppercase Geist Mono in brackets,
  e.g. `[ INITIATE CONTACT ]`. Hover: border and text shift to accent.
- **Accent:** `#FF4500` in both modes — replaces cyan for the technology
  surface. Used for kickers, active markers, hover states, terminal cursor.

### Token changes (`globals.css`)

Redefine the existing `tech-*` custom properties (RGB triplet format
preserved so `/<alpha>` modifiers keep working):

| Token | Light | Dark |
|---|---|---|
| `--tech-bg` | `#F7F7F7` | `#0A0A0A` |
| `--tech-panel` | `#EFEFEF` | `#111111` |
| `--tech-card` | `#FFFFFF` | `#161616` |
| `--tech-ink` | `#111111` | `#EDEDED` |
| `--tech-muted` | `#6E6E6E` (AA on bg) | `#8A8A8A` |
| `--tech-accent` | `#D93A00` (AA-adjusted orange) | `#FF4500` |
| `--tech-line` | `#E5E5E5` | `#333333` |

Note: light-mode muted/accent values are darkened from the PRD's `#8A8A8A` /
`#FF4500` where needed to hold WCAG AA contrast on light backgrounds; exact
values may be tuned during implementation, but AA is the constraint.

The existing `Nav` component already switches to `tech-*` chrome on
`/technology`, so it inherits the Monolith palette with no logic changes.
The theme toggle continues to work: dark mode renders the all-dark Monolith
(like the Stitch "Services Details" screen), light mode renders the light
structural grid (like the Stitch services section).

## Page structure

Single scroll, six sections, top to bottom:

### 1. Hero

- Mono kicker: `DIVISION 02 // TECHNOLOGY`
- Headline (Geist 600, ~64–96px, -0.04em): **Software that ships. Engineers
  who stay.**
- Subline (muted): production-grade AI engineering; bridging the gap between
  fragile prototypes and resilient enterprise systems; shipped into our own
  ventures first.
- CTA row: `[ INITIATE CONTACT ]` → `/contact?topic=technology`, secondary
  `[ EXPLORE CORNERSTONE ]` → anchor `#cornerstone`.

### 2. Services grid

Three columns divided by hairlines, mono headers with index numbers:

- `01 / FORWARD-DEPLOYED` — the lead offering, most copy weight. Embedded
  senior engineers inside the client's team, not a ticket queue; patterns
  proven inside GPSL ventures first; commercial ownership of the delivered
  outcome. Zero prototypes in prod.
- `02 / FULL-LIFECYCLE` — end-to-end architecture and implementation, from
  specification to production deployment.
- `03 / MAINTENANCE` — long-term reliability and support; systems that keep
  running after launch.

### 3. Flagship spotlight — Cornerstone (`#cornerstone`)

The centerpiece of the page.

- Display title `CORNERSTONE` with mono subtitle
  `AI CRM FOR FRONTLINE INSURANCE AGENTS`, external link to
  `https://cornerstone.gold`.
- Metric/fact blocks (1px-bordered grid, mono label + large value), **real
  facts only**:
  - Status: live in production, paying customers
  - Architecture: RAG + knowledge graph
  - Ingest: voice → structured data
  - Planning: FNA engine
  - Reasoning: Claude-powered
  - Coverage: life + P&C lines
- Architecture breakdown list (blueprint style, accent `>` markers):
  retrieval pipeline over agent documents and notes; deterministic
  guardrails and compliance-aware answer shaping; full observability on
  every AI interaction (tracing + product analytics).

Facts here must remain true of the shipped product; anything that changes in
Cornerstone should be reflected or removed rather than left aspirational.

### 4. Projects index

Dense mono table rows (CSS grid, hairline row separators), visually
subordinate to Cornerstone. Framed explicitly as smaller projects and
demos — columns: name / domain / one-liner / status:

- LegacyCompass — end-of-life planning — family-shared AI planning thread — demo
- Meridian — real estate — AI buyer intake and qualification — demo
- LuxusAI — legal — semantic contract drafting and delivery — demo

### 5. How we build

Two hairline-grid cells replacing the current rounded cards:

- **The stack** — Next.js on Vercel, Supabase/Postgres, Claude + Claude Code
  as the engineering loop; breadth across agents, orchestration, automation,
  and the web/mobile surfaces operators actually use.
- **Claude Partner Network** — official member; retains the existing shimmer
  treatment, restrained to fit the flat aesthetic (border/glyph accent in
  Claude terracotta `#D97757`, no rounded corners).

### 6. Terminal CTA

Closing dark band styled as a terminal:

- Prompt line: `root@gpsl:~$ ./initiate_contact.sh` with blinking accent
  cursor (`_`).
- `[ INITIATE CONTACT ]` button → `/contact?topic=technology`.
- Cosmetic only; no form fields, no fake submission.

## Copy voice

Clipped engineering register throughout ("software that ships", "no
prototypes in prod") while keeping GPSL's true positioning: Technology is
the systems layer of an operating company; we ship into our own ventures
first, then into partners' operations. Drop the consultative long-form
paragraphs in favor of short declarative blocks with mono metadata labels.

## Motion & accessibility

- Existing `FadeIn` reveals may be reused sparingly; any blinking-cursor or
  reveal animation is disabled under `prefers-reduced-motion`.
- All text meets WCAG AA in both modes (drives the light-mode token
  adjustments above).
- Hover states must not be the only affordance — links/buttons keep visible
  borders and focus-visible outlines.

## Implementation notes

- `src/app/technology/page.tsx` — full rewrite of sections/copy.
- `src/app/globals.css` — `tech-*` token redefinition + Monolith utilities
  (page-scoped font variables, terminal cursor keyframe, radius-0 enforced
  by simply not using rounded classes).
- `src/app/layout.tsx` — add Geist + Geist Mono via `next/font/google`
  (variables only; applied on the technology surface).
- `src/components/ThemeSurface.tsx` — may need a class hook for the
  page-scoped fonts; otherwise unchanged.
- `src/__tests__/technology.test.tsx` — update assertions to new content
  (Cornerstone present, forward-deployed lead, projects index rows,
  terminal CTA link target).
- Quality gate: `npm run lint && npm run build` + test suite before commit;
  deploy is commit-to-main → Vercel auto-deploy (per repo convention).

## Acceptance criteria

1. `/technology` renders the six sections above in both light and dark
   modes, switching correctly with the existing toggle; no other page's
   appearance changes.
2. Cornerstone is the visually dominant feature; LegacyCompass, Meridian,
   and LuxusAI appear only in the compact projects index labeled as
   demos/small projects.
3. Forward-deployed is the first and heaviest service in the grid, and the
   hero/subline copy references engineers embedding and staying.
4. No fabricated metrics or certifications anywhere on the page.
5. Geist/Geist Mono apply on `/technology` only; Fraunces/Figtree remain
   elsewhere.
6. Lint, build, and tests pass.

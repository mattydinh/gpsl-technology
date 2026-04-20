# GPSL Website Rebuild — Design

**Date:** 2026-04-20
**Status:** Approved, ready for implementation planning
**Target domain:** `gpsl-ubo.com` (hard cutover from Wix to Vercel)
**Codebase:** Extends existing `gpsl-technology` Next.js 15 repo (rename → `gpsl-site` at some point; not required for launch)

---

## 1. Strategic framing

GPSL is a **diversified operating group**. It pursues ventures across finance, trade, logistics, and fishing, and runs an in-house AI agency that builds the technology those ventures need. The merged website replaces two loosely related brand sites (`gpsl-ubo.com` on Wix, `gpsl-technology.vercel.app` on Vercel) with a single parent site that presents GPSL as an umbrella with two engines — **Execution** and **Technology** — plus a **Portfolio** of ventures and shipped products.

**Tribal identity** surfaces through the ventures (tribal bank, tribal trade & economic development, fishing & processing) but is not the lead story on the homepage. This keeps the Technology division credible for non-tribal client work while preserving the differentiated indigenous-economic-development angle where it belongs.

---

## 2. Brand architecture

| Layer | Role |
|---|---|
| **GPSL** | Umbrella operating group |
| **Execution** | Human-logistics division — deal flow, stakeholder alignment, operational delivery |
| **Technology** | AI agency division — product studio + forward-deployed engineering |
| **Portfolio** | Two sides: **Ventures** (GPSL's own bets) + **Technology Portfolio** (shipped AI products beyond flagships) |

---

## 3. Information architecture

Top-level nav (6 items):

| Nav | Route | Role | Surface |
|---|---|---|---|
| Home | `/` | Umbrella homepage routing to divisions | A (operating) |
| Execution | `/execution` | 4-phase model + 3 bookable services | A |
| Technology | `/technology` | 3 flagship products + philosophy/stack/partner | B (tech/AI) |
| Portfolio | `/portfolio` | Ventures + Technology Portfolio | A + B island |
| Team | `/team` | Unified team, visually grouped by division | A |
| Contact | `/contact` | Single form with topic routing | A |

### Route transitions (from existing Technology repo)

| Old route | New route | Redirect |
|---|---|---|
| `/projects` | `/portfolio` | 301 |
| `/ai` | `/technology#philosophy` | 301 |
| `/team` | `/team` | No change (content expands) |
| `/contact` | `/contact` | No change (form gains routing) |

Wix `gpsl-ubo.com` legacy paths (`/about`, `/services`, `/newsletters`, etc.) — low SEO weight — redirect to nearest equivalent:

| Old Wix route | New route | Redirect |
|---|---|---|
| `/about` | `/` | 301 |
| `/services` | `/execution` | 301 |
| `/newsletters` | `/` (or `/contact` if we want inquiries) | 301 |

All domain-level: `gpsl-technology.vercel.app/*` → `gpsl-ubo.com/*` 301.

---

## 4. Visual design system — two surfaces, one system

### Surface A — "Operating" (Home, Execution, Portfolio: Ventures, Team, Contact)

- **Palette:** Warm neutrals. Off-white base (~`#F7F5F0`), deep ink body (`#1A1A1A`), muted slate, one warm accent (terracotta / bronze — **no cyan**).
- **Typography:** Serif display (Fraunces or Source Serif via `next/font`) for H1/H2; existing system sans for body. Drop mono labels from marketing copy (mono stays for small meta/tag elements).
- **Texture:** No grid background. Editorial whitespace, larger line-heights, quieter cards (no left-border accent stripes).
- **Tone:** Executive, grounded, holding-co — not dev-shop.

### Surface B — "Technology" (Technology page, Portfolio: Technology Portfolio section)

- **Palette:** Current zinc + cyan + Claude peach. Unchanged.
- **Typography:** Current mono labels + sans body. Unchanged.
- **Texture:** Grid background, glow hovers, left-border accent cards, Claude partner shimmer. Unchanged.
- **Tone:** AI studio, technical, product-forward.

### Shared components (both surfaces)

- `Nav.tsx`, `Footer.tsx`, `CTA.tsx`, `FadeIn.tsx` — keep, same API.
- Nav active indicator color adapts to the surface the current route uses.
- Footer background color swaps per surface.

### Implementation approach

- Extend `tailwind.config.ts` with surface token layers: `surface-operating-*` and `surface-technology-*` (bg, ink, accent, muted).
- Surface switch at the page/layout level — a `<ThemeSurface surface="operating" | "technology">` wrapper that sets a data attribute on the page root. Tokens key off the attribute. Avoids prop-drilling.
- Add serif font via `next/font/google`. Keep system sans as fallback.

### Accessibility requirements

- Surface A palette hits WCAG AA contrast — lock final hex values against contrast checker before shipping.
- Every interactive element gets visible focus states (current Technology site is thin on this — fix during rebuild).
- Serif display uses `font-display: swap` + sans fallback.

---

## 5. Homepage (`/`) — Surface A

Seven sections, top to bottom:

1. **Hero.** Eyebrow: `GPSL — Operating Group`. H1 direction: *"We build, operate, and scale ventures."* Sub: one sentence positioning GPSL as a diversified operating group with in-house AI agency. Two CTAs: `Explore our ventures` → `/portfolio`, `How we execute` → `/execution`. Warm gradient or editorial full-bleed photo (placeholder OK at launch).
2. **Two engines.** Side-by-side cards — **Execution** and **Technology** — equal weight. Tag: *"One operating group, two engines."*
3. **Operating model — Discover → Align → Execute → Sustain.** 4-step horizontal strip. Port UBO content, rewrite so it applies across ventures (not just consulting).
4. **Selected ventures.** 3 teaser cards: Tribal Bank · Tribal Trade & Economic Development · Fishing & Processing. One line each. CTA: `See all ventures` → `/portfolio`. **Tribal identity surfaces naturally here.**
5. **Technology spotlight.** 3 teaser cards: LegacyCompass · Meridian AI · LuxusAI. One line each. CTA: `See how we build` → `/technology`.
6. **Trust / how we work.** 3–4 small tiles: `Senior integrated team` · `Applied-AI philosophy` · `Claude Partner Network` · `Forward-deployed execution`. Each links to relevant page.
7. **Engagement routing.** Three-door block mirroring the contact form:
   - *Need execution support?* → `/contact?topic=execution`
   - *Want to build something?* → `/contact?topic=technology`
   - *Partnership or venture?* → `/contact?topic=partnerships`

---

## 6. Execution (`/execution`) — Surface A

Port-and-tighten of UBO content. Reframed as one engine of GPSL, not the whole brand.

1. **Hero.** Eyebrow: `Division`. H1: *"Execution."* Sub: GPSL's operating arm — human logistics, deal flow, stakeholder alignment, delivery across ventures and partner projects.
2. **Positioning paragraph.** ~60–80 words. Port UBO hero sub + philosophy intro, rewrite as a division.
3. **Operating model — Discover → Align → Execute → Sustain.** Full section with expanded phase descriptions. Keep existing UBO content, tighten wording.
4. **Services.** Three bookable cards:
   - **Execution Discovery Call** — clarify blockers, agree fastest path
   - **Operational Execution Sprint** — 2–4 week coordinated action
   - **Supply Chain Resilience Audit** — reduce fragility, increase continuity
   Each with primary CTA (`Book →` / `Request →`).
5. **Where Execution operates.** Sector/context strip: ventures (tribal bank, trade, fishing), partner projects, supply chain, cross-venture delivery.
6. **CTA block.** "Have something that needs to get done? → Book a Discovery Call." → `/contact?topic=execution`.

---

## 7. Technology (`/technology`) — Surface B

Three flagships featured. Absorbs current `/ai` philosophy content.

1. **Hero.** Eyebrow: `Division`. H1: *"Technology."* Sub: GPSL's AI agency — modern applications and applied AI for our ventures and partners. Grid background returns here.
2. **Under-GPSL positioning paragraph.** ~50 words explicitly framing Technology as the systems layer of GPSL's operating model.
3. **Three flagship cards.** Featured, larger, 3-col desktop / stack mobile:
   - **LegacyCompass** — AI end-of-life planning & estate management
   - **Meridian AI** — conversational real estate advisor
   - **LuxusAI** — AI legal workspace for deal structuring
   Each: name, subtitle, 2-line description, 2–3 tags, live link + `Case study` (stub page acceptable).
4. **See the rest of our work.** One-line strip linking to `/portfolio` for Civic Sentinel, HelixBridge, GrantBridge, InvenioAI.
5. **Philosophy.** Three paragraphs from existing `/ai` — applied AI + cross-functional team.
6. **Stack.** From `/ai` — Next.js, Supabase, Claude Code, Cursor, fastai.
7. **Claude Partner Network.** From `/ai` — keep shimmer treatment.
8. **Forward-deployed engineering model.** New section — how Technology embeds into projects, scopes POCs, delivers pilots, scales to production. Calls out the Bernie + Kentory delivery pattern.
9. **CTA.** "Interested in building something?" → `/contact?topic=technology`.

---

## 8. Portfolio (`/portfolio`) — Surface A with Surface B island

Two clearly separated sections on one page with a visual surface shift between them.

### Section 1 — Ventures (Surface A)

- Eyebrow: `GPSL Ventures`. H2: *"Ventures."*
- Three cards:
  - **Tribal Bank** (status: Exploring)
  - **Tribal Trade & Economic Development** (status: Active)
  - **Fishing & Processing** (status: Active)
- Each card: status pill, short description, optional `Partnership inquiry` CTA → `/contact?topic=partnerships`.

### Section 2 — Technology Portfolio (Surface B island)

- Eyebrow: `GPSL Technology`. H2: *"Technology Portfolio."*
- One-line intro: "Beyond our flagships, these are products we've shipped."
- Four cards, current Technology card styling (left-border accent, tags, external-link icon):
  - Civic Sentinel
  - HelixBridge
  - GrantBridge
  - InvenioAI

---

## 9. Team (`/team`) — Surface A

Single page, two grouped sub-sections with different card treatments.

### Execution (2 cards)

- **Bernie Chan** — Forward Deployed Engineer | Deal Flow & Client Integration. Existing bio.
- **Kentory** — Technical Program Manager | Business Operations Strategist. Bio to be drafted by Claude and reviewed by Matthew before ship.

### Technology (4 cards)

- **Matty Dinh** — Data Science | ML | BI | IT Systems Architecture. Existing bio.
- **Cliff Wu** — AI Engineer | Applied ML | Full-Stack. Existing bio.
- **Nate Sou** — Full-Stack | AI Engineer | Systems & Automation. Existing bio.
- **Martin Leung** — Full-Stack | Payments | Authentication. Existing bio.

Opening paragraph: "One senior integrated team spanning operations, delivery, and engineering."

Technology side keeps the cyan left-border card style. Execution side uses a warmer card treatment (no cyan accent). Subtle visual cue reinforces two-engines story without being jarring.

---

## 10. Contact (`/contact`) — Surface A

- Topic selector at top: **Execution · Technology · Partnerships**.
- Selector drives subject prefix + tailors the subhead.
- Query-param preselect: `?topic=execution` | `?topic=technology` | `?topic=partnerships`.
- Fields: Name, Email, Organization, Topic (preselected), Message.
- Submission: `mailto:matthew.dinh@gpsl-ubo.com` with subject prefix `[Execution]` / `[Technology]` / `[Partnerships]`. (All three routes land in one inbox for now.)
- Sidebar: phone `904-439-9174`, LinkedIn.

---

## 11. Cross-cutting concerns

### Metadata (`app/layout.tsx` + per-page)

- Default `metadata.title`: `"GPSL"` (not "GPSL Technology").
- Fresh default `metadata.description` describing GPSL as an operating group.
- `openGraph` image — needs asset; placeholder acceptable for launch.
- Each page (`/`, `/execution`, `/technology`, `/portfolio`, `/team`, `/contact`) exports its own `metadata`.

### Sitemap & robots

- `sitemap.ts` auto-includes all six top-level routes plus any case-study sub-routes.
- `robots.ts` — no changes.

### Redirects (`next.config.mjs`)

```
/projects → /portfolio (301)
/ai → /technology (301)
/about → /
/services → /execution
/newsletters → /contact
```

### Analytics

- `@vercel/analytics` — one-line drop-in in `layout.tsx`. Pageviews + basic engagement, no cookies.
- Defer Sentry / paid analytics post-launch.

### Testing

- Jest + Testing Library (existing stack). No new framework.
- Extend `pages.test.tsx` with tests for: updated Home, Execution, Portfolio. Each asserts: hero copy renders, correct surface data attribute applied, nav links present.
- Extend `components.test.tsx` with: `<ThemeSurface>` renders correct tokens per surface prop.

### Performance

- Stay on SSG. Lighthouse target ≥95 across all pages.
- Serif font via `next/font` (Latin subset, `font-display: swap`). No FOUT.
- Hero imagery via `next/image` if used, WebP preferred.

---

## 12. Post-development cutover playbook (execute when build is complete and approved)

### Pre-cutover (can do early — do it now if you want)

1. In Wix DNS panel: lower TTL on the three A records (`gpsl-ubo.com`) and the `www` CNAME from `1 Hour` → `5 Minutes` (300 seconds).
2. **Wait at least 1 hour** so every DNS cache picks up the shorter TTL (they have to respect the old 1-hour TTL one last time).

### Vercel setup (during development)

3. In Vercel project settings: add `gpsl-ubo.com` and `www.gpsl-ubo.com` as custom domains. Vercel will show pending verification status — that's fine, DNS hasn't been flipped yet.
4. Confirm Vercel project root directory is `./` (or whatever the new repo root is post-restructure) and build works on preview deploys.

### Cutover day

5. In Wix DNS panel — make these changes:
   - **Delete** all three A records (`185.230.63.171`, `185.230.63.186`, `185.230.63.107`).
   - **Add** one A record: Host `gpsl-ubo.com` → Value `76.76.21.21`.
   - **Change** CNAME `www.gpsl-ubo.com` from `cdn1.wixdns.net` → `cname.vercel-dns.com`.
   - **Delete** CNAME `en.gpsl-ubo.com` (Wix multilingual artifact, irrelevant).
   - **Leave alone:** TXT SPF record and any MX records (email delivery is already set up and should not be disturbed).
6. Propagation should complete in ~5 minutes given the lowered TTL.
7. Verify: `gpsl-ubo.com` and `www.gpsl-ubo.com` both serve the new Vercel site, both have valid SSL (Vercel auto-provisions), email to `matthew.dinh@gpsl-ubo.com` still works.
8. Test all redirects (`/projects`, `/ai`, legacy Wix paths).

### Post-cutover (after 24 hours of stable operation)

9. Raise TTL back to `1 Hour` on the changed records (lower TTL = more DNS lookups = slight perf cost).
10. Archive or delete the Wix site content (keep Wix subscription active until DNS is moved — see follow-up below).

### Follow-up (non-blocking, weeks after launch)

11. Move DNS off Wix. Options: Cloudflare (free, best DNS management), or back to the registrar's native DNS. Wix holding DNS is a single point of failure — if the subscription lapses, DNS management can disappear. This is a ~30-minute task at any registrar.

---

## 13. Launch scope

All six pages ship together on day one. No MVP cut — content and structure are well-enough defined across the board.

**Content dependencies before ship:**
- Kentory bio (Claude drafts, Matthew reviews)
- Copy pass on Homepage, Execution, and Technology (first draft Claude, final polish Matthew)
- Venture descriptions for Tribal Bank, Tribal Trade & Economic Development, Fishing & Processing (Matthew provides specifics, Claude drafts)
- Hero imagery (optional — placeholders work for launch)
- OG image asset (optional — placeholder works for launch)

---

## 14. Out of scope for this rebuild

- Case study sub-pages for flagships (can be stubs at launch)
- CMS / dynamic content layer (everything stays static)
- Blog / newsletter feature
- Multi-language (Wix had `en.gpsl-ubo.com` — we're dropping it)
- Client/customer login or authenticated areas
- Server-side form handling / database (mailto stays)
- Analytics beyond basic Vercel Analytics
- Paid monitoring (Sentry, Datadog, etc.)

These can all be added in future sprints once the umbrella site is live.

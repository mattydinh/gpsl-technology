# GPSL Website Rebuild Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Merge `gpsl-ubo.com` (Wix) and `gpsl-technology.vercel.app` into one umbrella website on the `gpsl-ubo.com` domain, positioning GPSL as a diversified operating group with Execution + Technology as divisions and a Portfolio covering both GPSL Ventures and non-flagship technology products.

**Architecture:** Extend the existing `gpsl-technology` Next.js 15 repo. Introduce a dual-surface visual system ("operating" = warm neutrals + serif display for home/exec/portfolio-ventures/team/contact; "technology" = existing zinc+cyan+grid for `/technology` + portfolio-tech island). Six pages (Home, Execution, Technology, Portfolio, Team, Contact). Hard cutover to `gpsl-ubo.com` via Wix DNS panel.

**Tech Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind 3.4 · Framer Motion 11 · Lucide React · Jest 30 + Testing Library · `next/font` (Fraunces serif + system sans) · `@vercel/analytics` · Vercel hosting

**Design reference:** @docs/plans/2026-04-20-gpsl-website-rebuild-design.md

**Frontend polish:** For tasks marked **[frontend-design]**, invoke `@superpowers:frontend-design` to lift visual quality above template-grade.

---

## Phase 1 — Foundation (design tokens, fonts, surface switcher)

### Task 1: Update package metadata

**Files:**
- Modify: `package.json` (name, version)
- Modify: `README.md` (project description)

**Step 1:** Change `package.json` `name` from `"gpsl-technology"` to `"gpsl-site"`. Bump `version` to `"3.0.0"`.

**Step 2:** Update first paragraph of `README.md` to describe GPSL as a diversified operating group with Execution + Technology divisions.

**Step 3:** Run `npm test` to confirm nothing broke.

**Step 4:** Commit.

```bash
git add package.json README.md
git commit -m "chore: rename project from gpsl-technology to gpsl-site"
```

---

### Task 2: Add Fraunces serif font via next/font

**Files:**
- Modify: `src/app/layout.tsx`
- Test: `src/__tests__/components.test.tsx`

**Step 1:** Write a failing test that asserts the serif font CSS variable is applied to `<body>`.

```tsx
// In components.test.tsx
import { render } from "@testing-library/react";
import RootLayout from "@/app/layout";

test("layout applies Fraunces serif font variable", () => {
  const { container } = render(<RootLayout>{null}</RootLayout>);
  const body = container.querySelector("body");
  expect(body?.className).toMatch(/--font-fraunces/);
});
```

**Step 2:** Run `npm test -- components.test` → FAIL.

**Step 3:** In `src/app/layout.tsx`, import Fraunces from `next/font/google`:

```tsx
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600", "700"],
});

// In <html> element:
<html lang="en" className={fraunces.variable}>
```

**Step 4:** Run `npm test -- components.test` → PASS.

**Step 5:** Commit.

```bash
git add src/app/layout.tsx src/__tests__/components.test.tsx
git commit -m "feat: add Fraunces serif font for operating-surface display type"
```

---

### Task 3: Extend Tailwind with surface token layers  **[frontend-design]**

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

**Step 1:** Add surface token scales to `tailwind.config.ts` under `theme.extend.colors`:

```ts
colors: {
  // existing surface.* and accent.* tokens unchanged
  "op": {
    bg: "#F7F5F0",       // off-white warm base
    ink: "#1A1A1A",      // deep ink
    muted: "#5A5550",    // muted slate
    accent: "#B55A30",   // terracotta warm accent
    line: "#E5E0D8",     // subtle rules
  },
},
fontFamily: {
  display: ["var(--font-fraunces)", "Georgia", "serif"],
  sans: ["ui-sans-serif", "system-ui", "sans-serif"],
  mono: ["ui-monospace", "SFMono-Regular", "monospace"],
},
```

**Step 2:** Add two surface root attribute selectors in `globals.css`:

```css
[data-surface="operating"] {
  background-color: theme("colors.op.bg");
  color: theme("colors.op.ink");
}
[data-surface="technology"] {
  background-color: #ffffff;
  color: theme("colors.zinc.900");
}
```

**Step 3:** Run `npm run build` → verify Tailwind picks up new tokens with no errors.

**Step 4:** Commit.

```bash
git add tailwind.config.ts src/app/globals.css
git commit -m "feat: add operating-surface design tokens (warm neutrals + terracotta)"
```

---

### Task 4: Create ThemeSurface wrapper component

**Files:**
- Create: `src/components/ThemeSurface.tsx`
- Test: `src/__tests__/components.test.tsx`

**Step 1:** Write failing tests:

```tsx
import { render } from "@testing-library/react";
import ThemeSurface from "@/components/ThemeSurface";

test("ThemeSurface sets data-surface attribute on root div", () => {
  const { container } = render(
    <ThemeSurface surface="operating">content</ThemeSurface>
  );
  expect(container.firstChild).toHaveAttribute("data-surface", "operating");
});

test("ThemeSurface accepts technology surface", () => {
  const { container } = render(
    <ThemeSurface surface="technology">content</ThemeSurface>
  );
  expect(container.firstChild).toHaveAttribute("data-surface", "technology");
});
```

**Step 2:** Run → FAIL (component doesn't exist).

**Step 3:** Create `src/components/ThemeSurface.tsx`:

```tsx
import { ReactNode } from "react";

type Surface = "operating" | "technology";

export default function ThemeSurface({
  surface,
  children,
}: {
  surface: Surface;
  children: ReactNode;
}) {
  return <div data-surface={surface} className="min-h-screen">{children}</div>;
}
```

**Step 4:** Run tests → PASS.

**Step 5:** Commit.

```bash
git add src/components/ThemeSurface.tsx src/__tests__/components.test.tsx
git commit -m "feat: add ThemeSurface wrapper for per-route design surface"
```

---

### Task 5: Update Nav to adapt per surface

**Files:**
- Modify: `src/components/Nav.tsx`
- Test: `src/__tests__/components.test.tsx`

**Step 1:** Write test asserting Nav contains 6 new items: Home, Execution, Technology, Portfolio, Team, Contact. Old item `AI` should not be present.

```tsx
test("Nav contains 6 top-level items with Execution + Portfolio", () => {
  const { getByText, queryByText } = render(<Nav />);
  ["Execution", "Technology", "Portfolio", "Team", "Contact"].forEach((label) => {
    expect(getByText(label)).toBeInTheDocument();
  });
  expect(queryByText("AI")).not.toBeInTheDocument();
});
```

**Step 2:** Run → FAIL.

**Step 3:** In `Nav.tsx`, update the `navItems` array:

```tsx
const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/execution", label: "Execution", icon: Compass },
  { href: "/technology", label: "Technology", icon: Cpu },
  { href: "/portfolio", label: "Portfolio", icon: FolderKanban },
  { href: "/team", label: "Team", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
];
```

Use `usePathname()` to determine if the current route is a Surface A (`/`, `/execution`, `/portfolio`, `/team`, `/contact`) or Surface B (`/technology`) route. Apply the right active-state colors (terracotta for operating, cyan for technology).

**Step 4:** Run tests → PASS.

**Step 5:** Commit.

```bash
git add src/components/Nav.tsx src/__tests__/components.test.tsx
git commit -m "feat: update Nav for 6-item IA, adapt active-state to surface"
```

---

## Phase 2 — Homepage rebuild

### Task 6: Scaffold new homepage with ThemeSurface + hero  **[frontend-design]**

**Files:**
- Modify: `src/app/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Write failing tests for new hero copy and CTAs:

```tsx
test("Home hero mentions 'operating group' and has two primary CTAs", () => {
  render(<Home />);
  expect(screen.getByText(/operating group/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Explore our ventures/i })).toHaveAttribute("href", "/portfolio");
  expect(screen.getByRole("link", { name: /How we execute/i })).toHaveAttribute("href", "/execution");
});
```

**Step 2:** Run → FAIL.

**Step 3:** Replace homepage hero. New content:

- Eyebrow: `GPSL — Operating Group`
- H1: *"We build, operate, and scale ventures."*
- Sub: *"GPSL is a diversified operating group pursuing initiatives across finance, trade, logistics, and fishing — with an in-house AI agency that builds the technology our ventures need."*
- CTAs: `Explore our ventures` → `/portfolio`, `How we execute` → `/execution`

Wrap entire page with `<ThemeSurface surface="operating">`. Use `font-display` on H1 (Fraunces). Remove grid background. Use off-white `bg-op-bg` background.

**Step 4:** Run tests → PASS.

**Step 5:** Commit.

```bash
git add src/app/page.tsx src/__tests__/pages.test.tsx
git commit -m "feat: new homepage hero with operating-group positioning"
```

---

### Task 7: Homepage "Two engines" section

**Files:**
- Modify: `src/app/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Test that the section renders two equal-weight cards linking to `/execution` and `/technology`:

```tsx
test("Home Two Engines renders Execution + Technology cards", () => {
  render(<Home />);
  const exec = screen.getByRole("link", { name: /Execution/i });
  const tech = screen.getByRole("link", { name: /^Technology/ });
  expect(exec).toHaveAttribute("href", "/execution");
  expect(tech).toHaveAttribute("href", "/technology");
});
```

**Step 2:** Run → FAIL.

**Step 3:** Add section after hero:

- Tag text: `One operating group, two engines.`
- Two cards side-by-side (stack on mobile):
  - **Execution** — "Human logistics, deal flow, stakeholder alignment, operational delivery." → `/execution`
  - **Technology** — "AI agency building production software for our ventures and external clients." → `/technology`

Use quieter operating-surface card treatment (no left-border stripe, warm rule border, serif H3).

**Step 4:** Tests PASS.

**Step 5:** Commit.

```bash
git add src/app/page.tsx src/__tests__/pages.test.tsx
git commit -m "feat: homepage two-engines section"
```

---

### Task 8: Homepage operating-model section (Discover → Align → Execute → Sustain)

**Files:**
- Modify: `src/app/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Test presence of all 4 phase labels:

```tsx
test("Home operating model lists 4 phases", () => {
  render(<Home />);
  ["Discover", "Align", "Execute", "Sustain"].forEach((p) =>
    expect(screen.getByText(new RegExp(p, "i"))).toBeInTheDocument()
  );
});
```

**Step 2:** Implement 4-step horizontal strip. Port content from current UBO site, tighten so it applies across ventures not just consulting:

- **Discover** — Map ecosystems, ventures, and partners. Identify the bottlenecks that block execution.
- **Align** — Synchronize teams and stakeholders through disciplined governance.
- **Execute** — Hands-on implementation, vendor coordination, and delivery.
- **Sustain** — Build resilience playbooks so wins compound over time.

**Step 3:** Tests PASS.

**Step 4:** Commit.

```bash
git add src/app/page.tsx src/__tests__/pages.test.tsx
git commit -m "feat: homepage operating-model section"
```

---

### Task 9: Homepage "Selected ventures" teaser

**Files:**
- Modify: `src/app/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Test 3 venture cards present with link to `/portfolio`:

```tsx
test("Home ventures teaser shows 3 ventures", () => {
  render(<Home />);
  expect(screen.getByText(/Tribal Bank/i)).toBeInTheDocument();
  expect(screen.getByText(/Tribal Trade/i)).toBeInTheDocument();
  expect(screen.getByText(/Fishing & Processing/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /See all ventures/i })).toHaveAttribute("href", "/portfolio");
});
```

**Step 2:** Implement section. Three compact cards, one-line description each:

- **Tribal Bank** (Exploring) — Financial infrastructure for tribal economic sovereignty.
- **Tribal Trade & Economic Development** (Active) — Enhancing and building economic development across tribal trade.
- **Fishing & Processing** (Active) — Commercial fishing and processing operations serving Native communities.

**Step 3:** Tests PASS.

**Step 4:** Commit.

```bash
git add src/app/page.tsx src/__tests__/pages.test.tsx
git commit -m "feat: homepage selected-ventures teaser"
```

---

### Task 10: Homepage "Technology spotlight" teaser (3 flagships)

**Files:**
- Modify: `src/app/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Test flagships render with live links:

```tsx
test("Home technology spotlight features 3 flagships", () => {
  render(<Home />);
  expect(screen.getByText(/LegacyCompass/i)).toBeInTheDocument();
  expect(screen.getByText(/Meridian AI/i)).toBeInTheDocument();
  expect(screen.getByText(/LuxusAI/i)).toBeInTheDocument();
});
```

**Step 2:** Implement section. One-line each:

- **LegacyCompass** — AI end-of-life planning and estate management.
- **Meridian AI** — Conversational AI for home buyers.
- **LuxusAI** — AI legal workspace for deal structuring.

CTA: `See how we build` → `/technology`.

**Step 3:** Tests PASS.

**Step 4:** Commit.

```bash
git add src/app/page.tsx src/__tests__/pages.test.tsx
git commit -m "feat: homepage technology-spotlight teaser"
```

---

### Task 11: Homepage trust tiles + engagement routing

**Files:**
- Modify: `src/app/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Tests for 4 trust tiles and 3 routing links:

```tsx
test("Home renders 4 trust tiles and 3 routing doors", () => {
  render(<Home />);
  ["Senior integrated team", "Applied-AI philosophy", "Claude Partner Network", "Forward-deployed execution"]
    .forEach((t) => expect(screen.getByText(new RegExp(t, "i"))).toBeInTheDocument());
  expect(screen.getByRole("link", { name: /Need execution support/i })).toHaveAttribute("href", "/contact?topic=execution");
  expect(screen.getByRole("link", { name: /Want to build something/i })).toHaveAttribute("href", "/contact?topic=technology");
  expect(screen.getByRole("link", { name: /Partnership or venture/i })).toHaveAttribute("href", "/contact?topic=partnerships");
});
```

**Step 2:** Implement. Four trust tiles linking to `/team`, `/technology`, `/technology`, `/execution`. Three-door engagement block at the bottom.

**Step 3:** Tests PASS.

**Step 4:** Commit.

```bash
git add src/app/page.tsx src/__tests__/pages.test.tsx
git commit -m "feat: homepage trust tiles + three-door engagement routing"
```

---

## Phase 3 — Execution page

### Task 12: Create `/execution` route with hero  **[frontend-design]**

**Files:**
- Create: `src/app/execution/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Test:

```tsx
test("/execution renders under operating surface with Execution H1", () => {
  render(<ExecutionPage />);
  expect(screen.getByRole("heading", { level: 1, name: /Execution/i })).toBeInTheDocument();
  const root = screen.getByTestId("page-root");
  expect(root).toHaveAttribute("data-surface", "operating");
});
```

**Step 2:** Implement. Wrap with `<ThemeSurface surface="operating">` (add `data-testid="page-root"`). Hero content per design doc section 6.

**Step 3:** Tests PASS.

**Step 4:** Commit.

---

### Task 13: Execution — positioning paragraph + operating model detailed

**Files:** Modify `src/app/execution/page.tsx`, tests.

**Step 1:** Test for presence of 4 phase labels with their expanded descriptions.

**Step 2:** Implement. Port UBO 4-phase detailed content, rewrite to apply across ventures.

**Step 3:** Commit.

---

### Task 14: Execution — three service cards

**Files:** Modify `src/app/execution/page.tsx`, tests.

**Step 1:** Test for 3 bookable service titles (Execution Discovery Call, Operational Execution Sprint, Supply Chain Resilience Audit) and their CTAs (all → `/contact?topic=execution`).

**Step 2:** Implement 3-card grid. Operating-surface card treatment, terracotta CTA button.

**Step 3:** Commit.

---

### Task 15: Execution — where we operate + CTA

**Files:** Modify `src/app/execution/page.tsx`, tests.

**Step 1:** Test for `/contact?topic=execution` link from final CTA.

**Step 2:** Implement short sector strip (Ventures, Partner Projects, Supply Chain, Cross-venture Delivery) + CTA block.

**Step 3:** Commit.

---

## Phase 4 — Technology page restructure

### Task 16: Rename `/ai` to `/technology` — scaffold new route  **[frontend-design]**

**Files:**
- Create: `src/app/technology/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Test `/technology` renders with H1 "Technology" under `data-surface="technology"`.

**Step 2:** Implement. `<ThemeSurface surface="technology">` wrapper. Hero eyebrow `Division`, H1 *"Technology."*, sub per design doc. Grid background returns here via `.bg-grid`.

**Step 3:** Tests PASS.

**Step 4:** Commit.

---

### Task 17: Technology — under-GPSL positioning + 3 flagship cards

**Files:** Modify `src/app/technology/page.tsx`, tests.

**Step 1:** Test flagships render with live external links:

```tsx
test("Technology shows 3 flagship cards with live links", () => {
  render(<TechnologyPage />);
  expect(screen.getByRole("link", { name: /LegacyCompass/i })).toHaveAttribute("href", "https://legacy-compass-puce.vercel.app/");
  expect(screen.getByRole("link", { name: /Meridian AI/i })).toHaveAttribute("href", "https://web-production-92c07.up.railway.app/");
  expect(screen.getByRole("link", { name: /LuxusAI/i })).toHaveAttribute("href", "https://luxusai.vercel.app/");
});
```

**Step 2:** Add positioning paragraph (~50 words) placing Technology as GPSL's systems layer. Add 3 flagship cards — larger than current project cards, 2-line description, 2–3 tags, "Case study" stub link (points to same URL for now; future work).

**Step 3:** Tests PASS.

**Step 4:** Commit.

---

### Task 18: Technology — port Philosophy / Stack / Claude Partner from `/ai`

**Files:** Modify `src/app/technology/page.tsx`.

**Step 1:** Test Philosophy, Stack, and Claude Partner Network sections render.

**Step 2:** Copy the three card sections from current `src/app/ai/page.tsx` into `/technology`. Keep cyan left-border and shimmer treatments. Add a `<a id="philosophy">` anchor just before the Philosophy card so the `/ai → /technology#philosophy` redirect lands correctly.

**Step 3:** Commit.

---

### Task 19: Technology — forward-deployed engineering section + CTA

**Files:** Modify `src/app/technology/page.tsx`.

**Step 1:** Test "Forward-deployed" section renders and mentions Bernie + Kentory framing (e.g., "forward-deployed engineering").

**Step 2:** Add new section. Short description of how Technology embeds into projects, scopes POCs, delivers pilots, scales to production. Mention the forward-deployed delivery pattern. Add final CTA → `/contact?topic=technology`.

**Step 3:** Test: "See the rest of our work" strip links to `/portfolio`.

**Step 4:** Commit.

---

### Task 20: Delete old `/ai` page, delete old `/projects` page

**Files:**
- Delete: `src/app/ai/page.tsx`
- Delete: `src/app/projects/page.tsx`
- (Redirects will be added in Task 24.)

**Step 1:** `rm -r src/app/ai src/app/projects`.

**Step 2:** Run `npm test` — any test that imports from these paths needs updating (there are tests for both in `pages.test.tsx`; remove those test blocks).

**Step 3:** Run `npm run build` — verify no broken imports.

**Step 4:** Commit.

```bash
git add -A
git commit -m "chore: remove legacy /ai and /projects pages (redirects added next)"
```

---

## Phase 5 — Portfolio page

### Task 21: Create `/portfolio` with Ventures section (Surface A)  **[frontend-design]**

**Files:**
- Create: `src/app/portfolio/page.tsx`
- Test: `src/__tests__/pages.test.tsx`

**Step 1:** Test 3 ventures render with status pills:

```tsx
test("/portfolio renders 3 ventures with status pills", () => {
  render(<PortfolioPage />);
  expect(screen.getByText(/Tribal Bank/i)).toBeInTheDocument();
  expect(screen.getByText(/Exploring/i)).toBeInTheDocument();
  expect(screen.getByText(/Tribal Trade & Economic Development/i)).toBeInTheDocument();
  expect(screen.getByText(/Fishing & Processing/i)).toBeInTheDocument();
});
```

**Step 2:** Implement top half. `<ThemeSurface surface="operating">`. Eyebrow `GPSL Ventures`, H2 *"Ventures."* Three cards with status pills (`Exploring`, `Active`, `Active`) and optional `Partnership inquiry` CTAs → `/contact?topic=partnerships`. Venture copy per design doc section 8.

**Step 3:** Tests PASS.

**Step 4:** Commit.

---

### Task 22: Portfolio — Technology Portfolio island (Surface B)

**Files:** Modify `src/app/portfolio/page.tsx`, tests.

**Step 1:** Test for 4 non-flagship projects:

```tsx
test("/portfolio technology island renders 4 products", () => {
  render(<PortfolioPage />);
  ["Civic Sentinel", "HelixBridge", "Grantbridge", "InvenioAI"]
    .forEach((n) => expect(screen.getByText(new RegExp(n, "i"))).toBeInTheDocument());
});
```

**Step 2:** Below Ventures, add a visual separator, then nest a `<div data-surface="technology" className="bg-white">` island. Render the 4 non-flagship projects using the current `/projects` card pattern (cyan left-border, tags, external-link icon). Pull project data from the existing `projects` array in the old `/projects` page (preserve during rename).

Note: keep the 4 projects' existing metadata (icon, title, subtitle, description, tags, url) — we're just relocating them.

**Step 3:** Tests PASS.

**Step 4:** Commit.

---

## Phase 6 — Team page update

### Task 23: Add Kentory bio; restructure team into Execution + Technology groups

**Files:** Modify `src/app/team/page.tsx`, `src/__tests__/pages.test.tsx`.

**Step 1:** Test groups + bios:

```tsx
test("/team groups Execution and Technology separately", () => {
  render(<TeamPage />);
  expect(screen.getByRole("heading", { name: /Execution/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Technology/i })).toBeInTheDocument();
  expect(screen.getByText(/Kentory/i)).toBeInTheDocument();
  expect(screen.getByText(/Bernie Chan/i)).toBeInTheDocument();
  ["Matty Dinh", "Cliff Wu", "Nate Sou", "Martin Leung"]
    .forEach((n) => expect(screen.getByText(n)).toBeInTheDocument());
});
```

**Step 2:** Restructure the `team` array into two groups. Draft Kentory bio:

```ts
{
  name: "Kentory",
  role: "Technical Program Manager | Business Operations Strategist",
  bio: "Technical program manager and business operations strategist working alongside forward-deployed engineering to translate client goals into delivery roadmaps. Coordinates scoping, milestones, and cross-functional execution across GPSL's ventures and external technology engagements — ensuring operational readiness, stakeholder alignment, and on-time delivery from first discovery call through production.",
  group: "execution",
},
```

Wrap entire page with `<ThemeSurface surface="operating">`. Tag each team member with `group: "execution" | "technology"`. Render two labeled groups. Execution cards use warm operating-surface treatment (no cyan left-border). Technology cards keep existing cyan left-border style.

**Step 3:** Tests PASS.

**Step 4:** Before merging, flag the Kentory bio for Matthew's review. Commit with a note:

```bash
git add src/app/team/page.tsx src/__tests__/pages.test.tsx
git commit -m "feat: restructure team into Execution/Technology groups, add Kentory

Kentory bio is a draft — Matthew to review before launch."
```

---

## Phase 7 — Contact page

### Task 24: Contact — topic selector + routing to matthew.dinh@gpsl-ubo.com

**Files:** Modify `src/app/contact/page.tsx`, `src/__tests__/pages.test.tsx`.

**Step 1:** Tests:

```tsx
test("/contact has topic selector with 3 options", () => {
  render(<ContactPage />);
  const select = screen.getByLabelText(/topic/i);
  ["Execution", "Technology", "Partnerships"]
    .forEach((opt) => expect(within(select).getByText(opt)).toBeInTheDocument());
});

test("/contact preselects topic from query param", () => {
  mockSearchParams({ topic: "technology" });
  render(<ContactPage />);
  expect(screen.getByLabelText(/topic/i)).toHaveValue("technology");
});

test("/contact submit builds mailto with correct prefix and recipient", () => {
  render(<ContactPage />);
  // fill and submit...
  // assert mailto href starts with "mailto:matthew.dinh@gpsl-ubo.com"
  // and subject begins with "[Execution]" | "[Technology]" | "[Partnerships]"
});
```

**Step 2:** Implement. Use `useSearchParams()` to preselect topic. Build the `mailto:` URL with:

```ts
const recipient = "matthew.dinh@gpsl-ubo.com";
const prefix = `[${topic === "execution" ? "Execution" : topic === "technology" ? "Technology" : "Partnerships"}]`;
const subject = encodeURIComponent(`${prefix} ${formData.subject || "Inquiry"}`);
const body = encodeURIComponent(/* name + org + message */);
const href = `mailto:${recipient}?subject=${subject}&body=${body}`;
```

Sidebar: phone `904-439-9174`, LinkedIn link. Wrap page with `<ThemeSurface surface="operating">`.

**Step 3:** Tests PASS.

**Step 4:** Commit.

---

## Phase 8 — Cross-cutting

### Task 25: Add redirects in `next.config.mjs`

**Files:** Modify `next.config.mjs`, add test.

**Step 1:** Integration test via `next/jest` — optional, primary verification is manual. Alternatively, test that `next.config.mjs` exports an async `redirects()` returning expected shape.

**Step 2:** Implement:

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/ai", destination: "/technology#philosophy", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/services", destination: "/execution", permanent: true },
      { source: "/newsletters", destination: "/contact", permanent: true },
    ];
  },
};
export default nextConfig;
```

**Step 3:** `npm run build` then `npm run start` locally; `curl -I http://localhost:3000/projects` should return 308 (Next.js permanent redirect) with `Location: /portfolio`. Verify each redirect.

**Step 4:** Commit.

---

### Task 26: Update metadata (layout + per-page) and sitemap

**Files:** Modify `src/app/layout.tsx`, create per-page `export const metadata`, `src/app/sitemap.ts`.

**Step 1:** Tests assert `<title>` and `<meta name="description">` on at least `/`, `/execution`, `/technology`, `/portfolio`. Use `render` + document head assertions or snapshot.

**Step 2:** In `layout.tsx`, update default metadata:

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://gpsl-ubo.com"),
  title: { default: "GPSL", template: "%s · GPSL" },
  description: "GPSL is a diversified operating group — Execution and Technology divisions delivering across ventures and partner projects.",
  openGraph: {
    type: "website",
    url: "https://gpsl-ubo.com",
    title: "GPSL",
    description: "A diversified operating group.",
    images: ["/og-default.png"], // placeholder
  },
};
```

In each page (`src/app/execution/page.tsx`, etc.), add `export const metadata: Metadata = { title: "Execution", description: "..." }`.

Update `sitemap.ts` to return the 6 canonical routes.

**Step 3:** Tests PASS, `npm run build` succeeds.

**Step 4:** Commit.

---

### Task 27: Add Vercel Analytics

**Files:** Modify `src/app/layout.tsx`, `package.json`.

**Step 1:** `npm install @vercel/analytics`.

**Step 2:** In `layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/next";

// inside <body>, as last child of main layout
<Analytics />
```

**Step 3:** `npm run build` — verify no errors. Manual: deploy preview, confirm analytics events flow in Vercel dashboard.

**Step 4:** Commit.

---

### Task 28: Update footer with new phone, email, and nav links

**Files:** Modify `src/components/Footer.tsx`, `src/__tests__/components.test.tsx`.

**Step 1:** Tests:

```tsx
test("Footer shows new phone and email", () => {
  render(<Footer />);
  expect(screen.getByText(/904-439-9174/)).toBeInTheDocument();
  expect(screen.getByText(/matthew\.dinh@gpsl-ubo\.com/)).toBeInTheDocument();
});

test("Footer links to all 6 top-level pages", () => {
  render(<Footer />);
  ["/", "/execution", "/technology", "/portfolio", "/team", "/contact"]
    .forEach((href) =>
      expect(screen.getByRole("link", { name: new RegExp(href === "/" ? "Home" : href.slice(1), "i") })).toHaveAttribute("href", href)
    );
});
```

**Step 2:** Update footer:

- Copyright: `© 2026 GPSL — Global Partners Strategies & Logistics`
- Tag: `Grounded execution for long-term partnerships`
- Contact: `matthew.dinh@gpsl-ubo.com` · `904-439-9174`
- Pages column: all 6 routes
- Connect column: LinkedIn, GitHub (keep Claude Partner Network link? keep on Technology page only — remove from global footer)

**Step 3:** Tests PASS.

**Step 4:** Commit.

---

### Task 29: Final link audit + dev server QA sweep

**Files:** No source changes expected. Verification task.

**Step 1:** `npm run build && npm run start` locally.

**Step 2:** Manual click-through:
- Home → every CTA and card link lands on the right page
- Nav → every item works, active-state color changes between operating (terracotta) and technology (cyan)
- `/execution` CTAs all land on `/contact?topic=execution` with preselected topic
- `/technology` flagship cards open in new tab to correct external URLs
- `/portfolio` Ventures → `/contact?topic=partnerships`, Tech island projects open externally
- `/team` groups render correctly, Kentory bio visible
- `/contact?topic=execution` preselects, submit builds correct `mailto:` URL
- Redirects: visit `/projects`, `/ai`, `/about`, `/services`, `/newsletters` — all 308 to correct destinations
- 404: visit `/nonexistent` → renders the default Next.js 404 (acceptable; custom 404 is future work)

**Step 3:** Fix any issues found, commit each fix separately.

**Step 4:** Run `npm test` — **all tests must pass**.

**Step 5:** Run `npm run lint` — resolve any errors.

**Step 6:** Final commit:

```bash
git commit --allow-empty -m "chore: final QA sweep pre-deploy"
```

---

### Task 30: Deploy to Vercel preview; stage on subdomain  **[frontend-design]**

**Files:** No source changes. Deploy + review task.

**Step 1:** Push branch to origin, open PR. Vercel creates a preview URL (`gpsl-site-xxx.vercel.app`).

**Step 2:** Review preview URL on desktop and mobile. Use `@superpowers:frontend-design` to critique any remaining visual polish issues — particularly the Surface A operating aesthetic on Home, Execution, Portfolio (ventures), Team, Contact. Iterate until production-grade.

**Step 3:** Merge PR to main. Vercel deploys to production (still `gpsl-technology.vercel.app` until DNS flips).

**Step 4:** In Vercel project settings → Domains: add `gpsl-ubo.com` and `www.gpsl-ubo.com`. Vercel shows pending DNS status. Leave in that state until cutover.

---

## Phase 9 — DNS cutover (execute only after Matthew's go-ahead)

### Task 31: Pre-cutover — lower TTL in Wix DNS panel

**Matthew to do manually.**

**Step 1:** Open Wix → Settings → Domains → `gpsl-ubo.com` → Manage DNS Records.

**Step 2:** For each of these records, change TTL from `1 Hour` → `5 Minutes`:
- A record `gpsl-ubo.com` → `185.230.63.171`
- A record `gpsl-ubo.com` → `185.230.63.186`
- A record `gpsl-ubo.com` → `185.230.63.107`
- CNAME `www.gpsl-ubo.com` → `cdn1.wixdns.net`

**Step 3:** Wait at least **1 hour** before proceeding to Task 32.

---

### Task 32: Cutover — flip DNS to Vercel

**Matthew to do manually.**

**Step 1:** In the same Wix DNS panel:
- **Delete** all three A records (`185.230.63.171`, `185.230.63.186`, `185.230.63.107`).
- **Add** one A record: Host `gpsl-ubo.com` → Value `76.76.21.21` → TTL `5 Minutes`.
- **Change** CNAME `www.gpsl-ubo.com` Value from `cdn1.wixdns.net` → `cname.vercel-dns.com`.
- **Delete** CNAME `en.gpsl-ubo.com` (Wix multilingual artifact).
- **Leave untouched:** TXT SPF record, MX records, and anything else email-related.

**Step 2:** Wait ~5 minutes for propagation.

**Step 3:** Verify:
- `curl -I https://gpsl-ubo.com` returns 200 and serves new content
- `curl -I https://www.gpsl-ubo.com` serves the same
- Both have valid SSL (Vercel provisions automatically on DNS verification)
- Send test email to `matthew.dinh@gpsl-ubo.com` — delivery still works
- Test redirects: `curl -I https://gpsl-ubo.com/projects` returns 308 to `/portfolio`

**Step 4:** Archive Wix site content (don't delete the Wix subscription yet — Wix still holds DNS).

---

### Task 33: Post-cutover — raise TTL, monitor, plan DNS migration follow-up

**Matthew to do manually.**

**Step 1:** After 24 hours of stable operation, raise TTL on the A record and `www` CNAME back to `1 Hour`.

**Step 2:** Follow-up (non-blocking, weeks later): move DNS off Wix to Cloudflare (free, better management) or the registrar's native DNS. Wix as DNS host is a single point of failure — if the subscription lapses, DNS management can disappear.

---

## Content dependencies checklist

Before shipping, confirm:

- [ ] Kentory bio reviewed and edited by Matthew (Task 23 commit message flags this)
- [ ] Venture copy for Tribal Bank / Tribal Trade / Fishing & Processing reviewed
- [ ] Homepage hero copy finalized
- [ ] Execution positioning paragraph + 4-phase content reviewed
- [ ] Technology positioning paragraph reviewed
- [ ] Hero imagery and OG image assets provided (optional for launch; placeholders ship otherwise)

---

## Out of scope for this rebuild

- Case study sub-pages for flagships (stubs acceptable at launch)
- CMS / dynamic content layer
- Blog / newsletter
- Multi-language (`en.gpsl-ubo.com` is being deleted)
- Client/customer login
- Server-side form submission / database
- Paid analytics / monitoring (Sentry, etc.)
- Custom 404 page
- Moving DNS off Wix (tracked as Task 33 follow-up)

These are future sprints once the umbrella site is live.

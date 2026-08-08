# Technology Page "Monolith" Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/technology` in the "Monolith" aesthetic (hairline grid, Geist/Geist Mono, orange accent, terminal accents) with Cornerstone as the flagship and forward-deployed engineering as the lead service.

**Architecture:** Redefine the existing `tech-*` CSS-variable tokens to the Monolith palette (theme-toggle-aware), scope Geist fonts to the technology surface via `[data-surface="technology"]` CSS overrides, and rewrite `src/app/technology/page.tsx` section by section. Nav inherits the new look automatically because it already switches to `tech-*` chrome on `/technology`. No other page changes.

**Tech Stack:** Next.js 15 App Router, React 19 server components, Tailwind 3.4 with CSS-var tokens, `next/font/google` (Geist, Geist_Mono), Jest 30 + Testing Library.

**Spec:** `docs/superpowers/specs/2026-08-08-technology-monolith-design.md`

## Global Constraints

- Scope: `/technology` page only. Home, Execution, Contact, Footer must not change appearance.
- No fabricated claims: no invented SLAs, latency numbers, data volumes, or compliance certifications anywhere on the page.
- Theme toggle keeps working: every color on the page comes from `tech-*` Tailwind tokens (`text-tech-ink`, `bg-tech-panel`, etc.) — never static hex or zinc/white classes.
- Monolith style rules on this page: **no `rounded-*` classes, no `shadow-*` classes**; 1px borders (`border-tech-line`) define structure.
- Accent is orange: `#D93A00` light / `#FF4500` dark, via the `tech-accent` token only.
- Copy rules (repo-wide, test-enforced): no `$`-pricing or tier language; no posture language ("our peers cannot", "our edge comes from"); the word "philosophy" must not appear on the technology page. The literal shell prompt `root@gpsl:~$` is allowed (not pricing).
- Fonts: Geist/Geist Mono on the technology surface only; Fraunces/Figtree everywhere else.
- Commit convention: `<type>(<scope>): <imperative description>`, author `Matthew Dinh <matthew.dinh@gpsl-ubo.com>` (already configured in repo git config).
- Quality gate before any push: `npm test && npm run lint && npm run build`. Do NOT push without user sign-off (push auto-deploys to production gpsl-ubo.com).
- Windows note: run npm/jest commands one at a time; never run two npm processes concurrently in this repo.

## File map

| File | Change |
|---|---|
| `src/app/globals.css` | Redefine `--tech-*` triplets (both modes); add technology-surface font overrides + terminal-cursor keyframe |
| `src/app/layout.tsx` | Add `Geist` + `Geist_Mono` via `next/font/google`, expose `--font-geist` / `--font-geist-mono` |
| `src/app/technology/page.tsx` | Full rewrite (6 sections) |
| `src/__tests__/components.test.tsx` | Extend `next/font/google` mock with `Geist` / `Geist_Mono`; assert new font variables on layout |
| `src/__tests__/technology.test.tsx` | Full rewrite of assertions, staged per task |
| `CLAUDE.md` | Update technology-surface token table, H1 lock, fonts, remove "brand-locked dark" notes |

---

### Task 1: Monolith foundation — tokens and fonts

**Files:**
- Modify: `src/app/layout.tsx` (font imports, body className)
- Modify: `src/app/globals.css` (tech token blocks lines 29–36 and 54–61; `[data-surface="technology"]` rule line 64–67; append cursor keyframe)
- Test: `src/__tests__/components.test.tsx`

**Interfaces:**
- Consumes: existing `--tech-*` CSS variables and `tech.*` Tailwind mapping in `tailwind.config.ts` (unchanged).
- Produces: CSS variables `--font-geist`, `--font-geist-mono` on `<body>`; Monolith values for all `--tech-*` tokens; utility class `terminal-cursor`. Later tasks rely on Tailwind classes `text-tech-accent`, `bg-tech-panel`, `border-tech-line`, etc. rendering Monolith colors, and on `.font-mono`/`.font-display` resolving to Geist Mono/Geist inside `[data-surface="technology"]`.

- [ ] **Step 1: Update the font mock and add a failing layout test**

In `src/__tests__/components.test.tsx`, replace the existing mock (lines 6–9):

```tsx
jest.mock("next/font/google", () => ({
  Fraunces: () => ({ variable: "--font-fraunces", className: "mock-fraunces" }),
  Figtree: () => ({ variable: "--font-figtree", className: "mock-figtree" }),
  Geist: () => ({ variable: "--font-geist", className: "mock-geist" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono", className: "mock-geist-mono" }),
}));
```

Immediately after the existing test `"layout applies Fraunces serif font variable"` (around line 136), add:

```tsx
test("layout exposes Geist font variables for the technology surface", () => {
  const { container } = render(
    <RootLayout>
      <div />
    </RootLayout>
  );
  const body = container.querySelector("body");
  expect(body?.className).toContain("--font-geist");
  expect(body?.className).toContain("--font-geist-mono");
});
```

(Match the render call style of the neighboring layout test in that file — if it renders `<RootLayout>` differently, copy that pattern exactly.)

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx jest src/__tests__/components.test.tsx`
Expected: FAIL — new test fails because layout does not yet include the Geist variables (all previously passing tests must still pass).

- [ ] **Step 3: Add Geist fonts to the layout**

In `src/app/layout.tsx`, extend the font import (line 2):

```tsx
import { Fraunces, Figtree, Geist, Geist_Mono } from "next/font/google";
```

After the `figtree` const (line 21), add:

```tsx
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
```

Update the body className (line 63):

```tsx
className={`${fraunces.variable} ${figtree.variable} ${geist.variable} ${geistMono.variable} font-sans min-h-screen antialiased flex flex-col`}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx jest src/__tests__/components.test.tsx`
Expected: PASS (all tests in the file).

- [ ] **Step 5: Retoken the technology surface in globals.css**

In `src/app/globals.css`, replace the light-mode tech block (lines 29–36):

```css
  /* Technology surface — Monolith light (structural grid) */
  --tech-bg: 247 247 247;     /* #F7F7F7 */
  --tech-panel: 239 239 239;  /* #EFEFEF — one step off bg */
  --tech-card: 255 255 255;   /* #FFFFFF */
  --tech-ink: 17 17 17;       /* #111111 */
  --tech-muted: 110 110 110;  /* #6E6E6E — AA on #F7F7F7 */
  --tech-accent: 217 58 0;    /* #D93A00 — Monolith orange, AA on light */
  --tech-line: 229 229 229;   /* #E5E5E5 — hairlines */
```

Replace the dark-mode tech block (lines 54–61):

```css
  /* Technology surface — Monolith dark (terminal) */
  --tech-bg: 10 10 10;        /* #0A0A0A */
  --tech-panel: 17 17 17;     /* #111111 — one step off bg */
  --tech-card: 22 22 22;      /* #161616 */
  --tech-ink: 237 237 237;    /* #EDEDED */
  --tech-muted: 138 138 138;  /* #8A8A8A */
  --tech-accent: 255 69 0;    /* #FF4500 — Monolith orange */
  --tech-line: 51 51 51;      /* #333333 — hairlines */
```

Replace the `[data-surface="technology"]` rule (lines 64–67) with:

```css
[data-surface="technology"] {
  background-color: rgb(var(--tech-bg));
  color: rgb(var(--tech-ink));
  font-family: var(--font-geist), ui-sans-serif, system-ui, -apple-system, sans-serif;
}

/* Monolith type: Geist everywhere on the technology surface, Geist Mono
   for the mono utility. Overrides are scoped so the rest of the site keeps
   Fraunces/Figtree. */
[data-surface="technology"] .font-display {
  font-family: var(--font-geist), ui-sans-serif, system-ui, -apple-system, sans-serif;
  font-feature-settings: normal;
}
[data-surface="technology"] .font-mono {
  font-family: var(--font-geist-mono), ui-monospace, "SF Mono", Monaco, Consolas, monospace;
}
```

Append at the end of the file (before the `@layer utilities` block):

```css
/* Monolith terminal cursor */
@keyframes cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.terminal-cursor {
  animation: cursor-blink 1.1s step-end infinite;
}
@media (prefers-reduced-motion: reduce) {
  .terminal-cursor {
    animation: none;
  }
}
```

- [ ] **Step 6: Verify the full suite and build still pass**

Run: `npx jest`
Expected: PASS — token values are not asserted anywhere (tests check structure/content, not colors).

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css src/__tests__/components.test.tsx
git commit -m "feat(technology): Monolith tokens + Geist fonts scoped to technology surface"
```

---

### Task 2: Page rewrite part 1 — hero and services grid

**Files:**
- Modify: `src/app/technology/page.tsx` (full replacement)
- Test: `src/__tests__/technology.test.tsx` (full replacement)

**Interfaces:**
- Consumes: `ThemeSurface` (`surface="technology"` prop), `tech-*` Tailwind tokens, Geist overrides from Task 1.
- Produces: page-level constants `BTN_PRIMARY` and `BTN_GHOST` (button className strings) reused by Tasks 3–4; section order hero → services; anchor `#cornerstone` is *referenced* by the hero CTA in this task and *defined* in Task 3 (the link is a dead anchor until Task 3 lands — acceptable within the same PR).

- [ ] **Step 1: Replace the test file with hero + services assertions**

Replace the entire contents of `src/__tests__/technology.test.tsx` with:

```tsx
import { render, screen } from "@testing-library/react";
import TechnologyPage from "@/app/technology/page";

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe("TechnologyPage — Monolith", () => {
  test("wraps content in technology surface", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector('[data-surface="technology"]')).not.toBeNull();
  });

  test("hero shows division kicker and Monolith headline", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/division 02 \/\/ technology/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /software that ships/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("hero CTAs link to technology contact and Cornerstone anchor", () => {
    render(<TechnologyPage />);
    const contact = screen.getAllByRole("link", { name: /initiate contact/i })[0];
    expect(contact).toHaveAttribute("href", "/contact?topic=technology");
    const explore = screen.getByRole("link", { name: /explore cornerstone/i });
    expect(explore).toHaveAttribute("href", "#cornerstone");
  });

  test("services grid lists the three offerings with forward-deployed leading", () => {
    render(<TechnologyPage />);
    expect(
      screen.getByRole("heading", { name: /forward-deployed/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /full-lifecycle/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /maintenance/i, level: 3 })
    ).toBeInTheDocument();
    // Forward-deployed carries the most weight — its manifesto line is present
    expect(screen.getByText(/no prototypes in prod/i)).toBeInTheDocument();
    expect(screen.getByText(/not a ticket queue/i)).toBeInTheDocument();
  });

  test("page keeps banned content out", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#philosophy")).toBeNull();
    const text = (container.textContent ?? "").toLowerCase();
    expect(text).not.toContain("philosophy");
    const links = Array.from(container.querySelectorAll("a"));
    links.forEach((link) => {
      const href = link.getAttribute("href") ?? "";
      expect(href.startsWith("/portfolio")).toBe(false);
    });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail against the old page**

Run: `npx jest src/__tests__/technology.test.tsx`
Expected: FAIL — old page has "The systems layer of GPSL." h1, no `// technology` kicker, no `[ INITIATE CONTACT ]` links.

- [ ] **Step 3: Replace the page with hero + services**

Replace the entire contents of `src/app/technology/page.tsx` with:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import ThemeSurface from "@/components/ThemeSurface";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The systems layer of GPSL. Production-grade AI engineering — forward-deployed engineers, full-lifecycle builds, and Cornerstone, our flagship AI CRM for insurance agents.",
};

// Monolith buttons: rectangular, 1px border, uppercase mono, bracketed label.
const BTN_BASE =
  "inline-flex items-center border px-6 py-3 font-mono text-sm uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-accent";
const BTN_PRIMARY = `${BTN_BASE} border-tech-ink bg-tech-ink text-tech-bg hover:border-tech-accent hover:bg-tech-accent`;
const BTN_GHOST = `${BTN_BASE} border-tech-line text-tech-ink hover:border-tech-accent hover:text-tech-accent`;

const SERVICES = [
  {
    index: "01",
    name: "Forward-Deployed",
    tagline: "Engineers inside your team",
    body: "Embedded senior engineers inside your operation — not a ticket queue. We learn your codebase, your data, and your culture, then ship into it and take commercial ownership of the outcome.",
    points: [
      "Patterns proven inside GPSL ventures first",
      "Engineers embed and stay through launch",
      "No prototypes in prod",
    ],
  },
  {
    index: "02",
    name: "Full-Lifecycle",
    tagline: "Specification to production",
    body: "End-to-end system ownership. From specification and data engineering through deployment, with the monitoring and reliability a real operation needs.",
    points: [],
  },
  {
    index: "03",
    name: "Maintenance",
    tagline: "Systems that keep running",
    body: "Long-term reliability and support after launch. Upgrades, observability, and the operational discipline that keeps production software resilient.",
    points: [],
  },
];

export default function TechnologyPage() {
  return (
    <ThemeSurface surface="technology">
      {/* 1. Hero */}
      <section className="border-b border-tech-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tech-accent">
            Division 02 // Technology
          </p>
          <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-tech-ink sm:text-6xl md:text-7xl">
            Software that ships.
            <br />
            Engineers who stay.
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-tech-muted">
            Production-grade AI engineering from the systems layer of GPSL.
            We bridge the gap between fragile prototypes and resilient
            enterprise systems &mdash; shipped into our own ventures first,
            then into the operations of partners.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact?topic=technology" className={BTN_PRIMARY}>
              [ Initiate contact ]
            </Link>
            <Link href="#cornerstone" className={BTN_GHOST}>
              [ Explore Cornerstone ]
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Services grid */}
      <section className="border-b border-tech-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tech-muted">
            Services // Index
          </p>
          <div className="mt-10 grid gap-px border border-tech-line bg-tech-line md:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.index} className="bg-tech-bg p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-tech-accent">
                  {service.index} / Services
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-tech-ink">
                  {service.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-tech-muted">
                  {service.tagline}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-tech-muted">
                  {service.body}
                </p>
                {service.points.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 font-mono text-xs uppercase tracking-[0.08em] text-tech-ink"
                      >
                        <span aria-hidden="true" className="text-tech-accent">
                          &gt;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}
```

Note: `BTN_PRIMARY`/`BTN_GHOST` are module-level consts (NOT exported — Next.js's build-time type check rejects unknown exports from page files). Tasks 3–4 add sections to this same file and reuse them directly.

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx jest src/__tests__/technology.test.tsx`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add src/app/technology/page.tsx src/__tests__/technology.test.tsx
git commit -m "feat(technology): Monolith hero and services grid, forward-deployed leads"
```

---

### Task 3: Cornerstone flagship spotlight + projects index

**Files:**
- Modify: `src/app/technology/page.tsx` (append two sections inside `ThemeSurface`, after the services section)
- Test: `src/__tests__/technology.test.tsx` (append tests)

**Interfaces:**
- Consumes: `BTN_GHOST` const from Task 2; `tech-*` tokens.
- Produces: section ids `#cornerstone` (flagship) and `#shipped` (projects index — target of the `/portfolio` 308 redirects in `next.config.mjs`; do not drop this id).

- [ ] **Step 1: Append failing tests**

Add inside the `describe` block of `src/__tests__/technology.test.tsx`:

```tsx
  test("Cornerstone spotlight is present with anchor and real facts", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#cornerstone")).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: /cornerstone/i, level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ai crm for frontline insurance agents/i)
    ).toBeInTheDocument();
    // Fact blocks — real, defensible claims only
    expect(screen.getByText(/live in production/i)).toBeInTheDocument();
    expect(screen.getByText(/rag \+ knowledge graph/i)).toBeInTheDocument();
    expect(screen.getByText(/fna engine/i)).toBeInTheDocument();
    expect(screen.getByText(/claude-powered/i)).toBeInTheDocument();
  });

  test("Cornerstone links out to cornerstone.gold", () => {
    render(<TechnologyPage />);
    const link = screen.getByRole("link", { name: /cornerstone\.gold/i });
    expect(link).toHaveAttribute("href", "https://cornerstone.gold");
  });

  test("projects index keeps #shipped anchor and demotes the small projects", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#shipped")).not.toBeNull();
    expect(screen.getByText(/legacycompass/i)).toBeInTheDocument();
    expect(screen.getByText(/meridian/i)).toBeInTheDocument();
    expect(screen.getByText(/luxusai/i)).toBeInTheDocument();
    // They are rows, not feature cards — no h3 headings for them
    expect(
      screen.queryByRole("heading", { name: /legacycompass/i, level: 3 })
    ).toBeNull();
    // Framed as demos
    expect(screen.getAllByText(/demo/i).length).toBeGreaterThanOrEqual(3);
  });

  test("no fabricated metrics appear", () => {
    const { container } = render(<TechnologyPage />);
    const text = (container.textContent ?? "").toLowerCase();
    expect(text).not.toContain("soc2");
    expect(text).not.toContain("99.9%");
    expect(text).not.toContain("45ms");
    expect(text).not.toContain("sla");
  });
```

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `npx jest src/__tests__/technology.test.tsx`
Expected: FAIL — 4 new tests fail (`#cornerstone` missing); 5 old tests pass.

- [ ] **Step 3: Append the Cornerstone + projects sections**

In `src/app/technology/page.tsx`, insert immediately after the closing `</section>` of the services grid (before `</ThemeSurface>`):

```tsx
      {/* 3. Flagship spotlight — Cornerstone */}
      <section id="cornerstone" className="border-b border-tech-line bg-tech-panel">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tech-accent">
            Flagship // Spotlight
          </p>
          <h2 className="mt-6 font-display text-5xl font-semibold uppercase tracking-[-0.03em] text-tech-ink sm:text-6xl md:text-7xl">
            Cornerstone
          </h2>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-tech-muted">
            AI CRM for frontline insurance agents
          </p>
          <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-tech-muted">
            Cornerstone is the flagship of the division &mdash; built for
            frontline life and P&amp;C insurance agents and run as a product,
            live in production with paying customers. It turns an
            agent&apos;s calls, notes, and documents into structured client
            intelligence, and turns that intelligence into the agent&apos;s
            next best action.
          </p>

          {/* Fact grid — real, defensible facts only. Keep in sync with the
              shipped product; remove anything that stops being true. */}
          <div className="mt-12 grid gap-px border border-tech-line bg-tech-line sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Status", value: "Live in production" },
              { label: "Architecture", value: "RAG + knowledge graph" },
              { label: "Ingest", value: "Voice → structured data" },
              { label: "Planning", value: "FNA engine" },
              { label: "Reasoning", value: "Claude-powered" },
              { label: "Coverage", value: "Life + P&C lines" },
            ].map((fact) => (
              <div key={fact.label} className="bg-tech-bg p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-tech-muted">
                  {fact.label}
                </p>
                <p className="mt-3 font-display text-xl font-semibold tracking-[-0.01em] text-tech-ink">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-tech-muted">
              &gt;&gt; Architecture breakdown
            </p>
            <ul className="mt-6 max-w-[70ch] space-y-4">
              {[
                "Retrieval pipeline over every client document, note, and call — answers grounded in the record, with evidence attached.",
                "Deterministic guardrails between the model and the agent — compliance-aware answer shaping, not raw LLM output.",
                "Full observability on every AI interaction — tracing and product analytics on by default.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-tech-muted"
                >
                  <span aria-hidden="true" className="font-mono text-tech-accent">
                    &gt;
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <a
              href="https://cornerstone.gold"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_GHOST}
            >
              [ Visit cornerstone.gold ]
            </a>
          </div>
        </div>
      </section>

      {/* 4. Projects index — smaller projects, visually subordinate */}
      <section id="shipped" className="border-b border-tech-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tech-muted">
            Index // Smaller projects
          </p>
          <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-tech-muted">
            Exploratory builds and demos from the division. Evidence of range
            &mdash; the flagship is above.
          </p>
          <div className="mt-8 border-t border-tech-line">
            {[
              {
                name: "LegacyCompass",
                domain: "End-of-life planning",
                line: "Family-shared AI planning thread",
                status: "Demo",
              },
              {
                name: "Meridian",
                domain: "Real estate",
                line: "AI buyer intake and qualification",
                status: "Demo",
              },
              {
                name: "LuxusAI",
                domain: "Legal",
                line: "Semantic contract drafting and delivery",
                status: "Demo",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="grid gap-2 border-b border-tech-line py-4 sm:grid-cols-[1fr_1fr_2fr_auto] sm:items-baseline sm:gap-6"
              >
                <p className="font-display text-base font-semibold text-tech-ink">
                  {project.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-tech-muted">
                  {project.domain}
                </p>
                <p className="text-sm text-tech-muted">{project.line}</p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-tech-accent">
                  {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 4: Run tests to verify all pass**

Run: `npx jest src/__tests__/technology.test.tsx`
Expected: PASS (9 tests).

- [ ] **Step 5: Commit**

```bash
git add src/app/technology/page.tsx src/__tests__/technology.test.tsx
git commit -m "feat(technology): Cornerstone flagship spotlight and demoted projects index"
```

---

### Task 4: How we build, terminal CTA, docs, and full gate

**Files:**
- Modify: `src/app/technology/page.tsx` (append final two sections)
- Modify: `CLAUDE.md` (technology surface rows, H1 lock, fonts)
- Test: `src/__tests__/technology.test.tsx` (append tests)

**Interfaces:**
- Consumes: `BTN_PRIMARY` from Task 2; `terminal-cursor` CSS class from Task 1; existing `claude-border-shimmer` / `claude-icon-pulse` CSS classes (already in globals.css).
- Produces: the finished page; updated repo docs.

- [ ] **Step 1: Append failing tests**

Add inside the `describe` block of `src/__tests__/technology.test.tsx`:

```tsx
  test("how-we-build section keeps the Claude Partner Network callout", () => {
    render(<TechnologyPage />);
    expect(screen.getAllByText(/claude partner network/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/the stack/i)).toBeInTheDocument();
  });

  test("terminal CTA renders the prompt and links to technology contact", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/root@gpsl:~\$/)).toBeInTheDocument();
    const links = screen.getAllByRole("link", { name: /initiate contact/i });
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/contact?topic=technology");
    });
    expect(links.length).toBeGreaterThanOrEqual(2); // hero + terminal CTA
  });
```

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `npx jest src/__tests__/technology.test.tsx`
Expected: FAIL — 2 new tests fail; 9 previous pass.

- [ ] **Step 3: Append the final sections**

First add the icon imports at the top of `src/app/technology/page.tsx` (the file currently imports nothing from lucide):

```tsx
import { Layers, Sparkles } from "lucide-react";
```

Then insert after the projects-index `</section>` (before `</ThemeSurface>`):

```tsx
      {/* 5. How we build */}
      <section className="border-b border-tech-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tech-muted">
            Method // How we build
          </p>
          <div className="mt-10 grid gap-px border border-tech-line bg-tech-line md:grid-cols-2">
            <div className="flex items-start gap-4 bg-tech-bg p-8">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-tech-line">
                <Layers size={16} className="text-tech-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-tech-ink">
                  The stack
                </h3>
                <p className="text-sm leading-relaxed text-tech-muted">
                  Next.js on Vercel, Supabase and Postgres for data, and
                  Claude with Claude Code as the engineering loop itself. On
                  top of that: agents and multi-orchestrated systems,
                  workflow automation, knowledge-graph infrastructure, and
                  the web and mobile surfaces that put it in an
                  operator&apos;s hands. Every engineering decision lets a
                  small team ship production work fast enough to be useful
                  and reliable enough to run inside a real operation.
                </p>
              </div>
            </div>

            <div className="claude-border-shimmer flex items-start gap-4 border-l bg-tech-bg p-8">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-tech-line">
                <Sparkles size={16} className="claude-icon-pulse text-[#D97757]" />
              </div>
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-tech-ink">
                  Claude Partner Network
                </h3>
                <p className="text-sm leading-relaxed text-tech-muted">
                  GPSL&apos;s Technology division is an official member of
                  the{" "}
                  <span className="font-semibold text-[#D97757]">
                    Claude Partner Network
                  </span>
                  . The partnership gives us direct access to
                  Anthropic&apos;s models, Claude Code as a core development
                  tool, and early access to new capabilities as they ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Terminal CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="border border-tech-line bg-tech-card p-8 md:p-12">
            <p className="font-mono text-sm text-tech-muted">
              root@gpsl:~$ ./initiate_contact.sh
              <span aria-hidden="true" className="terminal-cursor text-tech-accent">
                _
              </span>
            </p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.02em] text-tech-ink md:text-4xl">
              Tell us what you need built.
            </h2>
            <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-tech-muted">
              The fastest way in is a conversation. Tell us the shape of the
              problem &mdash; an embedded team, a system to ship, a platform
              to keep running &mdash; and we will come back with the
              engineers who fit.
            </p>
            <div className="mt-8">
              <Link href="/contact?topic=technology" className={BTN_PRIMARY}>
                [ Initiate contact ]
              </Link>
            </div>
          </div>
        </div>
      </section>
```

Note on the Claude cell: `claude-border-shimmer` animates `border-left-color`, so the cell gets `border-l` to give it a left border to animate; the hairline-gap grid provides the rest of its outline.

- [ ] **Step 4: Run the page tests**

Run: `npx jest src/__tests__/technology.test.tsx`
Expected: PASS (11 tests).

- [ ] **Step 5: Update CLAUDE.md**

Make these edits in `CLAUDE.md`:

1. In **Surfaces** (line ~50), replace the `technology` bullet with:
   ```
   - `technology` — Monolith aesthetic (hairline 1px grid, 0 radius, no shadows; Geist/Geist Mono type; orange accent). Tokens: `tech.*`.
   ```
2. Delete the sentence fragment claiming the technology surface is "brand-locked dark" in the `bg-white` warning (line ~62) and in **Key Patterns** (line ~115). The technology surface now themes like the operating surface; static zinc/white classes are no longer allowed there either.
3. Replace the technology token table (lines ~75–84) with:
   ```
   | Token | Light | Dark | Purpose |
   |---|---|---|---|
   | `tech.bg` | `#F7F7F7` | `#0A0A0A` | Page background |
   | `tech.panel` | `#EFEFEF` | `#111111` | Section panel |
   | `tech.card` | `#FFFFFF` | `#161616` | Card lift |
   | `tech.ink` | `#111111` | `#EDEDED` | Primary text |
   | `tech.muted` | `#6E6E6E` | `#8A8A8A` | Secondary text |
   | `tech.accent` | `#D93A00` | `#FF4500` | Monolith orange (AA both modes) |
   | `tech.line` | `#E5E5E5` | `#333333` | Hairlines |
   ```
4. In **Typography**, add:
   ```
   - **Technology surface:** Geist (display + body) and Geist Mono (labels/buttons), scoped via `[data-surface="technology"]` overrides in globals.css. Fraunces/Figtree do not apply there.
   ```
5. In **Copy + tone rules**, update the locked H1 list: Technology's H1 is now *"Software that ships. Engineers who stay."* Add a rule: *Cornerstone facts on the technology page must stay true of the shipped product — no invented metrics or certifications.*
6. In the **File Structure** comment for `technology/page.tsx`, change the anchor note to `#cornerstone (flagship) + #shipped (projects index, redirect target)`.

- [ ] **Step 6: Run the full gate**

Run, one at a time:
- `npx jest` — expected: all suites pass
- `npm run lint` — expected: no errors
- `npm run build` — expected: build succeeds

- [ ] **Step 7: Visual verification in both modes**

Start the dev server (browser preview, not raw Bash), open `/technology`, and check: hero renders Geist with orange kicker; services grid shows hairline dividers and no rounded corners; Cornerstone section dominates; theme toggle flips the whole page between light structural grid and dark terminal without broken contrast; other pages (`/`, `/execution`, `/contact`) look unchanged; mobile width stacks the grids. Screenshot light + dark for the user.

- [ ] **Step 8: Commit**

```bash
git add src/app/technology/page.tsx src/__tests__/technology.test.tsx CLAUDE.md
git commit -m "feat(technology): how-we-build grid, terminal CTA, docs for Monolith redesign"
```

- [ ] **Step 9: Hold for user review before push**

Do NOT `git push` — pushing deploys to production. Show the user the screenshots and wait for approval; then push (which auto-deploys) and verify the live page.

---

## Self-review notes

- Spec coverage: hero (T2), services grid with forward-deployed lead (T2), Cornerstone spotlight with real facts + architecture list + cornerstone.gold link (T3), projects index demoted to rows with `#shipped` redirect target preserved (T3), how-we-build + partner callout (T4), terminal CTA (T4), tokens/fonts/toggle (T1), CLAUDE.md truth maintenance (T4), accessibility (reduced-motion cursor T1, focus-visible on buttons, AA-tuned light tokens).
- The word "Demo" appears in status cells; the banned-content test only checks "philosophy"/pricing/posture — no conflict.
- `getAllByRole("link", { name: /initiate contact/i })` is used in T2 with `[0]` and re-asserted fully in T4 once the second button exists.

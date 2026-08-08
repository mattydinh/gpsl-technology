import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Sparkles } from "lucide-react";
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
            frontline life and P&amp;C insurance agents and run as a product
            serving paying customers. It turns an agent&apos;s calls, notes,
            and documents into structured client intelligence, and turns that
            intelligence into the agent&apos;s next best action.
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
    </ThemeSurface>
  );
}

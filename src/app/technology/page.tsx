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

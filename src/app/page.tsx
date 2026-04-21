"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ThemeSurface from "@/components/ThemeSurface";

export default function Home() {
  return (
    <ThemeSurface surface="operating">
      <section className="mx-auto max-w-5xl px-6 py-28 sm:py-36 md:py-44">
        <FadeIn delay={0}>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-op-accent">
            GPSL &mdash; Operating Group
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-op-ink sm:text-6xl md:text-7xl">
            We build, operate,
            <br />
            and scale ventures.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-op-muted">
            GPSL pursues diversified initiatives across finance, trade,
            logistics, and fishing &mdash; with an in-house AI agency that
            builds the technology our ventures need.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-md bg-op-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#9e4e28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-op-accent"
            >
              Explore our ventures
            </Link>
            <Link
              href="/execution"
              className="inline-flex items-center rounded-md border border-op-line px-6 py-3 text-sm font-medium text-op-ink transition-colors hover:bg-op-line/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-op-ink"
            >
              How we execute
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="py-24 border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            One operating group, two engines.
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight">
            How GPSL is organized.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Link
              href="/execution"
              className="block group rounded-lg border border-op-line bg-white p-8 transition-colors hover:border-op-accent"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
                Division 01
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-op-ink mt-3">
                Execution
              </h3>
              <p className="text-op-muted text-base leading-relaxed mt-3">
                Human logistics, deal flow, stakeholder alignment, and
                operational delivery across our ventures in finance, trade,
                logistics, and tribal economic development.
              </p>
              <p className="text-sm text-op-ink mt-6 flex items-center gap-2 group-hover:text-op-accent transition-colors">
                Visit division <span aria-hidden="true">→</span>
              </p>
            </Link>

            <Link
              href="/technology"
              className="block group rounded-lg border border-op-line bg-white p-8 transition-colors hover:border-op-accent"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
                Division 02
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-op-ink mt-3">
                Technology
              </h3>
              <p className="text-op-muted text-base leading-relaxed mt-3">
                In-house AI agency building production software for our ventures
                and external clients. Claude Partner Network firm.
              </p>
              <p className="text-sm text-op-ink mt-6 flex items-center gap-2 group-hover:text-op-accent transition-colors">
                Visit division <span aria-hidden="true">→</span>
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Our operating model
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight max-w-2xl">
            How we turn opportunity into durable venture.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="border-t border-op-line pt-6">
              <p className="text-xs font-mono text-op-accent">01</p>
              <h3 className="font-display text-xl text-op-ink mt-2">Discover</h3>
              <p className="text-sm text-op-muted mt-3 leading-relaxed">
                Originate opportunity through our networks in finance, trade, tribal economic development, and forward-deployed engineering.
              </p>
            </div>

            <div className="border-t border-op-line pt-6">
              <p className="text-xs font-mono text-op-accent">02</p>
              <h3 className="font-display text-xl text-op-ink mt-2">Align</h3>
              <p className="text-sm text-op-muted mt-3 leading-relaxed">
                Structure the deal or engagement so the ownership, governance, and incentives hold up at scale.
              </p>
            </div>

            <div className="border-t border-op-line pt-6">
              <p className="text-xs font-mono text-op-accent">03</p>
              <h3 className="font-display text-xl text-op-ink mt-2">Execute</h3>
              <p className="text-sm text-op-muted mt-3 leading-relaxed">
                Stand the venture up. Ship the software. Close the deal. Run the operation with the people who will own it.
              </p>
            </div>

            <div className="border-t border-op-line pt-6">
              <p className="text-xs font-mono text-op-accent">04</p>
              <h3 className="font-display text-xl text-op-ink mt-2">Sustain</h3>
              <p className="text-sm text-op-muted mt-3 leading-relaxed">
                Operate as a long-horizon holder. Reinvest, compound, and keep the asset close to the people it serves.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}

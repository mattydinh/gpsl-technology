"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ThemeSurface from "@/components/ThemeSurface";

export default function Home() {
  return (
    <ThemeSurface surface="operating">
      {/* 4.1 Hero */}
      <section className="mx-auto max-w-5xl px-6 py-28 sm:py-36 md:py-44">
        <FadeIn delay={0}>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-op-accent">
            GPSL &mdash; an operating discipline
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-op-ink sm:text-6xl md:text-7xl">
            Transformation needs a pathway,
            <br />
            not just ambition.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-op-muted">
            Most organizations understand what they want to change. Few know how
            to make the change actually happen &mdash; which people, in what
            place, at what time, with what support. GPSL is the discipline that
            closes that gap.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/execution"
              className="inline-flex items-center rounded-md bg-op-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-op-accent"
            >
              How we execute
            </Link>
            <Link
              href="/technology"
              className="inline-flex items-center rounded-md border border-op-line px-6 py-3 text-sm font-medium text-op-ink transition-colors hover:bg-op-line/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-op-ink"
            >
              Technology division
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 4.2 Why we exist */}
      <section className="py-24 border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Why GPSL exists
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            Most transformation fails in the operating layer.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base md:text-lg leading-relaxed text-op-muted">
            <p>
              Modernization, AI, reform, reinvention &mdash; the language of
              change is everywhere, and most of it never reaches operation. Not
              for lack of intent. For lack of structure: the right people in the
              right roles, clear coordination across stakeholders, and support
              that holds up when the work gets hard.
            </p>
            <p>
              GPSL was built to close that gap. Our work is not the idea, not
              the software, not the announcement. It is the operating
              discipline underneath &mdash; the human logistics that make
              execution actually happen.
            </p>
          </div>
        </div>
      </section>

      {/* 4.3 Origin */}
      <section className="py-24 border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Origin
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            We were built inside Tribal Economic Development.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base md:text-lg leading-relaxed text-op-muted">
            <p>
              Tribal communities have too often had to operate within
              fragmented and under-supported systems, where the surrounding
              infrastructure makes execution harder than it should be. GPSL was
              built inside that work.
            </p>
            <p>
              We learned that progress rarely fails because of a lack of
              vision. It fails because the operating infrastructure underneath
              was never designed to carry it. GPSL was built from the belief
              that those systems can and should work better &mdash; and that
              better execution is not an ambition. It is a discipline.
            </p>
          </div>
        </div>
      </section>

      {/* 4.4 What the mission taught us */}
      <section className="py-24 border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            What we learned
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            The mission made us better at everything else.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base md:text-lg leading-relaxed text-op-muted">
            <p>
              Solving a real, difficult coordination problem pulled GPSL into
              finance, trade, logistics, housing, food systems, energy, and the
              software underneath all of them. Not by choice &mdash; by
              necessity. Each sector forced us to see how intent, people,
              timing, and infrastructure actually interact.
            </p>
            <p>
              The pattern we now run across every engagement came from that
              work. The mission taught us to see systems whole, design for the
              hand-off, and treat execution as the output of a well-built
              pathway, not the result of willpower.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 Human logistics (framework) */}
      <section className="py-24 border-t border-op-line bg-op-panel">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            The framework
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            Human logistics is what we do.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base md:text-lg leading-relaxed text-op-muted">
            <p>
              Human logistics is the discipline of getting the right people
              into the right place, doing the right work, at the right time,
              with the support structure around them that makes the work hold
              up. It is not a methodology we borrowed. It is the pattern we
              learned from doing it.
            </p>
            <p>
              We apply it across two sides of the company. Execution, where
              people and operations carry the work. Technology, where systems
              and software give the work the leverage to scale. Both answer to
              the same discipline.
            </p>
          </div>
        </div>
      </section>

      {/* 4.6 Two pathways */}
      <section className="py-24 border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Two pathways
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em]">
            How GPSL is organized.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Link
              href="/execution"
              className="block group rounded-lg border border-op-line bg-op-card p-8 transition-colors hover:border-op-accent"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
                Division 01
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-op-ink mt-3 tracking-[-0.01em]">
                Execution &mdash; the human layer.
              </h3>
              <p className="text-op-muted text-base leading-relaxed mt-3">
                Coordination, governance, operating models, and the teams who
                carry the work. Where intent becomes an operation that runs.
              </p>
              <p className="text-sm text-op-ink mt-6 flex items-center gap-2 group-hover:text-op-accent transition-colors">
                Visit division <span aria-hidden="true">→</span>
              </p>
            </Link>

            <Link
              href="/technology"
              className="block group rounded-lg border border-op-line bg-op-card p-8 transition-colors hover:border-op-accent"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
                Division 02
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-op-ink mt-3 tracking-[-0.01em]">
                Technology &mdash; the systems layer.
              </h3>
              <p className="text-op-muted text-base leading-relaxed mt-3">
                Software, automation, and AI-native tools that give execution
                the leverage to scale without losing its discipline.
              </p>
              <p className="text-sm text-op-ink mt-6 flex items-center gap-2 group-hover:text-op-accent transition-colors">
                Visit division <span aria-hidden="true">→</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4.7 Start the conversation */}
      <section className="py-24 border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Work with us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            Come in through the side that fits.
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-op-muted">
            Every engagement starts on a call. Tell us the shape of what you
            are trying to build, move, or make work &mdash; and we will come
            back with the side of GPSL that should handle it.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-op-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-op-accent"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}

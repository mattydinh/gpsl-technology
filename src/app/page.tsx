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
    </ThemeSurface>
  );
}

import Link from "next/link";
import ThemeSurface from "@/components/ThemeSurface";

export default function TechnologyPage() {
  return (
    <ThemeSurface surface="technology">
      <div className="bg-zinc-950 text-zinc-50">
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">
            Division 02 — Technology
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-zinc-50 mt-6 leading-[1.05] tracking-[-0.02em] max-w-4xl">
            Agentic software, shipped.
          </h1>
          <p className="text-lg text-zinc-400 mt-6 max-w-2xl leading-relaxed">
            The Technology division is GPSL&apos;s in-house AI agency. We ship production
            software — CRMs, agentic platforms, financial intelligence tools — for our
            own ventures and for external clients. Built by a small team on Claude-grade
            tooling, deployed into real operations.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#flagships"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-cyan-400 transition-colors"
            >
              See what we ship <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact?topic=technology"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-50 hover:border-cyan-500 transition-colors"
            >
              Engage the team
            </Link>
          </div>
        </section>
      </div>
    </ThemeSurface>
  );
}

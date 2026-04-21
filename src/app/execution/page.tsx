import Link from "next/link";
import ThemeSurface from "@/components/ThemeSurface";

export default function ExecutionPage() {
  return (
    <ThemeSurface surface="operating">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
          Division 01 — Execution
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-op-ink mt-6 leading-[1.05] tracking-[-0.02em] max-w-4xl">
          The operating arm of GPSL.
        </h1>
        <p className="text-lg text-op-muted mt-6 max-w-2xl leading-relaxed">
          Execution is the human side of GPSL: deal origination, structuring,
          stakeholder alignment, and the operational work of standing ventures
          up and keeping them running. Tribal finance, trade, logistics,
          fishing, and housing — we put people and process around the asset so
          it compounds.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-op-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            See what we do <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact?topic=execution"
            className="inline-flex items-center gap-2 rounded-md border border-op-line px-5 py-3 text-sm font-medium text-op-ink hover:border-op-accent transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </ThemeSurface>
  );
}

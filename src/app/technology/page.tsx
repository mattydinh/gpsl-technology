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

        <section id="flagships" className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Flagships</p>
            <h2 className="font-display text-3xl md:text-4xl text-zinc-50 mt-4 leading-tight max-w-3xl">
              Three products in the water.
            </h2>
            <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
              We run our own AI agency. These are the products we have shipped into production — for GPSL ventures and for external clients.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* LegacyCompass */}
              <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-cyan-500">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">CRM</p>
                <h3 className="font-display text-2xl text-zinc-50 mt-3">LegacyCompass</h3>
                <p className="font-display text-base italic text-zinc-300 mt-2">The CRM we wish we had, so we built it.</p>
                <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                  Tribally owned CRM purpose-built for operating groups. Native agentic workflows, deal-flow pipelines that understand deal structure, and data ownership that stays with the operator — not the SaaS vendor.
                </p>
                <ul className="text-sm text-zinc-400 mt-4 space-y-2 list-disc pl-5">
                  <li>Agent-native workflows (not bolted on)</li>
                  <li>Built on Claude-grade reasoning</li>
                  <li>Deployed inside GPSL ventures first</li>
                </ul>
                <Link href="/portfolio#tech" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                  View in portfolio <span aria-hidden>→</span>
                </Link>
              </div>

              {/* Meridian AI */}
              <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-cyan-500">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Financial Intelligence</p>
                <h3 className="font-display text-2xl text-zinc-50 mt-3">Meridian AI</h3>
                <p className="font-display text-base italic text-zinc-300 mt-2">An analyst that reads every 10-K before you get out of bed.</p>
                <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                  Agentic financial analyst for investment and corporate development teams. Pulls filings, earnings, and market signal, then writes the memo in the voice your team already uses. Built to live inside the analyst&apos;s workflow, not replace it.
                </p>
                <ul className="text-sm text-zinc-400 mt-4 space-y-2 list-disc pl-5">
                  <li>Filings + earnings + market data ingestion</li>
                  <li>Memo generation in your team&apos;s house style</li>
                  <li>Designed as analyst co-pilot, not chatbot</li>
                </ul>
                <Link href="/portfolio#tech" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                  View in portfolio <span aria-hidden>→</span>
                </Link>
              </div>

              {/* LuxusAI */}
              <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-cyan-500">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Luxury Commerce</p>
                <h3 className="font-display text-2xl text-zinc-50 mt-3">LuxusAI</h3>
                <p className="font-display text-base italic text-zinc-300 mt-2">High-touch sales at machine scale, without losing the clienteling craft.</p>
                <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                  Multi-agent platform for luxury commerce operations. Clienteling, post-purchase relationship management, and VIP concierge flows — automated without losing the hand-sold feel luxury brands depend on.
                </p>
                <ul className="text-sm text-zinc-400 mt-4 space-y-2 list-disc pl-5">
                  <li>Clienteling workflows and VIP lifecycle</li>
                  <li>Multi-agent orchestration for sales + service</li>
                  <li>White-glove replication, not chatbot shortcuts</li>
                </ul>
                <Link href="/portfolio#tech" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                  View in portfolio <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeSurface>
  );
}

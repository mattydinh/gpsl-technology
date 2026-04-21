import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Layers, Sparkles } from "lucide-react";
import ThemeSurface from "@/components/ThemeSurface";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Agentic software, shipped into real operations. GPSL's in-house AI agency.",
};

export default function TechnologyPage() {
  return (
    <ThemeSurface surface="technology">
      <div className="bg-zinc-950 text-zinc-50">
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">
            Division 02 — Technology
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-zinc-50 mt-6 leading-[1.05] tracking-[-0.02em] max-w-4xl">
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
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-50 mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
              Three products in the water.
            </h2>
            <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
              We run our own AI agency. These are the products we have shipped into production — for GPSL ventures and for external clients.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* LegacyCompass */}
              <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-cyan-500">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">CRM</p>
                <h3 className="font-display text-2xl font-semibold text-zinc-50 mt-3 tracking-[-0.01em]">LegacyCompass</h3>
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
                <h3 className="font-display text-2xl font-semibold text-zinc-50 mt-3 tracking-[-0.01em]">Meridian AI</h3>
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
                <h3 className="font-display text-2xl font-semibold text-zinc-50 mt-3 tracking-[-0.01em]">LuxusAI</h3>
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

        <section id="philosophy" className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-50 mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
              Technology applied with intent.
            </h2>

            <div className="mt-12 flex flex-col gap-8">
              <div className="flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyan-500/10 mt-0.5">
                  <Cpu size={16} className="text-cyan-400" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Engineering philosophy
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    GPSL&apos;s Technology division builds modern, scalable business applications
                    powered by leading technologies and artificial intelligence. We
                    operate with the belief that technology — when thoughtfully
                    applied — can improve any business by increasing efficiency,
                    unlocking new insights, and creating entirely new capabilities.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Our team brings deep expertise across data science, machine
                    learning, deep learning, computer vision, full-stack software
                    engineering, and research &amp; development. This cross-functional
                    versatility allows us to move seamlessly from concept to
                    production, combining rigorous technical depth with execution
                    speed.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    We stay at the forefront of emerging AI advancements and
                    continuously evaluate new tools, models, and infrastructure to
                    ensure we are applying the most effective and practical
                    solutions. Our focus is not innovation for its own sake — it is
                    delivering measurable value to our partners through intelligent
                    systems that are built to scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Stack</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-50 mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
              Built on the right tools.
            </h2>

            <div className="mt-12 flex flex-col gap-8">
              <div className="flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyan-500/10 mt-0.5">
                  <Layers size={16} className="text-cyan-400" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Our stack
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Our core stack centers on Next.js, Supabase, Git, Cursor, and
                    Claude Code, enabling us to build modern, production-grade
                    applications with speed and precision. This architecture allows
                    us to deliver scalable, secure systems while maintaining rapid
                    iteration cycles through AI-assisted development workflows.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    On the AI side, we leverage fastai and other leading machine
                    learning frameworks to develop deep learning, natural language
                    processing (NLP), and computer vision (CV) solutions as needed.
                    This gives us the flexibility to move from applied AI
                    integrations to fully custom model development, depending on the
                    complexity of the problem.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    By combining strong engineering foundations with advanced AI
                    capabilities, we accelerate development without compromising
                    reliability, performance, or long-term maintainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="claude-partner" className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Partnership</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-50 mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
              Claude Partner Network.
            </h2>

            <div className="mt-12 flex flex-col gap-8">
              <div className="claude-border-shimmer flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#D97757]/10 mt-0.5">
                  <Sparkles size={16} className="claude-icon-pulse text-[#D97757]" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Claude Partner Network
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    GPSL&apos;s Technology division is an official member of the{" "}
                    <span className="font-semibold text-[#D97757]">
                      Claude Partner Network
                    </span>
                    . This partnership gives us direct access to Anthropic&apos;s
                    Claude models, Claude Code as a core development tool, and
                    early access to new capabilities as they ship.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Claude is deeply embedded in how we build — from architecture
                    and code generation to testing and deployment. As a partner,
                    we work closely with Anthropic to push the boundaries of
                    AI-assisted software development, ensuring our clients
                    benefit from the most advanced AI tooling available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">How we work with clients</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-50 mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
              Forward-deployed engineering, not billable hours.
            </h2>
            <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed">
              We work the way the strongest AI-native teams work: small, senior, and deployed inside your problem. No account managers, no layered delivery orgs — just engineers who own the outcome with you.
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="font-display text-4xl font-semibold text-cyan-400">01</p>
                <h3 className="font-display text-xl font-semibold text-zinc-50 mt-3 tracking-[-0.01em]">Embedded engineers</h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">Our engineers sit inside your team, not across a ticket queue. They learn your codebase, your data, and your culture — and ship into it.</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="font-display text-4xl font-semibold text-cyan-400">02</p>
                <h3 className="font-display text-xl font-semibold text-zinc-50 mt-3 tracking-[-0.01em]">Claude-grade agents</h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">Every engagement uses Claude as the reasoning layer. We bring opinionated tooling and patterns we have built across GPSL ventures, so you skip the first 6 months of experimentation.</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="font-display text-4xl font-semibold text-cyan-400">03</p>
                <h3 className="font-display text-xl font-semibold text-zinc-50 mt-3 tracking-[-0.01em]">Own the outcome</h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">We take commercial ownership of the work. Not &apos;consulted on&apos; — delivered. When the agent goes live, it is because our engineer pressed the button with yours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="rounded-lg border border-cyan-500/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Engage the Technology division</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-50 mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
                Tell us what you need built.
              </h2>
              <p className="mt-6 text-base leading-relaxed max-w-2xl text-zinc-400">
                The fastest way in is a conversation. Tell us the shape of the problem — agents, a CRM, a platform — and we will come back with who from our team would be right for the work.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact?topic=technology" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-cyan-400 transition-colors">
                  Start the conversation <span aria-hidden>→</span>
                </Link>
                <Link href="/portfolio#tech" className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-50 hover:border-cyan-500 transition-colors">
                  See what we&apos;ve shipped
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeSurface>
  );
}

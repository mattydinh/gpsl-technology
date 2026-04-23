import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Sparkles } from "lucide-react";
import ThemeSurface from "@/components/ThemeSurface";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The systems layer of GPSL. Software, automation, and agentic tools built so execution can scale without losing its discipline.",
};

export default function TechnologyPage() {
  return (
    <ThemeSurface surface="technology">
      {/* 6.1 Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
          Division 02 — Technology
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-tech-ink mt-6 leading-[1.05] tracking-[-0.02em] max-w-4xl">
          The systems layer of GPSL.
        </h1>
        <p className="text-lg text-tech-muted mt-6 max-w-2xl leading-relaxed">
          Technology is the leverage side of the company. Software, automation,
          and agentic tools built so execution can scale without losing its
          discipline. We ship into our own ventures first, then into the
          operations of partners who need them.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#shipped"
            className="inline-flex items-center gap-2 rounded-md bg-tech-accent px-5 py-3 text-sm font-medium text-tech-bg hover:opacity-90 transition-opacity"
          >
            See what we ship <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact?topic=technology"
            className="inline-flex items-center gap-2 rounded-md border border-tech-line px-5 py-3 text-sm font-medium text-tech-ink hover:border-tech-accent transition-colors"
          >
            Engage the team
          </Link>
        </div>
      </section>

      {/* 6.2 How Technology supports the mission */}
      <section className="border-t border-tech-line bg-tech-panel">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
            Why Technology exists inside GPSL
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tech-ink mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
            Built to scale execution, not replace it.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base md:text-lg leading-relaxed text-tech-muted">
            <p>
              Most of what organizations call &ldquo;AI transformation&rdquo;
              is a tooling problem dressed up as a strategy problem. Software
              is bought, rolled out, and asked to replace operating discipline
              that does not yet exist. It never does.
            </p>
            <p>
              At the same time, AI is genuinely changing how work gets done.
              The discipline is separating the uses that hold up in production
              from the ones that collapse under real workload. Sometimes the
              answer is an agent platform running across a whole operation.
              More often it is a precise workflow automation that removes a
              recurring hour of manual coordination and pays for itself in a
              month. Both are legitimate technology work. We build for
              whichever one the problem actually needs &mdash; at the speed,
              cost, and reliability that make the deployment worth having.
            </p>
            <p>
              Technology inside GPSL is built the opposite way from most AI
              platforms &mdash; starting from the shape of the operation, not
              the shape of the model. Depending on what the work needs, we
              ship custom AI solutions, agents, multi-orchestrated systems,
              mobile applications, or augmented layers on top of the tools a
              team already uses. Each one is engineered as a real answer to a
              real operating problem &mdash; not a generic platform an
              operation has to bend itself around.
            </p>
            <p>
              This is why Technology and Execution sit under one company. The
              systems we ship are shaped by the operations they have to
              support &mdash; built with the operating team, for the way the
              work actually runs. The outcome usually has the same shape:
              clearer coordination, better timing, less handoff friction, more
              of the work visible to the people who need to see it.
            </p>
          </div>
        </div>
      </section>

      {/* 6.3 What we ship */}
      <section id="shipped" className="border-t border-tech-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
            What we ship
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tech-ink mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
            Production software, shipped into real operations.
          </h2>
          <p className="text-tech-muted mt-4 max-w-2xl leading-relaxed">
            Four products and engagements built by the Technology division.
            Three of our own, one a representative pattern of how we work with
            clients. Each runs in production today.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* LegacyCompass */}
            <div className="flex flex-col rounded-lg border border-tech-line bg-tech-card p-6 transition-colors hover:border-tech-accent">
              <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
                CRM
              </p>
              <h3 className="font-display text-2xl font-semibold text-tech-ink mt-3 tracking-[-0.01em]">
                LegacyCompass
              </h3>
              <p className="font-display text-base italic font-medium text-tech-ink/80 mt-2">
                A CRM that understands how the work actually moves.
              </p>
              <p className="text-sm text-tech-muted mt-4 leading-relaxed">
                Tribally owned CRM built for operating groups. Deal flow,
                accounts, and agent-native workflows shaped around how
                operators actually run relationships &mdash; not around the
                data model a legacy SaaS vendor wants. Deployed inside GPSL
                ventures first.
              </p>
              <ul className="text-sm text-tech-muted mt-4 space-y-2 list-disc pl-5">
                <li>Agent-native workflows, not bolted on</li>
                <li>Claude-grade reasoning in the core loop</li>
                <li>Data and governance stay with the operator</li>
              </ul>
            </div>

            {/* Meridian AI */}
            <div className="flex flex-col rounded-lg border border-tech-line bg-tech-card p-6 transition-colors hover:border-tech-accent">
              <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
                Financial Intelligence
              </p>
              <h3 className="font-display text-2xl font-semibold text-tech-ink mt-3 tracking-[-0.01em]">
                Meridian AI
              </h3>
              <p className="font-display text-base italic font-medium text-tech-ink/80 mt-2">
                An analyst that reads every 10-K before you get out of bed.
              </p>
              <p className="text-sm text-tech-muted mt-4 leading-relaxed">
                Agentic analyst for investment and corporate development
                teams. Reads filings and market signal, writes the memo in the
                team&apos;s own voice. Designed to sit inside the analyst&apos;s
                workflow, not around it.
              </p>
              <ul className="text-sm text-tech-muted mt-4 space-y-2 list-disc pl-5">
                <li>Filings, earnings, and market data ingestion</li>
                <li>Memo generation in your team&apos;s house style</li>
                <li>Analyst co-pilot, not chatbot</li>
              </ul>
            </div>

            {/* LuxusAI */}
            <div className="flex flex-col rounded-lg border border-tech-line bg-tech-card p-6 transition-colors hover:border-tech-accent">
              <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
                Luxury Commerce
              </p>
              <h3 className="font-display text-2xl font-semibold text-tech-ink mt-3 tracking-[-0.01em]">
                LuxusAI
              </h3>
              <p className="font-display text-base italic font-medium text-tech-ink/80 mt-2">
                High-touch sales at scale, without losing the clienteling craft.
              </p>
              <p className="text-sm text-tech-muted mt-4 leading-relaxed">
                Multi-agent platform for high-touch sales, clienteling, and
                post-purchase relationships. Preserves the hand-sold feel
                luxury operations depend on while automating the repeatable
                work around it.
              </p>
              <ul className="text-sm text-tech-muted mt-4 space-y-2 list-disc pl-5">
                <li>Clienteling workflows and VIP lifecycle</li>
                <li>Multi-agent orchestration across sales and service</li>
                <li>White-glove replication, not chatbot shortcuts</li>
              </ul>
            </div>

            {/* Forward-deployed */}
            <div className="flex flex-col rounded-lg border border-tech-line bg-tech-card p-6 transition-colors hover:border-tech-accent">
              <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
                Client Work
              </p>
              <h3 className="font-display text-2xl font-semibold text-tech-ink mt-3 tracking-[-0.01em]">
                Forward-deployed engagements
              </h3>
              <p className="font-display text-base italic font-medium text-tech-ink/80 mt-2">
                Engineers inside your team, shipping with ownership of the outcome.
              </p>
              <p className="text-sm text-tech-muted mt-4 leading-relaxed">
                Custom systems shipped alongside a partner&apos;s internal
                team. We embed, ship, and take commercial ownership of the
                outcome with them &mdash; agents, orchestration, automations,
                or the platform underneath all of it.
              </p>
              <ul className="text-sm text-tech-muted mt-4 space-y-2 list-disc pl-5">
                <li>Embedded senior engineers, not ticket queues</li>
                <li>Patterns proven inside GPSL ventures first</li>
                <li>Commercial ownership of the delivered system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 How we build (stack + Claude Partner merged) */}
      <section className="border-t border-tech-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
            How we build
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tech-ink mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
            Claude-grade tools, shipped at operator speed.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 rounded-lg border border-tech-line bg-tech-card p-6">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-tech-accent/10 mt-0.5">
                <Layers size={16} className="text-tech-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-tech-muted">
                  The stack
                </h3>
                <p className="text-tech-muted leading-relaxed">
                  Our platform layer is Next.js on Vercel, Supabase for data
                  and auth, and Claude (with Claude Code) for the engineering
                  loop itself. On top of that, the division is versed in the
                  range the work actually demands &mdash; AI agents and
                  multi-orchestrated systems, workflow automation,
                  knowledge-graph infrastructure, NLP and computer-vision
                  pipelines, and the mobile and web apps that put the whole
                  thing in an operator&apos;s hands. The point is not the stack
                  &mdash; it is that every engineering decision is made to let
                  a small team ship production work fast enough to be useful
                  and reliable enough to run inside a real operation.
                </p>
              </div>
            </div>

            <div className="claude-border-shimmer flex items-start gap-4 rounded-lg border border-tech-line bg-tech-card p-6">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#D97757]/10 mt-0.5">
                <Sparkles size={16} className="claude-icon-pulse text-[#D97757]" />
              </div>
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-tech-muted">
                  Claude Partner Network
                </h3>
                <p className="text-tech-muted leading-relaxed">
                  GPSL&apos;s Technology division is an official member of the{" "}
                  <span className="font-semibold text-[#D97757]">
                    Claude Partner Network
                  </span>
                  . The partnership gives us direct access to Anthropic&apos;s
                  models, Claude Code as a core development tool, and early
                  access to new capabilities as they ship &mdash; which keeps
                  us close to the work Anthropic is doing on agent
                  reliability, tool use, and long-horizon reasoning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 How we work with clients */}
      <section className="border-t border-tech-line bg-tech-panel">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
            How we work with clients
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tech-ink mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
            Forward-deployed engineering, not billable hours.
          </h2>
          <p className="text-tech-muted mt-6 max-w-2xl leading-relaxed">
            We work the way the strongest AI-native teams work: small, senior,
            and deployed inside the problem. No account managers, no layered
            delivery orgs &mdash; just engineers who own the outcome with you.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-tech-line bg-tech-card p-6">
              <p className="font-display text-4xl font-semibold text-tech-accent">
                01
              </p>
              <h3 className="font-display text-xl font-semibold text-tech-ink mt-3 tracking-[-0.01em]">
                Embedded engineers
              </h3>
              <p className="text-sm text-tech-muted mt-3 leading-relaxed">
                Our engineers sit inside your team, not across a ticket queue.
                They learn your codebase, your data, and your culture &mdash;
                and ship into it.
              </p>
            </div>
            <div className="rounded-lg border border-tech-line bg-tech-card p-6">
              <p className="font-display text-4xl font-semibold text-tech-accent">
                02
              </p>
              <h3 className="font-display text-xl font-semibold text-tech-ink mt-3 tracking-[-0.01em]">
                Claude-grade agents
              </h3>
              <p className="text-sm text-tech-muted mt-3 leading-relaxed">
                Every engagement uses Claude as the reasoning layer. We bring
                opinionated tooling and patterns we have built across GPSL
                ventures, so you skip the first six months of experimentation.
              </p>
            </div>
            <div className="rounded-lg border border-tech-line bg-tech-card p-6">
              <p className="font-display text-4xl font-semibold text-tech-accent">
                03
              </p>
              <h3 className="font-display text-xl font-semibold text-tech-ink mt-3 tracking-[-0.01em]">
                Own the outcome
              </h3>
              <p className="text-sm text-tech-muted mt-3 leading-relaxed">
                We take commercial ownership of the work. Not &lsquo;consulted
                on&rsquo; &mdash; delivered. When the agent goes live, it is
                because our engineer pressed the button with yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 CTA band */}
      <section className="border-t border-tech-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="rounded-lg border border-tech-accent/30 bg-gradient-to-br from-tech-panel to-tech-bg p-10 md:p-16">
            <p className="text-xs uppercase tracking-[0.2em] text-tech-accent font-mono">
              Engage the Technology division
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-tech-ink mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
              Tell us what you need built.
            </h2>
            <p className="mt-6 text-base leading-relaxed max-w-2xl text-tech-muted">
              The fastest way in is a conversation. Tell us the shape of the
              problem &mdash; agents, a CRM, a platform &mdash; and we will
              come back with who on our team is right for the work.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact?topic=technology"
                className="inline-flex items-center gap-2 rounded-md bg-tech-accent px-5 py-3 text-sm font-medium text-tech-bg hover:opacity-90 transition-opacity"
              >
                Start the conversation <span aria-hidden>→</span>
              </Link>
              <Link
                href="#shipped"
                className="inline-flex items-center gap-2 rounded-md border border-tech-line px-5 py-3 text-sm font-medium text-tech-ink hover:border-tech-accent transition-colors"
              >
                See what we&apos;ve shipped
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}

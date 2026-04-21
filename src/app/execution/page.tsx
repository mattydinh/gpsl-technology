import Link from "next/link";
import ThemeSurface from "@/components/ThemeSurface";

const SECTORS = [
  {
    name: "Tribal finance",
    body: "Tribal lending, credit, and capital allocation rooted in sovereignty and long-horizon capital.",
  },
  {
    name: "Trade & logistics",
    body: "Cross-border commerce and distribution powered by tribal jurisdiction and operator-grade logistics.",
  },
  {
    name: "Food & processing",
    body: "Vertically integrated fisheries and processing, close to the communities we operate in.",
  },
  {
    name: "Housing & land",
    body: "Residential and commercial real estate for tribal economic development and long-horizon holding.",
  },
  {
    name: "Energy & infrastructure",
    body: "Selective positions in energy transition and regional infrastructure where tribal footprint is an advantage.",
  },
  {
    name: "Forward-deployed operations",
    body: "Embedded operating teams for other companies, institutions, or tribes that need GPSL operator capacity.",
  },
];

const SERVICES = [
  {
    label: "ORIGINATION",
    title: "Deal & opportunity origination",
    body: "We source opportunities in tribal finance, trade, and adjacent industries — then do the early legwork to turn them into something you can act on.",
    deliverables: [
      "A shortlist of qualified opportunities in your sector",
      "Background diligence on counterparties, sponsors, or assets",
      "Structuring ideas for how we'd approach the deal together",
      "Introductions into tribal and institutional networks",
    ],
  },
  {
    label: "STRUCTURING",
    title: "Deal structuring & governance",
    body: "Once there is a live deal, we work the structure until it holds up — cap table, governance, legal jurisdiction, and alignment with tribal or institutional stakeholders.",
    deliverables: [
      "Cap table and ownership design",
      "Governance model and decision rights",
      "Legal structuring under tribal jurisdiction where relevant",
      "Stakeholder alignment before close",
    ],
  },
  {
    label: "OPERATING",
    title: "Stand-up & operate",
    body: "We hire the operator, set up the first 12–24 months of operations, and stay inside the business until it runs without us.",
    deliverables: [
      "Operator hiring and core team build-out",
      "Day-one operating plan with milestones and KPIs",
      "Deployment of the Technology division's agentic software where it helps",
      "Hands-on involvement through early operating cycles",
    ],
  },
  {
    label: "LONG-HORIZON HOLDING",
    title: "Hold, reinvest, compound",
    body: "Some ventures we keep. For those, we act as a long-horizon holder — reinvesting, rebuilding governance as the asset matures, and keeping the operation close to the people it serves.",
    deliverables: [
      "Quarterly operating reviews on long-horizon KPIs",
      "Reinvestment and capital allocation decisions",
      "Succession planning toward tribal or operator ownership",
      "Stewardship across multi-decade horizons",
    ],
  },
];

const STEPS = [
  {
    number: "01",
    name: "Discover",
    description:
      "Originate opportunity where other operators cannot — tribal finance, government-adjacent deals, long-tail industry plays, and the intersection of AI and incumbent sectors.",
    activities: [
      "Tribal finance and lending origination",
      "Trade and logistics deal sourcing",
      "Adjacent industries: food processing, housing, energy",
    ],
  },
  {
    number: "02",
    name: "Align",
    description:
      "Structure the engagement so the governance, ownership, and incentives hold up at scale. This is where we decide whether to acquire, partner, build, or walk.",
    activities: [
      "Cap table and governance design",
      "Legal structuring under tribal jurisdiction where it is an advantage",
      "Stakeholder alignment — investors, tribal council, clients, partners",
    ],
  },
  {
    number: "03",
    name: "Execute",
    description:
      "Stand the venture up. Close the deal. Hire the operator. Ship the software. We are hands-on until the operation is durable.",
    activities: [
      "Hiring the operator and core team",
      "Rolling out the Technology division's software inside the venture",
      "Running the first 6–24 months of operations",
    ],
  },
  {
    number: "04",
    name: "Sustain",
    description:
      "Operate as a long-horizon holder. The asset is supposed to compound — so we reinvest, rebuild, and keep the operation close to the people it serves.",
    activities: [
      "Quarterly operating reviews, long-horizon KPIs",
      "Reinvestment into the venture and the community",
      "Succession and ownership transition to tribal / operator hands where appropriate",
    ],
  },
];

export default function ExecutionPage() {
  return (
    <ThemeSurface surface="operating">
      {/* Hero */}
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

      {/* Positioning */}
      <section className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
                What Execution is
              </p>
            </div>
            <div className="space-y-6">
              <p className="font-display text-2xl text-op-ink leading-snug">
                Execution is where opportunity becomes a business. Where the
                deal gets closed, the team gets hired, the operation actually
                runs.
              </p>
              <p className="text-op-muted text-base leading-relaxed">
                We are not a consultancy. We are operators with our own balance
                sheet and a long horizon. When we engage, it is because we plan
                to be standing next to you, inside the work, for years.
              </p>
              <p className="text-op-muted text-base leading-relaxed">
                Our edge comes from tribal sovereignty, deep networks in finance
                and trade, and a Technology division that builds whatever agentic
                software the operation needs — without us having to go shop for
                it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating model detailed */}
      <section className="border-t border-op-line bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Operating model
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight max-w-2xl">
            How we actually run it.
          </h2>
          <div className="mt-12 divide-y divide-op-line border-t border-op-line">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="py-10 grid md:grid-cols-[auto_1fr_2fr] gap-8 items-start"
              >
                <p className="font-display text-4xl text-op-accent">
                  {step.number}
                </p>
                <h3 className="font-display text-xl text-op-ink">{step.name}</h3>
                <div>
                  <p className="text-op-muted text-base leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="text-sm text-op-muted mt-4 space-y-2 list-disc pl-5">
                    {step.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            How we engage
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight max-w-2xl">
            Four ways Execution works with you.
          </h2>
          <p className="text-op-muted mt-4 max-w-2xl leading-relaxed">
            Every engagement is scoped on a conversation. We do not list fixed
            packages here — the shape of the work, the horizon, and the
            governance all change what a durable partnership looks like.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {SERVICES.map((service) => (
              <div
                key={service.label}
                className="bg-white rounded-lg border border-op-line p-8 flex flex-col"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
                  {service.label}
                </p>
                <h3 className="font-display text-2xl text-op-ink mt-3">
                  {service.title}
                </h3>
                <p className="text-op-muted text-base mt-3 leading-relaxed">
                  {service.body}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono mt-6">
                  What you get
                </p>
                <ul className="text-sm text-op-muted mt-3 space-y-2 list-disc pl-5">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact?topic=execution"
              className="inline-flex items-center gap-2 text-sm font-medium text-op-ink hover:text-op-accent transition-colors"
            >
              Talk to us about an engagement <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Sectors */}
      <section className="border-t border-op-line bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Where we operate
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight max-w-2xl">
            Sectors we are active in.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {SECTORS.map((sector) => (
              <div key={sector.name} className="border-t border-op-line pt-6">
                <h3 className="font-display text-xl text-op-ink">{sector.name}</h3>
                <p className="text-sm text-op-muted mt-3 leading-relaxed">{sector.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="rounded-lg bg-op-ink text-op-bg p-10 md:p-16">
            <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
              Work with Execution
            </p>
            <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight max-w-3xl">
              Tell us about the deal, the venture, or the operation.
            </h2>
            <p className="mt-6 text-base leading-relaxed max-w-2xl text-op-bg/80">
              Every engagement starts on a call. We would rather talk through
              what you need than pitch you out of a brochure.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact?topic=execution"
                className="inline-flex items-center gap-2 rounded-md bg-op-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              >
                Start the conversation <span aria-hidden>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-md border border-op-bg/30 px-5 py-3 text-sm font-medium text-op-bg hover:border-op-accent transition-colors"
              >
                See our ventures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}

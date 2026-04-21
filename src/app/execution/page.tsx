import Link from "next/link";
import ThemeSurface from "@/components/ThemeSurface";

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
    </ThemeSurface>
  );
}

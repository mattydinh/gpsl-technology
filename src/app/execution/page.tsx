import type { Metadata } from "next";
import Link from "next/link";
import ThemeSurface from "@/components/ThemeSurface";

export const metadata: Metadata = {
  title: "Execution",
  description:
    "The human layer of GPSL. Coordination, governance, operating models, and the teams that turn intent into work that actually runs.",
};

const STEPS = [
  {
    number: "01",
    name: "Discover",
    description:
      "Originate opportunity through our networks in finance, trade, tribal economic development, and forward-deployed engineering. Understand the shape of the work before committing to any of it.",
    activities: [
      "Tribal finance and lending origination",
      "Trade and logistics deal sourcing",
      "Adjacent sectors: food processing, housing, energy, infrastructure",
    ],
  },
  {
    number: "02",
    name: "Align",
    description:
      "Structure the engagement so the governance, ownership, and incentives hold up at scale. This is where we decide whether to acquire, partner, build, or walk.",
    activities: [
      "Cap table and governance design",
      "Legal structuring under tribal jurisdiction where it fits the work",
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
      "Operate as a long-horizon holder. The asset is meant to compound — so we reinvest, rebuild governance as it matures, and keep the operation close to the people it serves.",
    activities: [
      "Quarterly operating reviews on long-horizon KPIs",
      "Reinvestment into the venture and the community",
      "Succession and ownership transition to tribal or operator hands where appropriate",
    ],
  },
];

const VENTURES = [
  {
    kicker: "Finance · In formation",
    name: "Tribal Bank",
    body: "Federally chartered tribal bank focused on small business credit, self-determination capital, and reinvestment into tribal communities.",
  },
  {
    kicker: "Trade & Logistics · Operating",
    name: "Tribal Trade",
    body: "Cross-border commerce and logistics structured under tribal jurisdiction, moving goods on terms that are often not available to non-sovereign operators.",
  },
  {
    kicker: "Food & Processing · Operating",
    name: "Fishing & Processing",
    body: "Vertically integrated fishery and processing operation anchored in coastal tribal communities. Harvest through distribution, community ownership built into the structure.",
  },
];

const TEAM = [
  {
    name: "Bernie Chan",
    role: "Operations",
    label: "Forward Deployed Engineer & Strategist",
    bio: "Owns deal flow, client delivery, and the financial architecture behind every engagement. Turns proof-of-concept work into durable businesses — modeling unit economics, structuring engagements, and translating novel capability into measurable client outcomes.",
  },
  {
    name: "Kentory Thomas",
    role: "Operations",
    label: "AI Platform & Transformation",
    bio: "Runs AI product and platform delivery across healthcare technology integration and enterprise transformation work. Pairs a deep finance background with operator rigor, keeping the agency and the systems shipped alongside partners scaling together.",
  },
  {
    name: "Matty Dinh",
    role: "Engineering",
    label: "Chief Scientist",
    bio: "Architects end-to-end data and AI systems across machine learning, NLP, analytics engineering, and enterprise infrastructure. Connective tissue between research-grade capability and production-grade execution.",
  },
  {
    name: "Cliff Wu",
    role: "Engineering",
    label: "AI Engineer",
    bio: "Founding an AI startup while partnering with faculty at a California university medical school to build clinical automations. Decorated competitor across AI case competitions and Kaggle, with deep expertise in scaled AI architecture.",
  },
  {
    name: "Nate Sou",
    role: "Engineering",
    label: "Full-Stack Software",
    bio: "Ships across the full application stack — backend, frontend, and the AI agent architecture in between. Shapes how end-to-end products come together, with equal fluency at each layer.",
  },
  {
    name: "Martin Leung",
    role: "Engineering",
    label: "Full-Stack Software",
    bio: "Owns the backend, authentication, and high-reliability plumbing that keeps production services running. Deep expertise in identity systems and transaction infrastructure.",
  },
];

const SERVICES = [
  {
    label: "ORIGINATION",
    title: "Source what's worth doing.",
    body: "Source opportunities in finance, trade, tribal economic development, and adjacent sectors — food processing, housing, energy, infrastructure. Turn them into something you can act on.",
  },
  {
    label: "STRUCTURING",
    title: "Work the structure until it holds.",
    body: "Cap table, governance, jurisdiction, stakeholder alignment. The part most deals skim and most operations later pay for.",
  },
  {
    label: "STAND-UP & OPERATE",
    title: "Hire, stand up, stay inside.",
    body: "Hire the operator. Set up the first 12–24 months of operations. Stay inside the business until it runs without us.",
  },
  {
    label: "LONG-HORIZON HOLDING",
    title: "Hold, reinvest, rebuild.",
    body: "Act as a long-horizon holder. Reinvest, rebuild governance as the asset matures, and keep the operation close to the people it serves.",
  },
];

export default function ExecutionPage() {
  return (
    <ThemeSurface surface="operating">
      {/* 5.1 Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
          Division 01 — Execution
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-op-ink mt-6 leading-[1.05] tracking-[-0.02em] max-w-4xl">
          The human layer of GPSL.
        </h1>
        <p className="text-lg text-op-muted mt-6 max-w-2xl leading-relaxed">
          Execution is where intent becomes an operation that actually runs.
          Coordination, governance, timing, and the teams that carry the work
          &mdash; built around the discipline of human logistics.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-op-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            How we engage <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact?topic=execution"
            className="inline-flex items-center gap-2 rounded-md border border-op-line px-5 py-3 text-sm font-medium text-op-ink hover:border-op-accent transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      {/* 5.2 What Execution is */}
      <section className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
                What Execution is
              </p>
            </div>
            <div className="space-y-6">
              <p className="font-display text-2xl font-semibold text-op-ink leading-snug tracking-[-0.01em]">
                Execution is where opportunity becomes a business, coordination
                becomes delivery, and the gap between plan and operation
                actually closes. It is the human side of the company.
              </p>
              <p className="text-op-muted text-base leading-relaxed">
                We are not a consultancy. We are operators. When we engage, it
                is because we plan to be standing next to you, inside the work,
                for years &mdash; hiring the operator, running the governance,
                making the calls that keep the operation holding its shape.
              </p>
              <p className="text-op-muted text-base leading-relaxed">
                We operate under tribal jurisdiction with a federally
                recognized nation. It is a structure we operate with, not
                around, and it makes certain kinds of work possible that
                otherwise would not be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Operating model */}
      <section className="border-t border-op-line bg-op-panel">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Operating model
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            Discover. Align. Execute. Sustain.
          </h2>
          <p className="text-op-muted mt-4 max-w-2xl leading-relaxed">
            The pattern we run across every engagement. Not a methodology we
            borrowed &mdash; the one the work itself taught us.
          </p>
          <div className="mt-12 divide-y divide-op-line border-t border-op-line">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="py-10 grid md:grid-cols-[auto_1fr_2fr] gap-8 items-start"
              >
                <p className="font-display text-4xl font-semibold text-op-accent">
                  {step.number}
                </p>
                <h3 className="font-display text-xl font-semibold text-op-ink tracking-[-0.01em]">
                  {step.name}
                </h3>
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

      {/* 5.4 What the operating model has built (ventures) */}
      <section id="ventures" className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            What the model has built
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            Ventures the operating discipline produced.
          </h2>
          <p className="text-op-muted mt-4 max-w-2xl leading-relaxed">
            These are businesses GPSL owns, operates, or is standing up. Not
            case studies &mdash; the assets the operating model produced, each
            built because the work was needed.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {VENTURES.map((v) => (
              <div
                key={v.name}
                className="border border-op-line rounded-lg p-6 bg-op-card"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
                  {v.kicker}
                </p>
                <h3 className="font-display text-xl font-semibold text-op-ink mt-3 tracking-[-0.01em]">
                  {v.name}
                </h3>
                <p className="text-sm text-op-muted mt-3 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 Team */}
      <section id="team" className="border-t border-op-line bg-op-panel">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            Team
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            The people who carry the work.
          </h2>
          <p className="text-op-muted mt-4 max-w-2xl leading-relaxed">
            Execution is a team discipline. These are the operators, engineers,
            and advisors who run engagements, stand ventures up, and keep the
            work holding its shape after it ships.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((person) => (
              <div
                key={person.name}
                className="rounded-lg border border-op-line bg-op-card p-6"
              >
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-op-ink">
                  {person.name}
                </h3>
                <p className="text-xs text-op-accent font-mono uppercase tracking-[0.15em] mt-2">
                  {person.role} &middot; {person.label}
                </p>
                <p className="text-sm text-op-muted mt-4 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.6 How we engage */}
      <section id="services" className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">
            How we engage
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-op-ink mt-4 leading-tight tracking-[-0.01em] max-w-2xl">
            Four ways Execution works with you.
          </h2>
          <p className="text-op-muted mt-4 max-w-2xl leading-relaxed">
            Every engagement is scoped on a conversation. The shape of the
            work, the horizon, and the governance all change what a durable
            partnership looks like. These are the four ways the work usually
            lands.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {SERVICES.map((service) => (
              <div
                key={service.label}
                className="bg-op-card rounded-lg border border-op-line p-8 flex flex-col"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
                  {service.label}
                </p>
                <h3 className="font-display text-2xl font-semibold text-op-ink mt-3 tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-op-muted text-base mt-3 leading-relaxed">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.7 Final CTA band */}
      <section className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="rounded-lg bg-op-ink text-op-bg p-10 md:p-16">
            <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
              Work with Execution
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
              Tell us about the operation, the venture, or the mission.
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
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-md border border-op-bg/30 px-5 py-3 text-sm font-medium text-op-bg hover:border-op-accent transition-colors"
              >
                See the ventures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}

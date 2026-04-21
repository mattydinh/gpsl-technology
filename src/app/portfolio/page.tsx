import type { Metadata } from "next";
import Link from "next/link";
import ThemeSurface from "@/components/ThemeSurface";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ventures we operate and software we ship.",
};

const techProducts = [
  {
    name: "LegacyCompass",
    category: "CRM",
    body: "Tribally owned CRM built agent-first. Shipping into GPSL ventures and available to external operators. Replaces the legacy CRM layer with Claude-grade reasoning.",
  },
  {
    name: "Meridian AI",
    category: "FINANCIAL INTELLIGENCE",
    body: "Agentic financial analyst: reads filings and earnings, cross-references market signal, writes the memo in the house style. Built for analyst workflows, not dashboards.",
  },
  {
    name: "LuxusAI",
    category: "LUXURY COMMERCE",
    body: "Multi-agent platform for high-touch luxury sales, clienteling, and post-purchase service. Preserves the hand-sold feel at scale.",
  },
  {
    name: "Forward-Deployed Agent Builds",
    category: "CLIENT ENGAGEMENTS",
    body: "Custom agentic software shipped alongside partner clients' internal teams. We embed, we ship, and we share commercial ownership of the outcome.",
  },
];

const ventures = [
  {
    name: "Tribal Bank",
    sector: "FINANCE",
    status: "In formation",
    body: "A federally chartered tribal bank focused on small business credit, self-determination capital, and reinvestment in tribal communities. Structured under tribal jurisdiction for regulatory and strategic advantage.",
    activities: [
      "Small business and entrepreneur credit origination",
      "Partnerships with CDFIs and tribal institutions",
      "Capital reinvestment into tribal economic development",
    ],
  },
  {
    name: "Tribal Trade",
    sector: "TRADE & LOGISTICS",
    status: "Operating",
    body: "Cross-border commerce and logistics powered by tribal jurisdiction. Moves physical goods and works the regulatory edges that only sovereign operators can work.",
    activities: [
      "Tribally structured import / export corridors",
      "Partner broker and carrier network",
      "Freight and specialty cargo operations",
    ],
  },
  {
    name: "Fishing & Processing",
    sector: "FOOD & PROCESSING",
    status: "Operating",
    body: "Vertically integrated fishery and processing operation anchored in coastal tribal communities. Harvest through distribution, with community ownership baked in.",
    activities: [
      "Harvest and vessel operations",
      "Cold-chain processing and packaging",
      "Distribution into retail and institutional buyers",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <ThemeSurface surface="operating">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">Portfolio</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-op-ink mt-6 leading-[1.05] tracking-[-0.02em] max-w-4xl">
          What we are building, operating, and shipping.
        </h1>
        <p className="text-lg text-op-muted mt-6 max-w-2xl leading-relaxed">
          GPSL operates across two sides: real ventures that we own and run, and real software that we ship into them and into client operations. This is the current catalog of both.
        </p>
      </section>

      <section id="ventures" className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">Ventures</p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight max-w-3xl">
            Businesses we are standing up and operating.
          </h2>

          <div className="mt-12 divide-y divide-op-line border-t border-op-line">
            {ventures.map((venture) => (
              <div key={venture.name} className="py-10 grid md:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">{venture.sector}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono mt-2">
                    Status · {venture.status}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-op-ink">{venture.name}</h3>
                  <p className="text-op-muted text-base mt-4 leading-relaxed">{venture.body}</p>
                  <ul className="text-sm text-op-muted mt-4 space-y-2 list-disc pl-5">
                    {venture.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="border-t border-op-line bg-op-panel">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-op-accent" />
            <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">
              Technology division · Live in production
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-5 leading-tight max-w-3xl">
            Software shipped into real operations.
          </h2>
          <p className="text-op-muted mt-4 max-w-2xl leading-relaxed">
            Four products built by the Technology division — three of our own, one a representative client engagement. Each runs in production today.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {techProducts.map((product) => (
              <div
                key={product.name}
                className="rounded-lg border border-op-line bg-op-card p-6 transition-colors hover:border-op-accent"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">{product.category}</p>
                <h3 className="font-display text-xl text-op-ink mt-3">{product.name}</h3>
                <p className="text-sm text-op-muted mt-3 leading-relaxed">{product.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-sm font-medium text-op-accent hover:opacity-75 transition-opacity"
            >
              Go deeper on the Technology division <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}

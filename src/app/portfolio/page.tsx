import ThemeSurface from "@/components/ThemeSurface";

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
    </ThemeSurface>
  );
}

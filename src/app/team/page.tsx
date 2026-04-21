import type { Metadata } from "next";
import ThemeSurface from "@/components/ThemeSurface";

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind GPSL.",
};

const executionTeam = [
  {
    name: "Bernie Chan",
    role: "Forward Deployed Engineer & Strategist",
    bio: "Owns deal flow, client delivery, and the financial architecture behind every AI product we ship. Turns proof-of-concept work into durable businesses — modeling unit economics, structuring engagements, and translating novel AI capability into measurable client outcomes.",
  },
  {
    name: "Kentory Thomas",
    role: "AI Platform & Transformation",
    bio: "Runs AI product and platform delivery across healthcare technology integration and enterprise transformation work. Pairs a deep finance background with operator rigor — making sure our agency, and the systems we ship alongside partners, scale together.",
  },
];

const technologyTeam = [
  {
    name: "Matty Dinh",
    role: "Chief Scientist",
    bio: "Architects end-to-end data and AI systems across machine learning, NLP, analytics engineering, and enterprise infrastructure. Connective tissue between research-grade capability and production-grade execution — what AI can do, and what actually ships.",
  },
  {
    name: "Cliff Wu",
    role: "AI Engineer",
    bio: "Founding an AI startup while partnering with faculty at a California university medical school to build clinical automations. Decorated competitor with wins across AI case competitions and Kaggle, and deep expertise in scaled AI architecture — the systems that keep models reliable at production scale.",
  },
  {
    name: "Nate Sou",
    role: "Full-Stack Software",
    bio: "Ships across the full application stack — backend, frontend, and the AI agent architecture in between. Shapes how end-to-end products come together, from infrastructure up through interface, with equal fluency at each layer.",
  },
  {
    name: "Martin Leung",
    role: "Full-Stack Software",
    bio: "Owns the backend, authentication, and high-reliability plumbing that keeps our production services running. Deep expertise in identity systems and transaction infrastructure — the unglamorous layer that makes everything else trustworthy.",
  },
];

function PersonCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="rounded-lg border border-op-line bg-op-card p-6">
      <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-op-ink">{name}</h3>
      <p className="text-xs text-op-accent font-mono uppercase tracking-[0.15em] mt-2">{role}</p>
      <p className="text-sm text-op-muted mt-4 leading-relaxed">{bio}</p>
    </div>
  );
}

export default function Team() {
  return (
    <ThemeSurface surface="operating">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">The team</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-op-ink mt-6 leading-[1.05] tracking-[-0.02em] max-w-4xl">
          The people behind GPSL.
        </h1>
        <p className="text-lg text-op-muted mt-6 max-w-2xl leading-relaxed">
          Operators and engineers, working together on ventures we plan to hold for a long time. We hire for ownership, not headcount.
        </p>
      </div>

      <section id="execution-team" className="border-t border-op-line">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">Execution</p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight">Operators.</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executionTeam.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <section id="technology-team" className="border-t border-op-line bg-op-panel">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">Technology</p>
          <h2 className="font-display text-3xl md:text-4xl text-op-ink mt-4 leading-tight">Engineers.</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyTeam.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>
    </ThemeSurface>
  );
}

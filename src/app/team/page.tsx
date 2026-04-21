import type { Metadata } from "next";
import ThemeSurface from "@/components/ThemeSurface";

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind GPSL.",
};

const executionTeam = [
  {
    name: "Bernie Chan",
    role: "Forward Deployed Engineer",
    bio: "Drives deal flow and client delivery from proof of concept through production-scale deployment. Translates complex AI capabilities into measurable client value.",
  },
];

const technologyTeam = [
  {
    name: "Matty Dinh",
    role: "Founding Engineer",
    bio: "Designs and deploys end-to-end data and technology systems spanning machine learning, NLP, analytics engineering, and enterprise IT infrastructure. Bridges advanced AI with production-grade systems.",
  },
  {
    name: "Cliff Wu",
    role: "AI Engineer",
    bio: "Applied ML engineer with a full-stack foundation and a track record of winning competitive AI challenges. Combines algorithmic rigor with scalable engineering execution.",
  },
  {
    name: "Nate Sou",
    role: "Full-Stack Engineer",
    bio: "Builds scalable applications backed by modern CI/CD pipelines and production-grade infrastructure. Specializes in AI agents and retrieval-augmented generation systems.",
  },
  {
    name: "Martin Leung",
    role: "Engineer, Payments & Auth",
    bio: "Builds secure, high-reliability transaction pipelines and identity management solutions. Deep expertise in payments infrastructure and authentication systems.",
  },
  {
    name: "Kentory",
    role: "Software Engineer",
    bio: "Software engineer contributing across the GPSL technology stack. Focused on reliable, maintainable systems that support long-horizon ventures.",
  },
];

function PersonCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="rounded-lg border border-op-line bg-white p-6">
      <h3 className="font-display text-xl text-op-ink">{name}</h3>
      <p className="text-sm text-op-accent font-mono uppercase tracking-[0.15em] mt-2">{role}</p>
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

      <section id="technology-team" className="border-t border-op-line bg-white">
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

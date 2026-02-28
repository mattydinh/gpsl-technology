import CTA from "@/components/CTA";

const team = [
  {
    name: "Matty Dinh",
    role: "Data Science | Machine Learning | Business Intelligence | IT Systems Architecture",
    bio: "Designs and deploys end-to-end data and technology systems spanning machine learning modeling, NLP, analytics engineering, and enterprise IT infrastructure. Builds and operationalizes predictive models, deep learning workflows, and intelligent automation while architecting scalable data pipelines, BI environments, and hardware-backed systems. Bridges advanced AI capabilities with production-grade infrastructure to ensure performance, reliability, and long-term maintainability.",
  },
  {
    name: "Cliff Wu",
    role: "AI Engineer | Applied Machine Learning | Full-Stack Systems",
    bio: "AI engineer with a strong full-stack software engineering foundation and deep expertise in applied machine learning. Experienced in building and deploying end-to-end AI systems, with a track record of winning competitive AI challenges. Brings practical experience across model development, system design, and production deployment, combining algorithmic rigor with scalable engineering execution.",
  },
  {
    name: "Nate Sou",
    role: "Full-Stack Software Engineer | AI Engineer | Systems & Automation",
    bio: "Full-stack engineer with deep frontend expertise and end-to-end product delivery experience. Builds scalable applications backed by modern CI/CD pipelines and production-grade infrastructure. Experienced in developing AI agents and retrieval-augmented generation (RAG) systems, integrating LLMs into real-world products with a focus on performance, reliability, and maintainability. Combines strong UI engineering with backend architecture and intelligent automation to ship robust, AI-enabled systems.",
  },
];

export default function Team() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
          People
        </span>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          Team
        </h1>
        <p className="mt-4 text-zinc-600">
          The people behind our technology: engineering, product, and operations.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <li
              key={person.name}
              className="rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="font-semibold text-zinc-900">{person.name}</h2>
              <p className="mt-1 font-mono text-xs font-medium text-zinc-500">{person.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <CTA
        title="Want to work with us?"
        description="Get in touch to discuss partnerships or opportunities."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}

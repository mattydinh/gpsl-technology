import CTA from "@/components/CTA";

const projects = [
  {
    title: "Logistics & corporate data platform",
    description: "A logistics app built with Supabase and Next.js for a shipping company. Tracks shipping data end-to-end and houses all corporate data in one secure, modern platform.",
    tags: ["Next.js", "Supabase", "Logistics"],
  },
  {
    title: "ML research news & summaries",
    description: "A news app that parses the web from the largest machine learning research conferences. Surfaces new authors, publications, and advancements in AI, with AI-written summaries of new findings.",
    tags: ["AI", "Web parsing", "Summarization"],
  },
  {
    title: "Peptide synthesis with protein models",
    description: "An AI project using Google's latest protein models to improve peptide synthesis. Includes predicting binding affinity, structure prediction, and generative peptide design.",
    tags: ["AI", "Protein models", "Generative design"],
  },
  {
    title: "Sales automation with AI-generated presentations",
    description: "A business operations system using Google Apps Script to automate sales workflows. Sales teams input data into a form; AI generates a customer-ready PowerPoint from the input, helping teams close deals faster.",
    tags: ["Google Apps Script", "AI", "Sales automation"],
  },
];

export default function Projects() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
          Built by us
        </span>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          Projects
        </h1>
        <p className="mt-4 text-zinc-600">
          Technology we build: products, platforms, and tools that deliver value.
        </p>
        <ul className="mt-12 space-y-6">
          {projects.map((project) => (
            <li
              key={project.title}
              className="rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="font-semibold text-zinc-900">{project.title}</h2>
              <p className="mt-2 text-zinc-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-cyan-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CTA
        title="Interested in our tech?"
        description="We can walk you through our stack, architecture, and roadmap."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}

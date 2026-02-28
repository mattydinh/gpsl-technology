import CTA from "@/components/CTA";

export default function AI() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
          Stack & approach
        </span>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          AI applications
        </h1>
        <p className="mt-4 text-zinc-600">
          How we use AI and modern tech to build business applications.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm space-y-4">
            <p className="text-zinc-700 leading-relaxed">
              GPSL Technology builds modern, scalable business applications powered by leading technologies and artificial intelligence. We operate with the belief that technology — when thoughtfully applied — can improve any business by increasing efficiency, unlocking new insights, and creating entirely new capabilities.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our team brings deep expertise across data science, machine learning, deep learning, computer vision, full-stack software engineering, and research & development. This cross-functional versatility allows us to move seamlessly from concept to production, combining rigorous technical depth with execution speed.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              We stay at the forefront of emerging AI advancements and continuously evaluate new tools, models, and infrastructure to ensure we are applying the most effective and practical solutions. Our focus is not innovation for its own sake — it is delivering measurable value to our partners through intelligent systems that are built to scale.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm space-y-4">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Our stack
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Our core stack centers on Next.js, Supabase, Git, Cursor, and Claude Code, enabling us to build modern, production-grade applications with speed and precision. This architecture allows us to deliver scalable, secure systems while maintaining rapid iteration cycles through AI-assisted development workflows.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              On the AI side, we leverage fastai and other leading machine learning frameworks to develop deep learning, natural language processing (NLP), and computer vision (CV) solutions as needed. This gives us the flexibility to move from applied AI integrations to fully custom model development, depending on the complexity of the problem.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              By combining strong engineering foundations with advanced AI capabilities, we accelerate development without compromising reliability, performance, or long-term maintainability.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss our AI approach"
        description="We're happy to share more on our AI strategy and implementations."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}

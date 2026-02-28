import Link from "next/link";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-4xl px-6 py-24 text-center bg-grid min-h-[50vh] flex flex-col justify-center">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
          Technology & AI
        </span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          GPSL – Technology
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-600">
          We build modern technology and apply AI to solve real problems. Explore our team, projects, and how we use AI.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/team"
            className="rounded-md border border-cyan-500/60 bg-cyan-500/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-500/20 hover:border-cyan-600 hover:shadow-glow-sm"
          >
            Meet the team
          </Link>
          <Link
            href="/projects"
            className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 font-mono text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:border-zinc-400"
          >
            View projects
          </Link>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            What we do
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
            Capabilities
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="group rounded-lg border border-zinc-200 bg-surface p-6 transition-colors hover:border-cyan-500/40">
              <div className="h-px w-8 bg-cyan-500" />
              <h3 className="mt-4 font-mono text-sm font-semibold text-zinc-900">Team</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Skilled engineers and product people building and shipping.
              </p>
              <Link href="/team" className="mt-4 inline-block font-mono text-xs font-medium text-cyan-600 hover:text-cyan-700">
                See team →
              </Link>
            </div>
            <div className="group rounded-lg border border-zinc-200 bg-surface p-6 transition-colors hover:border-cyan-500/40">
              <div className="h-px w-8 bg-cyan-500" />
              <h3 className="mt-4 font-mono text-sm font-semibold text-zinc-900">Projects</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Technology we build: products, platforms, and tools.
              </p>
              <Link href="/projects" className="mt-4 inline-block font-mono text-xs font-medium text-cyan-600 hover:text-cyan-700">
                See projects →
              </Link>
            </div>
            <div className="group rounded-lg border border-zinc-200 bg-surface p-6 transition-colors hover:border-cyan-500/40">
              <div className="h-px w-8 bg-cyan-500" />
              <h3 className="mt-4 font-mono text-sm font-semibold text-zinc-900">AI</h3>
              <p className="mt-2 text-sm text-zinc-600">
                How we use AI to improve outcomes and efficiency.
              </p>
              <Link href="/ai" className="mt-4 inline-block font-mono text-xs font-medium text-cyan-600 hover:text-cyan-700">
                See AI →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's talk"
        description="Interested in our technology or partnership? We'd love to hear from you."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}

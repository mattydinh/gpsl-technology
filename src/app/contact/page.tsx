import CTA from "@/components/CTA";

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
          Get in touch
        </span>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          Contact
        </h1>
        <p className="mt-4 text-zinc-600">
          Get in touch for partnerships, investment discussions, or general inquiries about our technology.
        </p>
        <div className="mt-12 rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-mono text-xs font-medium uppercase tracking-wider text-zinc-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 block w-full rounded-md border border-zinc-300 bg-surface px-3 py-2.5 font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs font-medium uppercase tracking-wider text-zinc-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full rounded-md border border-zinc-300 bg-surface px-3 py-2.5 font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs font-medium uppercase tracking-wider text-zinc-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 block w-full rounded-md border border-zinc-300 bg-surface px-3 py-2.5 font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="rounded-md border border-cyan-500/60 bg-cyan-500/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-500/20 hover:border-cyan-600 hover:shadow-glow-sm"
            >
              Send message
            </button>
          </form>
          <p className="mt-4 font-mono text-xs text-zinc-500">
            Form submission can be wired to an API route or external service (e.g. email, CRM).
          </p>
        </div>
      </section>

      <CTA
        title="Prefer a meeting?"
        description="We can schedule a call to walk through our technology and roadmap."
        primaryLabel="Return to overview"
        primaryHref="/"
      />
    </>
  );
}

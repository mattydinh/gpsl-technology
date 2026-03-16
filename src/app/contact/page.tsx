"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`GPSL Contact: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.open(`mailto:contact@gpsl.tech?subject=${subject}&body=${body}`);
    setSubmitted(true);
  }

  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-16">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
            Get in touch
          </span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
            Contact
          </h1>
          <p className="mt-4 text-zinc-600">
            Get in touch for partnerships, investment discussions, or general
            inquiries about our technology.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle size={40} className="text-cyan-500" />
                <h2 className="text-lg font-semibold text-zinc-900">
                  Message prepared
                </h2>
                <p className="text-sm text-zinc-600">
                  Your default email client should have opened with the message.
                  If it didn&apos;t, feel free to email us directly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 font-mono text-xs font-medium text-cyan-600 hover:text-cyan-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-zinc-600"
                  >
                    <User size={12} />
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
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-zinc-600"
                  >
                    <Mail size={12} />
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
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-zinc-600"
                  >
                    <MessageSquare size={12} />
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
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-500/60 bg-cyan-500/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-500/20 hover:border-cyan-600 hover:shadow-glow-sm"
                >
                  <Send size={14} />
                  Send message
                </button>
              </form>
            )}
          </div>
        </FadeIn>
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

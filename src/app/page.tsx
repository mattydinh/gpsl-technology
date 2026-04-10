"use client";

import Link from "next/link";
import { Users, FolderKanban, Brain, ArrowRight, Sparkles } from "lucide-react";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";

const capabilities = [
  {
    icon: Users,
    title: "Team",
    description: "Skilled engineers and product people building and shipping.",
    href: "/team",
    linkLabel: "See team",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description: "Technology we build: products, platforms, and tools.",
    href: "/projects",
    linkLabel: "See projects",
  },
  {
    icon: Brain,
    title: "AI",
    description: "How we use AI to improve outcomes and efficiency.",
    href: "/ai",
    linkLabel: "See AI",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-4xl px-6 py-24 text-center bg-grid min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
            Technology & AI
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            GPSL &ndash; Technology
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-600">
            We build modern technology and apply AI to solve real problems.
            Explore our team, projects, and how we use AI.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-500/60 bg-cyan-500/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-500/20 hover:border-cyan-600 hover:shadow-glow-sm"
            >
              Meet the team
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 font-mono text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:border-zinc-400"
            >
              View projects
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-950 py-5">
        <FadeIn>
          <Link
            href="/ai"
            className="group mx-auto flex max-w-4xl items-center justify-center gap-3 px-6 transition-opacity hover:opacity-80"
          >
            <Sparkles size={18} className="claude-icon-pulse text-[#D97757]" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
              Official Claude Partner Network
            </span>
            <ArrowRight
              size={12}
              className="text-zinc-500 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </FadeIn>
      </section>

      <section className="border-t border-zinc-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              What we do
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
              Capabilities
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <div className="group rounded-lg border border-zinc-200 bg-surface p-6 transition-all hover:border-cyan-500/40 hover:shadow-md">
                  <cap.icon
                    size={20}
                    className="text-cyan-500"
                  />
                  <h3 className="mt-4 font-mono text-sm font-semibold text-zinc-900">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {cap.description}
                  </p>
                  <Link
                    href={cap.href}
                    className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-medium text-cyan-600 hover:text-cyan-700"
                  >
                    {cap.linkLabel}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeIn>
            ))}
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

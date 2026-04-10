"use client";

import { Cpu, Layers, Sparkles } from "lucide-react";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";

export default function AI() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
            Stack & approach
          </span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
            AI applications
          </h1>
          <p className="mt-4 text-zinc-600">
            How we use AI and modern tech to build business applications.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-8">
          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/10">
                  <Cpu size={16} className="text-cyan-600" />
                </div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Philosophy
                </h2>
              </div>
              <p className="text-zinc-700 leading-relaxed">
                GPSL Technology builds modern, scalable business applications
                powered by leading technologies and artificial intelligence. We
                operate with the belief that technology — when thoughtfully
                applied — can improve any business by increasing efficiency,
                unlocking new insights, and creating entirely new capabilities.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                Our team brings deep expertise across data science, machine
                learning, deep learning, computer vision, full-stack software
                engineering, and research & development. This cross-functional
                versatility allows us to move seamlessly from concept to
                production, combining rigorous technical depth with execution
                speed.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                We stay at the forefront of emerging AI advancements and
                continuously evaluate new tools, models, and infrastructure to
                ensure we are applying the most effective and practical
                solutions. Our focus is not innovation for its own sake — it is
                delivering measurable value to our partners through intelligent
                systems that are built to scale.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/10">
                  <Layers size={16} className="text-cyan-600" />
                </div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Our stack
                </h2>
              </div>
              <p className="text-zinc-700 leading-relaxed">
                Our core stack centers on Next.js, Supabase, Git, Cursor, and
                Claude Code, enabling us to build modern, production-grade
                applications with speed and precision. This architecture allows
                us to deliver scalable, secure systems while maintaining rapid
                iteration cycles through AI-assisted development workflows.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                On the AI side, we leverage fastai and other leading machine
                learning frameworks to develop deep learning, natural language
                processing (NLP), and computer vision (CV) solutions as needed.
                This gives us the flexibility to move from applied AI
                integrations to fully custom model development, depending on the
                complexity of the problem.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                By combining strong engineering foundations with advanced AI
                capabilities, we accelerate development without compromising
                reliability, performance, or long-term maintainability.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="claude-border-shimmer rounded-lg border border-zinc-200 border-l-4 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#D97757]/10">
                  <Sparkles size={16} className="claude-icon-pulse text-[#D97757]" />
                </div>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Claude Partner Network
                </h2>
              </div>
              <p className="text-zinc-700 leading-relaxed">
                GPSL Technology is an official member of the{" "}
                <span className="font-semibold text-[#D97757]">
                  Claude Partner Network
                </span>
                . This partnership gives us direct access to Anthropic&apos;s
                Claude models, Claude Code as a core development tool, and
                early access to new capabilities as they ship.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                Claude is deeply embedded in how we build — from architecture
                and code generation to testing and deployment. As a partner,
                we work closely with Anthropic to push the boundaries of
                AI-assisted software development, ensuring our clients
                benefit from the most advanced AI tooling available.
              </p>
            </div>
          </FadeIn>
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

"use client";

import {
  Landmark,
  FlaskConical,
  FileSearch,
  Home,
  Shield,
  Scale,
  Search,
  ExternalLink,
} from "lucide-react";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    icon: Landmark,
    title: "Civic Sentinel",
    subtitle: "Political intelligence data platform",
    description:
      "AI-powered platform that aggregates and analyzes political data at scale using multi-agent orchestration for real-time intelligence briefings.",
    tags: ["Multi-Agent Orchestration", "LLM Pipelines", "Political Data", "RAG"],
    url: "https://civic-sentinel.vercel.app/signals",
  },
  {
    icon: FlaskConical,
    title: "HelixBridge",
    subtitle: "Peptide synthesis with protein models",
    description:
      "Uses Google's protein models to improve peptide synthesis, including binding affinity prediction and generative peptide design.",
    tags: ["AI", "Protein Models", "Generative Design"],
    url: "https://helixbridge.vercel.app/",
  },
  {
    icon: FileSearch,
    title: "Grantbridge",
    subtitle: "AI-powered grant discovery & drafting",
    description:
      "Helps researchers discover relevant grant opportunities and generates application drafts using AI.",
    tags: ["Next.js", "AI", "Grant Discovery", "Document Generation"],
    url: "https://grantbridge-ai.vercel.app/",
  },
  {
    icon: Home,
    title: "Meridian AI",
    subtitle: "Conversational real estate advisor",
    description:
      "Conversational AI that guides home buyers through the purchasing journey with matched listings and compatibility scores.",
    tags: ["AI Chat", "Real Estate", "Buyer Matching"],
    url: "https://web-production-92c07.up.railway.app/",
  },
  {
    icon: Shield,
    title: "LegacyCompass",
    subtitle: "AI end-of-life planning & estate management",
    description:
      "AI-guided end-of-life planning platform with funeral concierge, estate document management, and provider matching.",
    tags: ["AI", "Estate Planning", "Provider Matching"],
    url: "https://legacy-compass-puce.vercel.app/",
  },
  {
    icon: Scale,
    title: "LuxusAI",
    subtitle: "AI legal workspace for deal structuring",
    description:
      "AI legal workspace for structuring deals, drafting documents, and tracking completeness across transactions.",
    tags: ["AI", "Legal", "Deal Structuring"],
    url: "https://luxusai.vercel.app/",
  },
  {
    icon: Search,
    title: "InvenioAI",
    subtitle: "AI-native recruiting platform",
    description:
      "AI recruiting platform with multi-dimensional candidate scoring, GitHub integration, and an organization-specific hiring knowledge graph.",
    tags: ["AI", "Recruiting", "Knowledge Graph"],
    url: "https://invenio-ai.vercel.app/dashboard",
  },
];

export default function Projects() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-600">
            Built by us
          </span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
            Projects
          </h1>
          <p className="mt-4 text-zinc-600">
            Products, platforms, and tools we build and ship.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.06}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-glow-sm"
              >
                {/* Top accent bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 to-cyan-600" />

                <div className="p-5">
                  {/* Icon + Title row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                        <project.icon size={18} className="text-cyan-600" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-semibold leading-tight text-zinc-900">
                          {project.title}
                        </h2>
                        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="mt-1 shrink-0 text-zinc-300 transition-colors group-hover:text-cyan-500"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-cyan-500/30 bg-cyan-500/8 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-cyan-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
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

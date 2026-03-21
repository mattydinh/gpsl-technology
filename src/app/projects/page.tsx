"use client";

import {
  Ship,
  Newspaper,
  FlaskConical,
  Presentation,
  Landmark,
  Home,
  FileSearch,
} from "lucide-react";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    icon: Landmark,
    title: "Civic Sentinel — political intelligence data platform",
    description:
      "An AI-powered intelligence platform that aggregates, analyzes, and surfaces political data at scale. Uses multi-agent orchestration to coordinate specialized LLM agents — including legislative trackers, sentiment analyzers, media monitors, and policy impact modelers — that work in concert to deliver real-time briefings and predictive insights. Ingests data from government filings, legislative databases, news feeds, social media, and public records, then synthesizes it into actionable intelligence dashboards for government affairs teams, lobbying firms, and political strategists.",
    tags: [
      "Multi-Agent Orchestration",
      "LLM Pipelines",
      "Political Data",
      "RAG",
      "Real-Time Analytics",
    ],
  },
  {
    icon: Ship,
    title: "Red Cedar Routes — logistics & corporate data platform",
    description:
      "A logistics app built with Supabase and Next.js for a shipping company. Tracks shipping data end-to-end and houses all corporate data in one secure, modern platform.",
    tags: ["Next.js", "Supabase", "Logistics"],
  },
  {
    icon: Newspaper,
    title: "Signal Desk — ML research news & summaries",
    description:
      "A news app that parses the web from the largest machine learning research conferences. Surfaces new authors, publications, and advancements in AI, with AI-written summaries of new findings.",
    tags: ["AI", "Web parsing", "Summarization"],
  },
  {
    icon: FlaskConical,
    title: "HelixBridge — peptide synthesis with protein models",
    description:
      "An AI project using Google's latest protein models to improve peptide synthesis. Includes predicting binding affinity, structure prediction, and generative peptide design.",
    tags: ["AI", "Protein models", "Generative design"],
  },
  {
    icon: Presentation,
    title: "QwikClose — sales automation with AI-generated presentations",
    description:
      "A business operations system using Google Apps Script to automate sales workflows. Sales teams input data into a form; AI generates a customer-ready PowerPoint from the input, helping teams close deals faster.",
    tags: ["Google Apps Script", "AI", "Sales automation"],
  },
  {
    icon: Home,
    title: "Meridian AI — conversational real estate advisor",
    description:
      "An AI-powered home search platform that guides buyers through the purchasing journey. Uses a conversational agent to build detailed buyer profiles across location, budget, financing, and feature preferences, then delivers matched property listings with compatibility scores. Tracks buyers through five stages from discovery to offer-ready.",
    tags: ["AI Chat", "Real Estate", "Buyer Matching", "Session Management"],
  },
  {
    icon: FileSearch,
    title: "Grantbridge — AI-powered grant discovery & drafting",
    description:
      "A platform that streamlines the grant-seeking process using AI. Helps researchers and organizations discover relevant grant opportunities and generates application drafts, reducing the manual effort of navigating complex funding landscapes.",
    tags: ["Next.js", "AI", "Grant Discovery", "Document Generation"],
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
            Technology we build: products, platforms, and tools that deliver
            value.
          </p>
        </FadeIn>
        <ul className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <li className="rounded-lg border border-zinc-200 border-l-4 border-l-cyan-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyan-500/10">
                    <project.icon size={16} className="text-cyan-600" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-zinc-900">
                      {project.title}
                    </h2>
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
                  </div>
                </div>
              </li>
            </FadeIn>
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

"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import ThemeSurface from "@/components/ThemeSurface";
import { Mail, Phone } from "lucide-react";

type TopicId = "execution" | "technology" | "partnerships";

const TOPICS: { id: TopicId; label: string; body: string }[] = [
  { id: "execution", label: "Execution", body: "Operators, deal flow, ventures, operations." },
  { id: "technology", label: "Technology", body: "AI agency engagement, product builds, forward-deployed engineering." },
  { id: "partnerships", label: "Partnerships", body: "Tribal, institutional, investor. Long-horizon relationships." },
];

const HEADINGS: Record<TopicId, string> = {
  execution: "Tell us about the deal or the operation.",
  technology: "Tell us what you need built.",
  partnerships: "Tell us about the partnership.",
};

const SUBJECTS: Record<TopicId, string> = {
  execution: "GPSL — Execution inquiry",
  technology: "GPSL — Technology engagement",
  partnerships: "GPSL — Partnership conversation",
};

const EMAIL = "matthew.dinh@gpsl-ubo.com";

function ContactInner() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic");

  const initialTopic: TopicId =
    topicParam === "execution" || topicParam === "technology" || topicParam === "partnerships"
      ? topicParam
      : "execution";

  const [selected, setSelected] = useState<TopicId>(initialTopic);

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECTS[selected])}`;

  return (
    <>
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-op-ink mt-6 leading-[1.05] tracking-[-0.02em] max-w-3xl">
          {"Let's talk."}
        </h1>
        <p className="text-lg text-op-muted mt-6 max-w-2xl leading-relaxed">
          Tell us what brings you in, and we will come back with the right person on our side of the table.
        </p>
      </div>

      {/* Topic selector */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">What brings you in?</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {TOPICS.map((topic, i) => {
            const isSelected = selected === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelected(topic.id)}
                className={`text-left rounded-lg border p-6 transition-colors ${
                  isSelected
                    ? "border-op-accent bg-op-card"
                    : "border-op-line bg-op-card hover:border-op-accent/50"
                }`}
              >
                <span
                  className={
                    isSelected
                      ? "text-xs uppercase tracking-[0.2em] text-op-accent font-mono"
                      : "text-xs uppercase tracking-[0.2em] text-op-muted font-mono"
                  }
                >
                  Topic 0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-op-ink mt-2 tracking-[-0.01em]">{topic.label}</h3>
                <p className="text-sm text-op-muted mt-2 leading-relaxed">{topic.body}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact block */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mt-8 rounded-lg bg-op-ink text-op-bg p-10 md:p-14">
          <p className="text-xs uppercase tracking-[0.2em] text-op-accent font-mono">Get in touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 leading-tight tracking-[-0.01em] max-w-3xl">
            {HEADINGS[selected]}
          </h2>

          <a
            href={mailtoHref}
            className="inline-flex items-center gap-3 text-op-bg hover:text-op-accent transition-colors mt-8 text-lg"
          >
            <Mail size={20} />
            {EMAIL}
          </a>

          <br />

          <a
            href="tel:+19044399174"
            className="inline-flex items-center gap-3 text-op-bg hover:text-op-accent transition-colors mt-4 text-lg"
          >
            <Phone size={20} />
            (904) 439-9174
          </a>

          <p className="text-sm text-op-muted mt-8">
            Or just reply to anything we have already sent you. We read everything.
          </p>
        </div>
      </div>
    </>
  );
}

export default function ContactPage() {
  return (
    <ThemeSurface surface="operating">
      <Suspense fallback={null}>
        <ContactInner />
      </Suspense>
    </ThemeSurface>
  );
}

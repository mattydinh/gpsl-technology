"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

type CTAProps = {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTA({
  title,
  description = "Ready to learn more? Get in touch.",
  primaryLabel = "Contact us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-950 py-20">
      <FadeIn className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-mono text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-zinc-400">{description}</p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 justify-center rounded-md border border-cyan-400/60 bg-cyan-400/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-400/20 hover:border-cyan-400 hover:shadow-glow-sm"
          >
            {primaryLabel}
            <ArrowRight size={14} />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-md border border-zinc-600 bg-transparent px-5 py-2.5 font-mono text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

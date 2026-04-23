import Link from "next/link";
import { Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/execution", label: "Execution" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-op-line bg-op-bg/50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <p className="font-display text-2xl text-op-ink">GPSL</p>
            <p className="text-sm text-op-muted mt-2 leading-relaxed">
              A diversified operating group. Ventures and software, held for the long horizon.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-op-ink hover:text-op-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-op-muted font-mono">Contact</p>
            <a
              href="mailto:matthew.dinh@gpsl-ubo.com"
              className="block mt-4 text-sm text-op-ink hover:text-op-accent transition-colors"
            >
              matthew.dinh@gpsl-ubo.com
            </a>
            <a
              href="tel:+19044399174"
              className="block mt-2 text-sm text-op-ink hover:text-op-accent transition-colors"
            >
              (904) 439-9174
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-op-line mt-12 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-op-muted">
            &copy; 2026 GPSL. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="text-op-muted hover:text-op-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

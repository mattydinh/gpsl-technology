import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/team", label: "Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "/contact", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="font-mono text-sm font-medium tracking-tight text-white"
            >
              GPSL &ndash; Technology
            </Link>
            <p className="max-w-xs text-sm text-zinc-500">
              Modern technology and AI solutions for real business problems.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Pages
            </h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Connect
            </h3>
            <ul className="mt-3 flex gap-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-zinc-400 transition-colors hover:text-cyan-400"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center">
          <p className="font-mono text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} GPSL Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

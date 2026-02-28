"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/team", label: "Team" },
  { href: "/projects", label: "Projects" },
  { href: "/ai", label: "AI" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-white hover:text-zinc-200 transition-colors"
        >
          GPSL – Technology
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-px bg-cyan-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

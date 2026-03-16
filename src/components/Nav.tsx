"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, Users, FolderKanban, Brain, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/team", label: "Team", icon: Users },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/ai", label: "AI", icon: Brain },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-white hover:text-zinc-200 transition-colors"
        >
          GPSL &ndash; Technology
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-[21px] left-0 right-0 h-px bg-cyan-400"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-zinc-800 bg-zinc-950 md:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {links.map(({ href, label, icon: Icon }) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href));
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                      }`}
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

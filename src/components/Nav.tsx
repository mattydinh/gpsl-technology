"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, Compass, Cpu, FolderKanban, Users, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/execution", label: "Execution", icon: Compass },
  { href: "/technology", label: "Technology", icon: Cpu },
  { href: "/portfolio", label: "Portfolio", icon: FolderKanban },
  { href: "/team", label: "Team", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTech = pathname.startsWith("/technology");

  const chrome = isTech
    ? {
        header: "border-zinc-800 bg-zinc-950/95",
        brand: "text-white hover:text-zinc-200",
        inactive: "text-zinc-400 hover:text-white",
        active: "text-cyan-400",
        underline: "bg-cyan-400",
        mobileBtn: "text-zinc-400 hover:text-white",
        mobileBar: "border-zinc-800 bg-zinc-950",
        mobileActive: "bg-cyan-400/10 text-cyan-400",
        mobileInactive: "text-zinc-400 hover:bg-zinc-900 hover:text-white",
      }
    : {
        header: "border-op-line bg-op-bg/90",
        brand: "text-op-ink hover:text-op-accent",
        inactive: "text-op-muted hover:text-op-ink",
        active: "text-op-accent",
        underline: "bg-op-accent",
        mobileBtn: "text-op-muted hover:text-op-ink",
        mobileBar: "border-op-line bg-op-bg",
        mobileActive: "bg-op-accent/10 text-op-accent",
        mobileInactive: "text-op-muted hover:bg-op-line/40 hover:text-op-ink",
      };

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${chrome.header} backdrop-blur-md`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={`font-mono text-sm font-medium tracking-tight ${chrome.brand} transition-colors`}
        >
          GPSL
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isActive ? chrome.active : chrome.inactive
                    }`}
                  >
                    <Icon size={14} />
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute -bottom-[21px] left-0 right-0 h-px ${chrome.underline}`}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${chrome.mobileBtn} transition-colors`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`overflow-hidden border-t ${chrome.mobileBar} md:hidden`}
          >
            <ul className="space-y-1 px-6 py-4">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href));
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? chrome.mobileActive : chrome.mobileInactive
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

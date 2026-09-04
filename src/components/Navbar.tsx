"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { usePlan } from "./PlanProvider";

const LINKS = [
  { href: "/news", label: "News" },
  { href: "/models", label: "AI Models" },
  { href: "/deals", label: "Deals" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, ready } = usePlan();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
            AI
          </span>
          <span className="text-lg tracking-tight">
            AI<span className="text-cyan-400">updates</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                pathname.startsWith(l.href)
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {ready && plan === "pro" ? (
            <span className="hidden rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 sm:inline-block">
              PRO MEMBER
            </span>
          ) : (
            <Link
              href="/pricing"
              className="hidden rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90 sm:inline-block"
            >
              Go Pro
            </Link>
          )}
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-slate-300 hover:bg-white/5 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 py-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Deal } from "@/lib/types";
import { usePlan } from "./PlanProvider";

function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(code).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="rounded-md border border-dashed border-cyan-400/50 bg-cyan-400/10 px-3 py-1 font-mono text-sm text-cyan-300 transition-colors hover:bg-cyan-400/20"
      title="Copy code"
    >
      {copied ? "Copied!" : code}
    </button>
  );
}

export default function DealsGrid({ deals }: { deals: Deal[] }) {
  const { plan, ready } = usePlan();
  const isPro = plan === "pro";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {deals.map((d) => {
        const locked = d.premium && !(ready && isPro);
        return (
          <div
            key={d.id}
            className={`relative flex flex-col gap-3 rounded-xl border p-5 ${
              d.premium
                ? "border-amber-400/25 bg-gradient-to-b from-amber-400/[0.06] to-transparent"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-white">{d.tool}</h3>
                <p className="text-xs text-slate-500">{d.category}</p>
              </div>
              {d.premium && (
                <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-xs font-semibold text-amber-300">
                  PRO EXCLUSIVE
                </span>
              )}
            </div>

            <p className="text-lg font-bold text-cyan-300">{d.offer}</p>
            <p className="text-sm leading-relaxed text-slate-400">{d.description}</p>

            {locked ? (
              <div className="mt-auto flex items-center gap-3 pt-1">
                <span className="select-none rounded-md border border-dashed border-white/20 bg-white/5 px-3 py-1 font-mono text-sm text-slate-500 blur-[3px]">
                  XXXXXXXX
                </span>
                <Link
                  href="/pricing"
                  className="text-sm font-medium text-amber-300 hover:underline"
                >
                  Unlock with Pro →
                </Link>
              </div>
            ) : (
              <div className="mt-auto flex items-center gap-3 pt-1">
                {d.code && <CopyCode code={d.code} />}
                <a
                  href={d.url}
                  target={d.url.startsWith("/") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-cyan-400 hover:underline"
                >
                  Claim deal ↗
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

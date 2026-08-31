"use client";

import Link from "next/link";
import { ModelResource } from "@/lib/types";
import { usePlan } from "./PlanProvider";

const KIND_STYLES: Record<string, string> = {
  LLM: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Multimodal: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Image: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  Audio: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Video: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Embedding: "bg-blue-500/15 text-blue-300 border-blue-500/30",
};

export default function ModelGrid({ models }: { models: ModelResource[] }) {
  const { plan, ready } = usePlan();
  const isPro = plan === "pro";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {models.map((m) => (
        <div
          key={m.name}
          className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-white">{m.name}</h3>
              <p className="text-sm text-slate-400">{m.org}</p>
            </div>
            <span
              className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                KIND_STYLES[m.kind] ?? KIND_STYLES.LLM
              }`}
            >
              {m.kind}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">{m.description}</p>

          <div className="flex flex-wrap gap-1.5 text-xs">
            <span className="rounded bg-white/5 px-2 py-0.5 text-slate-400">
              {m.access}
            </span>
            <span className="rounded bg-white/5 px-2 py-0.5 text-slate-400">
              {m.license}
            </span>
            {m.tags.map((t) => (
              <span key={t} className="rounded bg-white/5 px-2 py-0.5 text-slate-500">
                #{t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            {m.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          {m.premium && (
            <div className="mt-1 rounded-lg border border-amber-400/20 bg-amber-400/5 p-3">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3L2 9.4h7.6z" />
                </svg>
                PRO INSIGHT
              </p>
              {ready && isPro ? (
                <p className="text-sm leading-relaxed text-slate-300">{m.proNotes}</p>
              ) : (
                <p className="text-sm text-slate-400">
                  <span className="select-none blur-sm">
                    Detailed cost and deployment analysis available to members.
                  </span>{" "}
                  <Link href="/pricing" className="font-medium text-amber-300 hover:underline">
                    Unlock with Pro →
                  </Link>
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

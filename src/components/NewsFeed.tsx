"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { NewsItem, NewsCategory, FREE_NEWS_LIMIT } from "@/lib/types";
import { usePlan } from "./PlanProvider";
import NewsCard from "./NewsCard";

const FILTERS: { value: NewsCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI" },
  { value: "tech", label: "Tech" },
  { value: "models", label: "Models" },
  { value: "business", label: "Business" },
];

export default function NewsFeed({
  items,
  live,
}: {
  items: NewsItem[];
  live: boolean;
}) {
  const { plan, ready } = usePlan();
  const [filter, setFilter] = useState<NewsCategory | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );

  const isPro = plan === "pro";
  const visible = isPro ? filtered : filtered.slice(0, FREE_NEWS_LIMIT);
  const hiddenCount = filtered.length - visible.length;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === f.value
                ? "bg-cyan-400 font-semibold text-slate-950"
                : "border border-white/15 text-slate-300 hover:border-cyan-400/50 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
        {!live && (
          <span className="ml-auto rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
            Offline mode — showing curated sample stories
          </span>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {ready && !isPro && hiddenCount > 0 && (
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent p-10 text-center">
          <h3 className="text-xl font-bold text-white">
            {hiddenCount} more stories today for Pro members
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Free readers get the top {FREE_NEWS_LIMIT} stories. Upgrade to Pro
            for the full real-time feed, all sources, and exclusive deals.
          </p>
          <Link
            href="/pricing"
            className="mt-5 inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-2.5 font-semibold text-slate-950 transition-opacity hover:opacity-90"
          >
            Unlock everything with Pro
          </Link>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-slate-400">
          No stories in this category right now — check back soon.
        </p>
      )}
    </div>
  );
}

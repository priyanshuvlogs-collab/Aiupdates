import { NewsItem } from "@/lib/types";

const CATEGORY_STYLES: Record<string, string> = {
  ai: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  tech: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  models: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  business: "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

const CATEGORY_LABELS: Record<string, string> = {
  ai: "AI",
  tech: "Tech",
  models: "Models",
  business: "Business",
};

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${Math.max(mins, 1)}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.06]"
    >
      <div className="flex items-center gap-2 text-xs">
        <span
          className={`rounded-full border px-2 py-0.5 font-medium ${
            CATEGORY_STYLES[item.category] ?? CATEGORY_STYLES.tech
          }`}
        >
          {CATEGORY_LABELS[item.category] ?? item.category}
        </span>
        <span className="text-slate-400">{item.source}</span>
        <span className="ml-auto text-slate-500">{timeAgo(item.publishedAt)}</span>
      </div>
      <h3 className="font-semibold leading-snug text-white group-hover:text-cyan-300">
        {item.title}
      </h3>
      {item.summary && (
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
          {item.summary}
        </p>
      )}
    </a>
  );
}

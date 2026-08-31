import Link from "next/link";
import { getNews } from "@/lib/news";
import NewsCard from "@/components/NewsCard";

export const revalidate = 600;

export default async function HomePage() {
  const { items } = await getNews();
  const topStories = items.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="mx-auto mb-4 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-300">
            Tech news · AI models · Exclusive deals
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Everything happening in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              tech &amp; AI
            </span>
            , in one place
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
            Aggregated news from the best sources, a curated directory of AI
            models, and member-only coupons for the tools you already pay for.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/news"
              className="rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 transition-opacity hover:opacity-90"
            >
              Read today&apos;s news
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/5"
            >
              See Pro plans
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Real-time news feed",
              desc: "Tech and AI stories aggregated from TechCrunch, The Verge, VentureBeat, Ars Technica, Hugging Face, and MIT Tech Review — refreshed every 10 minutes.",
              icon: "📰",
            },
            {
              title: "AI model resources",
              desc: "A curated directory of the models that matter — licenses, access, links, and Pro-only cost & deployment insights.",
              icon: "🧠",
            },
            {
              title: "Deals & coupons",
              desc: "Cloud credits, startup programs, and Pro-exclusive negotiated discounts that pay for your membership many times over.",
              icon: "🏷️",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-3 text-3xl">{f.icon}</div>
              <h3 className="mb-2 font-semibold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top stories */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Top stories</h2>
          <Link href="/news" className="text-sm text-cyan-400 hover:underline">
            View full feed →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topStories.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Freemium CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Free to read. <span className="text-cyan-400">Pro</span> to win.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-400">
            The free tier keeps you informed. Pro unlocks the full feed, model
            insights, and exclusive partner deals — from $9/month.
          </p>
          <Link
            href="/pricing"
            className="mt-6 inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3 font-semibold text-slate-950 transition-opacity hover:opacity-90"
          >
            Compare plans
          </Link>
        </div>
      </section>
    </div>
  );
}

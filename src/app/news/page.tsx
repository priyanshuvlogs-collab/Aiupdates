import type { Metadata } from "next";
import { getNews } from "@/lib/news";
import NewsFeed from "@/components/NewsFeed";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "News",
  description: "The latest tech and AI news, aggregated from top sources.",
};

export default async function NewsPage() {
  const { items, live } = await getNews();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Tech &amp; AI News</h1>
        <p className="mt-2 text-slate-400">
          Aggregated from TechCrunch, The Verge, VentureBeat, Ars Technica,
          Hugging Face, and MIT Tech Review. Refreshed every 10 minutes.
        </p>
      </div>
      <NewsFeed items={items} live={live} />
    </div>
  );
}

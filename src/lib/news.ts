import { NewsItem, NewsCategory } from "./types";
import { FALLBACK_NEWS } from "./fallback-news";

interface FeedSource {
  name: string;
  url: string;
  category: NewsCategory;
}

/**
 * Public RSS feeds we aggregate. All are freely accessible feeds published
 * by the sites themselves; we link readers back to the original article.
 */
const FEEDS: FeedSource[] = [
  { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/", category: "ai" },
  { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", category: "tech" },
  { name: "VentureBeat AI", url: "https://venturebeat.com/category/ai/feed/", category: "ai" },
  { name: "Ars Technica", url: "https://feeds.arstechnica.com/arstechnica/technology-lab", category: "tech" },
  { name: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml", category: "models" },
  { name: "MIT Tech Review", url: "https://www.technologyreview.com/feed/", category: "tech" },
];

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

let cache: { items: NewsItem[]; fetchedAt: number } | null = null;

function decodeEntities(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&amp;/g, "&");
}

function stripHtml(html: string): string {
  return decodeEntities(html).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function firstMatch(block: string, patterns: RegExp[]): string {
  for (const p of patterns) {
    const m = block.match(p);
    if (m?.[1]) return m[1].trim();
  }
  return "";
}

/** Minimal RSS 2.0 + Atom parser — avoids pulling in an XML dependency. */
function parseFeed(xml: string, source: FeedSource): NewsItem[] {
  const items: NewsItem[] = [];
  const blocks = xml.match(/<(?:item|entry)[\s>][\s\S]*?<\/(?:item|entry)>/g) ?? [];

  for (const block of blocks.slice(0, 12)) {
    const title = stripHtml(firstMatch(block, [/<title[^>]*>([\s\S]*?)<\/title>/]));

    let url = firstMatch(block, [/<link[^>]*?href="([^"]+)"[^>]*\/?>/, /<link[^>]*>([\s\S]*?)<\/link>/]);
    url = decodeEntities(url);

    const dateRaw = firstMatch(block, [
      /<pubDate>([\s\S]*?)<\/pubDate>/,
      /<published>([\s\S]*?)<\/published>/,
      /<updated>([\s\S]*?)<\/updated>/,
      /<dc:date>([\s\S]*?)<\/dc:date>/,
    ]);
    const date = dateRaw ? new Date(dateRaw) : new Date();

    const summaryRaw = firstMatch(block, [
      /<description>([\s\S]*?)<\/description>/,
      /<summary[^>]*>([\s\S]*?)<\/summary>/,
      /<content[^>]*>([\s\S]*?)<\/content>/,
    ]);
    const summary = stripHtml(summaryRaw).slice(0, 280);

    if (!title || !url) continue;

    items.push({
      id: `${source.name}:${url}`,
      title,
      url,
      source: source.name,
      category: source.category,
      publishedAt: isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString(),
      summary,
    });
  }
  return items;
}

async function fetchFeed(source: FeedSource): Promise<NewsItem[]> {
  try {
    const res = await fetch(source.url, {
      headers: { "user-agent": "AIupdates/1.0 (+news aggregator)" },
      signal: AbortSignal.timeout(6000),
      next: { revalidate: 600 },
    });
    if (!res.ok) return [];
    return parseFeed(await res.text(), source);
  } catch {
    return [];
  }
}

export async function getNews(): Promise<{ items: NewsItem[]; live: boolean }> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return { items: cache.items, live: true };
  }

  const results = await Promise.all(FEEDS.map(fetchFeed));
  const merged = results
    .flat()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  if (merged.length === 0) {
    // Network unavailable (or all feeds down) — serve curated fallback so the
    // product still demos well offline.
    return { items: FALLBACK_NEWS, live: false };
  }

  cache = { items: merged, fetchedAt: Date.now() };
  return { items: merged, live: true };
}

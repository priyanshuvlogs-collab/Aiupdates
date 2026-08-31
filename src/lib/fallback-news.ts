import { NewsItem } from "./types";

function daysAgo(n: number): string {
  return new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();
}

/**
 * Curated sample stories shown only when live RSS feeds are unreachable
 * (e.g. offline demos or restricted networks). Real deployments serve the
 * live aggregated feed.
 */
export const FALLBACK_NEWS: NewsItem[] = [
  {
    id: "fb-1",
    title: "Frontier labs race to scale reasoning models as inference costs fall",
    url: "https://techcrunch.com/category/artificial-intelligence/",
    source: "TechCrunch AI",
    category: "ai",
    publishedAt: daysAgo(0),
    summary:
      "Major AI labs are shipping successively cheaper reasoning-focused models, with per-token inference prices dropping sharply year over year while benchmark scores keep climbing.",
  },
  {
    id: "fb-2",
    title: "Open-weight model releases accelerate: what builders should know",
    url: "https://huggingface.co/blog",
    source: "Hugging Face Blog",
    category: "models",
    publishedAt: daysAgo(0),
    summary:
      "A wave of permissively licensed open-weight models is narrowing the gap with proprietary APIs, giving startups more options for self-hosting and fine-tuning.",
  },
  {
    id: "fb-3",
    title: "Data center buildout hits record pace on AI training demand",
    url: "https://www.theverge.com/tech",
    source: "The Verge",
    category: "tech",
    publishedAt: daysAgo(1),
    summary:
      "Hyperscalers continue multi-billion-dollar capital expenditure on GPU clusters and power infrastructure as training runs for next-generation frontier models grow.",
  },
  {
    id: "fb-4",
    title: "Enterprise AI spend shifts from pilots to production deployments",
    url: "https://venturebeat.com/category/ai/",
    source: "VentureBeat AI",
    category: "business",
    publishedAt: daysAgo(1),
    summary:
      "Surveys show a majority of large enterprises now run at least one generative-AI workload in production, with agentic workflows the fastest-growing category.",
  },
  {
    id: "fb-5",
    title: "New embedding models cut RAG costs while improving retrieval quality",
    url: "https://huggingface.co/blog",
    source: "Hugging Face Blog",
    category: "models",
    publishedAt: daysAgo(2),
    summary:
      "Smaller, faster embedding models are matching or beating older large embedders on retrieval benchmarks, making high-quality RAG pipelines dramatically cheaper.",
  },
  {
    id: "fb-6",
    title: "Regulators sharpen focus on AI transparency and provenance",
    url: "https://www.technologyreview.com/",
    source: "MIT Tech Review",
    category: "tech",
    publishedAt: daysAgo(2),
    summary:
      "Policymakers in the US, EU, and Asia are converging on disclosure requirements for AI-generated content and training-data provenance standards.",
  },
  {
    id: "fb-7",
    title: "GPU cloud price war heats up as new inference providers launch",
    url: "https://venturebeat.com/category/ai/",
    source: "VentureBeat AI",
    category: "business",
    publishedAt: daysAgo(3),
    summary:
      "Specialized inference clouds are undercutting hyperscaler GPU pricing, pushing serving costs for popular open models to new lows.",
  },
  {
    id: "fb-8",
    title: "Multimodal agents move from demos to daily workflows",
    url: "https://techcrunch.com/category/artificial-intelligence/",
    source: "TechCrunch AI",
    category: "ai",
    publishedAt: daysAgo(3),
    summary:
      "Agents that combine vision, browsing, and code execution are being embedded into productivity suites, with early data showing meaningful time savings.",
  },
  {
    id: "fb-9",
    title: "On-device AI: phone makers ship larger local models",
    url: "https://www.theverge.com/tech",
    source: "The Verge",
    category: "tech",
    publishedAt: daysAgo(4),
    summary:
      "Flagship phones now run multi-billion-parameter models locally for translation, summarization, and photo editing without a network connection.",
  },
  {
    id: "fb-10",
    title: "Fine-tuning vs. RAG vs. prompting: new research clarifies trade-offs",
    url: "https://huggingface.co/blog",
    source: "Hugging Face Blog",
    category: "models",
    publishedAt: daysAgo(4),
    summary:
      "A comprehensive evaluation across domains offers practical guidance on when fine-tuning beats retrieval augmentation and where prompting alone is enough.",
  },
  {
    id: "fb-11",
    title: "AI coding assistants reshape developer tooling market",
    url: "https://techcrunch.com/category/artificial-intelligence/",
    source: "TechCrunch AI",
    category: "ai",
    publishedAt: daysAgo(5),
    summary:
      "Adoption of AI pair-programming tools continues to climb, and IDE vendors are racing to integrate agentic code generation and review features.",
  },
  {
    id: "fb-12",
    title: "Synthetic data pipelines become standard for model training",
    url: "https://www.technologyreview.com/",
    source: "MIT Tech Review",
    category: "ai",
    publishedAt: daysAgo(5),
    summary:
      "Labs increasingly rely on carefully filtered synthetic datasets to boost reasoning performance, raising new questions about evaluation and data diversity.",
  },
  {
    id: "fb-13",
    title: "Video generation models cross the usability threshold for marketing teams",
    url: "https://venturebeat.com/category/ai/",
    source: "VentureBeat AI",
    category: "business",
    publishedAt: daysAgo(6),
    summary:
      "Text-to-video quality improvements are pushing adoption in advertising and social content, with per-clip costs falling below traditional production budgets.",
  },
  {
    id: "fb-14",
    title: "Chip startups target inference efficiency as training plateaus",
    url: "https://feeds.arstechnica.com/arstechnica/technology-lab",
    source: "Ars Technica",
    category: "tech",
    publishedAt: daysAgo(6),
    summary:
      "A new crop of silicon startups is optimizing for tokens-per-watt on inference workloads, betting that serving — not training — dominates future AI compute demand.",
  },
  {
    id: "fb-15",
    title: "Small language models find their niche in edge and embedded use",
    url: "https://huggingface.co/blog",
    source: "Hugging Face Blog",
    category: "models",
    publishedAt: daysAgo(7),
    summary:
      "Sub-3B-parameter models tuned for narrow tasks are proving good enough for classification, extraction, and routing at a fraction of the cost of large models.",
  },
  {
    id: "fb-16",
    title: "AI security: prompt-injection defenses mature as agents gain tool access",
    url: "https://feeds.arstechnica.com/arstechnica/technology-lab",
    source: "Ars Technica",
    category: "tech",
    publishedAt: daysAgo(7),
    summary:
      "As autonomous agents get permission to browse, email, and execute code, vendors are shipping layered defenses against prompt injection and data exfiltration.",
  },
];

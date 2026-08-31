export type NewsCategory = "ai" | "tech" | "models" | "business";

export interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: string;
  category: NewsCategory;
  publishedAt: string; // ISO date
  summary: string;
}

export interface ModelResource {
  name: string;
  org: string;
  kind: "LLM" | "Image" | "Audio" | "Video" | "Embedding" | "Multimodal";
  description: string;
  license: string;
  access: "Open weights" | "API only" | "Open source";
  links: { label: string; url: string }[];
  tags: string[];
  premium?: boolean; // deep-dive notes gated behind Pro
  proNotes?: string;
}

export interface Deal {
  id: string;
  tool: string;
  category: string;
  offer: string;
  code?: string;
  url: string;
  description: string;
  expires?: string;
  premium: boolean; // exclusive to Pro members
}

export type Plan = "free" | "pro";

export const FREE_NEWS_LIMIT = 12;

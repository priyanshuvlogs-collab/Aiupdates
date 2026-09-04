import { Deal } from "./types";

/**
 * Deals and credits directory. Public entries point at official free-tier /
 * startup-credit pages that vendors run permanently. Premium entries are
 * examples of the Pro-exclusive negotiated offers the business model is
 * built around — replace with real partner deals as they are signed.
 */
export const DEALS: Deal[] = [
  {
    id: "d-1",
    tool: "Google Cloud",
    category: "Cloud & GPU",
    offer: "$300 free credits for new accounts",
    url: "https://cloud.google.com/free",
    description:
      "New Google Cloud accounts get $300 in credits usable on GPUs and Vertex AI, plus an always-free tier.",
    premium: false,
  },
  {
    id: "d-2",
    tool: "AWS Activate",
    category: "Cloud & GPU",
    offer: "Up to $100k credits for startups",
    url: "https://aws.amazon.com/activate/",
    description:
      "Startups affiliated with accelerators or VCs can apply for large AWS credit packages covering training and inference.",
    premium: false,
  },
  {
    id: "d-3",
    tool: "Microsoft for Startups",
    category: "Cloud & GPU",
    offer: "Up to $150k Azure credits",
    url: "https://www.microsoft.com/en-us/startups",
    description:
      "Founders Hub members receive Azure credits plus OpenAI-on-Azure access, GitHub Enterprise, and support.",
    premium: false,
  },
  {
    id: "d-4",
    tool: "Hugging Face",
    category: "Models & Hosting",
    offer: "Free Spaces + community GPU grants",
    url: "https://huggingface.co/pricing",
    description:
      "Host demos on free Spaces; open-source projects can apply for community GPU grants for their demos.",
    premium: false,
  },
  {
    id: "d-5",
    tool: "OpenAI API",
    category: "APIs",
    offer: "Free trial credits for new orgs",
    url: "https://platform.openai.com/",
    description:
      "New API organizations periodically receive trial credits; batch API cuts costs 50% for async workloads.",
    premium: false,
  },
  {
    id: "d-6",
    tool: "Notion AI",
    category: "Productivity",
    offer: "Startup plan: 6 months free",
    url: "https://www.notion.so/startups",
    description: "Eligible startups get Notion Plus with unlimited AI free for six months.",
    premium: false,
  },
  {
    id: "d-7",
    tool: "GPU inference partner",
    category: "Cloud & GPU",
    offer: "20% off first 3 months",
    code: "AIUPDATES20",
    url: "/pricing",
    description:
      "Pro-exclusive negotiated discount with a dedicated GPU inference cloud. Unlock the partner link and code with Pro.",
    premium: true,
  },
  {
    id: "d-8",
    tool: "Vector database partner",
    category: "Infrastructure",
    offer: "3 months of the growth tier free",
    code: "AIUPDATESVDB",
    url: "/pricing",
    description:
      "Managed vector DB credits for RAG workloads, exclusively for AIupdates Pro members.",
    premium: true,
  },
  {
    id: "d-9",
    tool: "AI video suite partner",
    category: "Creative",
    offer: "40% off annual plans",
    code: "AIUPDATES40",
    url: "/pricing",
    description:
      "Pro members get a launch discount on a leading text-to-video and avatar generation suite.",
    premium: true,
  },
  {
    id: "d-10",
    tool: "Coding copilot partner",
    category: "Developer tools",
    offer: "2 months free on team plans",
    code: "AIUPDATESDEV",
    url: "/pricing",
    description:
      "Team-plan trial extension for an AI coding assistant, negotiated for Pro members.",
    premium: true,
  },
];

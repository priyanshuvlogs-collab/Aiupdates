import { ModelResource } from "./types";

export const MODEL_RESOURCES: ModelResource[] = [
  {
    name: "GPT (latest)",
    org: "OpenAI",
    kind: "Multimodal",
    description:
      "Flagship multimodal model family available via API, with strong reasoning, coding, and vision performance.",
    license: "Proprietary",
    access: "API only",
    links: [
      { label: "Platform docs", url: "https://platform.openai.com/docs" },
      { label: "Pricing", url: "https://openai.com/api/pricing/" },
    ],
    tags: ["reasoning", "coding", "vision"],
    premium: true,
    proNotes:
      "Best-in-class for complex agentic workflows. Watch cached-input pricing for high-volume RAG — it changes the cost math significantly versus open-weight self-hosting.",
  },
  {
    name: "Claude (latest)",
    org: "Anthropic",
    kind: "Multimodal",
    description:
      "Frontier model family known for long-context comprehension, careful instruction following, and strong coding ability.",
    license: "Proprietary",
    access: "API only",
    links: [
      { label: "API docs", url: "https://docs.anthropic.com/" },
      { label: "Pricing", url: "https://www.anthropic.com/pricing" },
    ],
    tags: ["long context", "coding", "agents"],
    premium: true,
    proNotes:
      "Top pick for long-document analysis and multi-step agent loops. Prompt caching makes repeated large-context calls far cheaper than naive usage.",
  },
  {
    name: "Gemini (latest)",
    org: "Google DeepMind",
    kind: "Multimodal",
    description:
      "Natively multimodal family with very large context windows and tight integration with Google Cloud tooling.",
    license: "Proprietary",
    access: "API only",
    links: [
      { label: "AI Studio", url: "https://aistudio.google.com/" },
      { label: "Vertex AI", url: "https://cloud.google.com/vertex-ai" },
    ],
    tags: ["multimodal", "long context", "video"],
  },
  {
    name: "Llama (latest)",
    org: "Meta",
    kind: "LLM",
    description:
      "The most widely adopted open-weight model family, with sizes for everything from edge devices to datacenter serving.",
    license: "Llama Community License",
    access: "Open weights",
    links: [
      { label: "Downloads", url: "https://www.llama.com/" },
      { label: "Hugging Face", url: "https://huggingface.co/meta-llama" },
    ],
    tags: ["open weights", "self-host", "fine-tuning"],
    premium: true,
    proNotes:
      "Ecosystem advantage is huge: the widest tooling, quantization, and fine-tuning support of any open family. Ideal default for self-hosted products.",
  },
  {
    name: "DeepSeek (latest)",
    org: "DeepSeek",
    kind: "LLM",
    description:
      "Open-weight reasoning models with exceptional cost-to-performance, including distilled variants for cheap serving.",
    license: "MIT (weights)",
    access: "Open weights",
    links: [
      { label: "Hugging Face", url: "https://huggingface.co/deepseek-ai" },
      { label: "API platform", url: "https://platform.deepseek.com/" },
    ],
    tags: ["reasoning", "open weights", "budget"],
  },
  {
    name: "Qwen (latest)",
    org: "Alibaba",
    kind: "Multimodal",
    description:
      "Broad open-weight family spanning text, vision, audio, and coding models with strong multilingual coverage.",
    license: "Apache 2.0 (most sizes)",
    access: "Open weights",
    links: [
      { label: "Hugging Face", url: "https://huggingface.co/Qwen" },
      { label: "GitHub", url: "https://github.com/QwenLM" },
    ],
    tags: ["multilingual", "open weights", "vision"],
  },
  {
    name: "Mistral (latest)",
    org: "Mistral AI",
    kind: "LLM",
    description:
      "European lab shipping both open-weight models and a competitively priced API, popular for efficient mid-size deployments.",
    license: "Apache 2.0 / Proprietary mix",
    access: "Open weights",
    links: [
      { label: "Docs", url: "https://docs.mistral.ai/" },
      { label: "Hugging Face", url: "https://huggingface.co/mistralai" },
    ],
    tags: ["efficient", "open weights", "EU"],
  },
  {
    name: "Stable Diffusion / FLUX",
    org: "Stability AI / Black Forest Labs",
    kind: "Image",
    description:
      "Leading open image-generation lineages, with FLUX models setting the open-weights quality bar for text-to-image.",
    license: "Varies by model",
    access: "Open weights",
    links: [
      { label: "FLUX on HF", url: "https://huggingface.co/black-forest-labs" },
      { label: "Stability AI", url: "https://stability.ai/" },
    ],
    tags: ["image", "open weights", "creative"],
  },
  {
    name: "Whisper",
    org: "OpenAI",
    kind: "Audio",
    description:
      "The default open-source speech-to-text model — robust multilingual transcription that runs anywhere from laptops to servers.",
    license: "MIT",
    access: "Open source",
    links: [
      { label: "GitHub", url: "https://github.com/openai/whisper" },
      { label: "Hugging Face", url: "https://huggingface.co/openai/whisper-large-v3" },
    ],
    tags: ["speech-to-text", "open source", "multilingual"],
  },
  {
    name: "Embedding leaders (MTEB)",
    org: "Various",
    kind: "Embedding",
    description:
      "Track the Massive Text Embedding Benchmark leaderboard to pick retrieval models — top spots change monthly.",
    license: "Varies",
    access: "Open weights",
    links: [
      { label: "MTEB Leaderboard", url: "https://huggingface.co/spaces/mteb/leaderboard" },
    ],
    tags: ["RAG", "retrieval", "benchmark"],
    premium: true,
    proNotes:
      "For most RAG products, a small open embedder plus a reranker beats a single large embedding model on both quality and cost. Benchmark on your own corpus before committing.",
  },
];

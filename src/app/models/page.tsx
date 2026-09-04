import type { Metadata } from "next";
import { MODEL_RESOURCES } from "@/lib/models";
import ModelGrid from "@/components/ModelGrid";

export const metadata: Metadata = {
  title: "AI Model Resources",
  description:
    "A curated directory of the AI models that matter — licenses, access, links, and Pro insights.",
};

export default function ModelsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">AI Model Resources</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          The models worth knowing right now: what they are, how you can access
          them, and where to start. Pro members also get cost and deployment
          insights on the major families.
        </p>
      </div>
      <ModelGrid models={MODEL_RESOURCES} />
    </div>
  );
}

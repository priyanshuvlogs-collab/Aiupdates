import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Free to read. Upgrade to Pro for the full feed, model insights, and exclusive deals.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white">Simple, honest pricing</h1>
        <p className="mx-auto mt-3 max-w-lg text-slate-400">
          Start free. Upgrade when the exclusive deals and insights start
          paying for themselves — usually with the first coupon you redeem.
        </p>
      </div>
      <PricingCards />

      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "What do I get with the free plan?",
              a: "The top stories of the day, the full model directory, and every public deal. Free is genuinely useful — that's the point of freemium.",
            },
            {
              q: "Why should I pay for Pro?",
              a: "The full real-time feed, cost and deployment insights on major models, and exclusive partner coupons. A single redeemed Pro deal usually covers the annual price.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Downgrade with one click and keep your free access forever.",
            },
            {
              q: "Where does the news come from?",
              a: "We aggregate public RSS feeds from leading tech publications and always link you to the original article.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

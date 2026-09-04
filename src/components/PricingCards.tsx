"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "./PlanProvider";
import { FREE_NEWS_LIMIT } from "@/lib/types";

const FREE_FEATURES = [
  `Top ${FREE_NEWS_LIMIT} tech & AI stories daily`,
  "AI model directory with links",
  "Public deals & startup credits",
  "Weekly email digest",
];

const PRO_FEATURES = [
  "Full real-time feed from every source",
  "Pro insights on every major model (cost & deployment analysis)",
  "Exclusive partner coupons & negotiated discounts",
  "Early access to new sections",
  "Priority support",
];

export default function PricingCards() {
  const { plan, ready, upgrade, downgrade } = usePlan();
  const [yearly, setYearly] = useState(true);
  const [justUpgraded, setJustUpgraded] = useState(false);

  const isPro = ready && plan === "pro";
  const price = yearly ? "$79" : "$9";
  const period = yearly ? "/year" : "/month";

  return (
    <div>
      <div className="mb-8 flex items-center justify-center gap-3">
        <span className={`text-sm ${!yearly ? "text-white" : "text-slate-400"}`}>Monthly</span>
        <button
          onClick={() => setYearly(!yearly)}
          aria-label="Toggle billing period"
          className="relative h-6 w-11 rounded-full bg-white/10 transition-colors"
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-cyan-400 transition-transform ${
              yearly ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
        </button>
        <span className={`text-sm ${yearly ? "text-white" : "text-slate-400"}`}>
          Yearly <span className="text-emerald-400">(save 27%)</span>
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Free plan */}
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-lg font-semibold text-white">Free</h3>
          <p className="mt-1 text-sm text-slate-400">Stay in the loop, forever free.</p>
          <p className="mt-4 text-4xl font-bold text-white">
            $0<span className="text-base font-normal text-slate-400">/forever</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
            {FREE_FEATURES.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-cyan-400">✓</span> {f}
              </li>
            ))}
          </ul>
          {isPro ? (
            <button
              onClick={downgrade}
              className="mt-8 rounded-lg border border-white/15 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5"
            >
              Switch back to Free
            </button>
          ) : (
            <div className="mt-8 rounded-lg border border-white/15 py-2.5 text-center text-sm text-slate-400">
              Your current plan
            </div>
          )}
        </div>

        {/* Pro plan */}
        <div className="relative flex flex-col rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-violet-500/5 p-8">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-1 text-xs font-bold text-slate-950">
            MOST POPULAR
          </span>
          <h3 className="text-lg font-semibold text-white">Pro</h3>
          <p className="mt-1 text-sm text-slate-400">
            For builders and operators who need the full picture.
          </p>
          <p className="mt-4 text-4xl font-bold text-white">
            {price}
            <span className="text-base font-normal text-slate-400">{period}</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
            {PRO_FEATURES.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-cyan-400">✓</span> {f}
              </li>
            ))}
          </ul>
          {isPro ? (
            <div className="mt-8 rounded-lg bg-emerald-400/15 py-2.5 text-center text-sm font-semibold text-emerald-300">
              ✓ You are a Pro member
            </div>
          ) : (
            <button
              onClick={() => {
                upgrade();
                setJustUpgraded(true);
              }}
              className="mt-8 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 py-2.5 font-semibold text-slate-950 transition-opacity hover:opacity-90"
            >
              Upgrade to Pro
            </button>
          )}
        </div>
      </div>

      {justUpgraded && (
        <div className="mt-8 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-center">
          <p className="font-semibold text-emerald-300">
            Welcome to Pro! Everything is unlocked.
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Head to the{" "}
            <Link href="/news" className="text-cyan-400 hover:underline">full feed</Link>{" "}
            or grab your{" "}
            <Link href="/deals" className="text-cyan-400 hover:underline">exclusive deals</Link>.
          </p>
        </div>
      )}

      <p className="mt-10 text-center text-xs text-slate-500">
        Demo checkout: the upgrade is stored locally in your browser. Connect
        Stripe (or any billing provider) to turn this into real revenue — the
        gating logic is already wired throughout the app.
      </p>
    </div>
  );
}

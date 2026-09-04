import type { Metadata } from "next";
import { DEALS } from "@/lib/deals";
import DealsGrid from "@/components/DealsGrid";

export const metadata: Metadata = {
  title: "Deals & Coupons",
  description:
    "Cloud credits, startup programs, and Pro-exclusive coupons for AI tools and infrastructure.",
};

export default function DealsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Deals &amp; Coupons</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Free cloud credits and startup programs anyone can claim, plus
          negotiated partner discounts exclusive to Pro members. One redeemed
          deal typically covers a year of membership.
        </p>
      </div>
      <DealsGrid deals={DEALS} />
    </div>
  );
}

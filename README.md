# AIupdates

A professional tech & AI news web app with a freemium business model.

**Features**

- **News feed** — tech and AI stories aggregated in real time from public RSS feeds (TechCrunch AI, The Verge, VentureBeat AI, Ars Technica, Hugging Face, MIT Tech Review), refreshed every 10 minutes, with category filters. Falls back to curated sample stories when offline.
- **AI model resources** — a curated directory of the models that matter (GPT, Claude, Gemini, Llama, DeepSeek, Qwen, Mistral, FLUX, Whisper, embeddings), with licenses, access type, links, and Pro-only cost/deployment insights.
- **Deals & coupons** — free cloud credits and startup programs anyone can claim, plus Pro-exclusive partner coupon codes.
- **Freemium model** — free readers get the top 12 stories and public content; Pro members ($9/mo or $79/yr) unlock the full feed, model insights, and exclusive deals. The upgrade flow is a local demo — connect Stripe or another billing provider to charge real money; the gating logic is already wired throughout the app.
- **JSON API** — `GET /api/news` returns the aggregated feed for future mobile apps or integrations.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS v4
- No database required — news is fetched from RSS at request time and cached in memory (10-minute TTL)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

Deploys cleanly to Vercel or any Node host.

## Turning on real payments

1. Create a Stripe account and add two prices (monthly + yearly).
2. Replace the demo `upgrade()` call in `src/components/PricingCards.tsx` with a Stripe Checkout redirect.
3. Set the plan from your auth/session (e.g. after the Stripe webhook fires) instead of `localStorage` in `src/components/PlanProvider.tsx`.

All Pro gating (news limit, model insights, exclusive deals) reads from one place — the `PlanProvider` context — so no other code changes are needed.

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 md:flex-row">
        <p>
          AI<span className="text-cyan-400">updates</span> — tech &amp; AI news,
          model resources, and member deals.
        </p>
        <div className="flex gap-4">
          <Link href="/news" className="hover:text-white">News</Link>
          <Link href="/models" className="hover:text-white">Models</Link>
          <Link href="/deals" className="hover:text-white">Deals</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
        </div>
      </div>
    </footer>
  );
}

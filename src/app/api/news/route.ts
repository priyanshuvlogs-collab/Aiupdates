import { NextResponse } from "next/server";
import { getNews } from "@/lib/news";

export const revalidate = 600;

export async function GET() {
  const { items, live } = await getNews();
  return NextResponse.json({ live, count: items.length, items });
}

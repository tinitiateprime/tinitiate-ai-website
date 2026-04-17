// app/api/rag/reindex/route.js
import { NextResponse } from "next/server";
import { reindex } from "@/lib/rag";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const origin = body?.origin || process.env.RAG_ORIGIN || "https://tinitiate.com";
    const maxPages = Number(body?.maxPages || 60);

    const stats = await reindex({ origin, maxPages });
    return NextResponse.json({ ok: true, origin, ...stats });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}

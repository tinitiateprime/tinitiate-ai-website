// app/api/rag/reindex/route.js
import { NextResponse } from "next/server";
import { reindex } from "@/lib/rag";
import {
  isOpenAIConfigured,
  OPENAI_MISSING_MESSAGE
} from "@/lib/openai.js";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    if (!isOpenAIConfigured()) {
      return NextResponse.json(
        {
          ok: false,
          code: "openai_not_configured",
          error: OPENAI_MISSING_MESSAGE
        },
        { status: 503 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const origin = body?.origin || process.env.RAG_ORIGIN || "https://tinitiateai.com";
    const maxPages = Number(body?.maxPages || 60);

    const stats = await reindex({ origin, maxPages });
    return NextResponse.json({ ok: true, origin, ...stats });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}

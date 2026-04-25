// app/api/diag/embed/route.js
import { NextResponse } from "next/server";
import {
  getOpenAIClient,
  isOpenAIConfigured,
  OPENAI_MISSING_MESSAGE
} from "@/lib/openai.js";

export const runtime = "nodejs";

export async function GET() {
  try {
    if (!isOpenAIConfigured()) {
      return NextResponse.json(
        {
          ok: false,
          code: "openai_not_configured",
          message: OPENAI_MISSING_MESSAGE
        },
        { status: 503 }
      );
    }

    const openai = getOpenAIClient();
    const { data } = await openai.embeddings.create({
      model: process.env.OPENAI_EMBED_MODEL || "text-embedding-3-small",
      input: ["test"],
    });
    return NextResponse.json({ ok: true, dims: data?.[0]?.embedding?.length });
  } catch (e) {
    return NextResponse.json({ ok: false, code: e?.code, message: e?.message }, { status: 500 });
  }
}

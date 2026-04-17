// app/api/diag/embed/route.js
import { NextResponse } from "next/server";
import { openai } from "@/lib/openai.js";

export const runtime = "nodejs";

export async function GET() {
  try {
    const { data } = await openai.embeddings.create({
      model: process.env.OPENAI_EMBED_MODEL || "text-embedding-3-small",
      input: ["test"],
    });
    return NextResponse.json({ ok: true, dims: data?.[0]?.embedding?.length });
  } catch (e) {
    return NextResponse.json({ ok: false, code: e?.code, message: e?.message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { getOpenAI } from "@lib/openai";

export const runtime = "nodejs";

export async function GET() {
  try {
    const openai = getOpenAI();

    const { data } = await openai.embeddings.create({
      model: process.env.OPENAI_EMBED_MODEL || "text-embedding-3-small",
      input: ["test"],
    });

    return NextResponse.json({
      ok: true,
      dims: data[0].embedding.length
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
import { NextResponse } from "next/server";
import { getOpenAI, CHAT_MODEL } from "@lib/openai";
import { searchTopK } from "@lib/rag";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const openai = getOpenAI();

    const { message, history } = await req.json();

    const results = await searchTopK(message, 4);
    const context = results.map(r => r.doc.content).join("\n\n");

    const stream = await openai.responses.create({
      model: CHAT_MODEL,
      stream: true,
      input: [
        { role: "system", content: context },
        ...(history || []),
        { role: "user", content: message }
      ]
    });

    const encoder = new TextEncoder();

    const body = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (event.type === "response.output_text.delta") {
            controller.enqueue(encoder.encode(event.delta));
          }
        }
        controller.close();
      }
    });

    return new NextResponse(body);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}


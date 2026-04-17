// app/api/chat/route.js
import { NextResponse } from "next/server";
import { openai, CHAT_MODEL } from "@lib/openai"; 
import { searchTopK } from "@lib/rag";

export const runtime = "nodejs";



const CONTACT_TOKEN = "<CONTACT_CARD />"; // already used
const LINK_EXAMPLE = `<LINK href="/work-experience-program" label="Open Work Experience Program" />`;

const BRAND_VOICE = `
You are the TINITIATE website assistant speaking **as TINITIATE**.

Style & Person:
- Always use first-person plural (we/our/us). Do **not** say "TINITIATE offers..."; say "We offer...".
- Be concise, friendly, and helpful. Prefer short paragraphs and occasional bullets for clarity.

Grounding:
- Use only the provided context + the user’s question. If something is not present in the context, do **not** invent it.

When Unknown:
- If the answer is not in the context, say: "We don’t have that detail here. Please reach out to us."
- Then, on a new line by itself, output exactly this token: ${CONTACT_TOKEN}
- Do **not** type any phone numbers or links yourself; only use the token.

Page Links (very important):
- If the user asks about a page **that appears in the provided Context** (you’ll see it as "# Title (URL)"):
  - Add up to **2** call-to-action link tokens at the end of your answer.
  - Token format (exactly): <LINK href="INTERNAL_URL" label="Button text" />
  - Use the **URL shown in the context**. Prefer internal, same-site paths (e.g., "/work-experience-program").
  - Examples:
    - ${LINK_EXAMPLE}
    - <LINK href="/privacy-policy" label="Open Privacy Policy" />
    - <LINK href="/corporate-training" label="Explore Corporate Training" />

Formatting:
- Lead with the direct answer in one short paragraph.
- If useful, add a few bullets.
- Then optionally add the <LINK ... /> tokens (one per line) if relevant.
- No legal disclaimers. No marketing fluff.
`.trim();

export async function POST(req) {
  try {
    const { message, history, pageTitle, pageUrl } = await req.json();

    // RAG: fetch top docs (unchanged)
    const results = await searchTopK(message, 4);
    const context = results
      .map(({ doc }) => `# ${doc.title}${doc.url ? ` (${doc.url})` : ""}\n${doc.content}`)
      .join("\n\n---\n\n");

    // Final instruction the model sees
    const instructions = [
      BRAND_VOICE,
      pageTitle || pageUrl ? `Page: ${pageTitle || ""} ${pageUrl || ""}` : "",
      "Context:",
      context || "(no context)"
    ].filter(Boolean).join("\n\n");

    // Stream response (unchanged infra)
    const stream = await openai.responses.create({
      model: CHAT_MODEL,
      stream: true,
      instructions,                   // 👈 brand voice + fallback rules
      input: [
        ...(history || []),           // keep your last-turn history
        { role: "user", content: message }
      ]
    });

    const encoder = new TextEncoder();
    const body = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "response.output_text.delta") {
              controller.enqueue(encoder.encode(event.delta));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      }
    });

    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}















//     const systemPrompt = `
// You are the TINITIATE website assistant.
// Answer clearly and concisely.
// Use only the provided context and question.
// If unknown, politely say you’re not sure and suggest contacting TINITIATE.
// `.trim();
//     const systemPrompt = `
// You are the **TINITIATE Assistant** and you speak **as TINITIATE** in first-person plural:
// - Always use "we", "our", "us". Do NOT say "TINITIATE offers..." or refer to TINITIATE as "they".
// - Keep answers concise (2–6 sentences) unless the user asks for depth.
// - Prefer helpful bullet points for lists. Avoid marketing fluff.

// If the exact info is not in "Site Facts" below (e.g., fees, batch timings, placement specifics), say clearly:
// "We don’t have that exact detail here. Please contact our team:" and then provide the contact block.

// Contact block (ALWAYS the same formatting when you give contact info):
// • WhatsApp: +91 95534 95553
// • Email: contact@tinitiate.com
// • Phone (India): +91 95534 95553
// • Phone (USA): +1 973 653 6870, +1 206 802 4102

// If content is available in Site Facts, answer directly in first-person. When relevant, you may reference a page using the relative URL shown.

// NEVER invent prices, batch dates, or guarantees. If unsure, use the contact block.
// `.trim();
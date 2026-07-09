import { AIProjectClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROJECT_ENDPOINT =
  process.env.AZURE_AI_PROJECT_ENDPOINT ||
  "https://tiai-web-bot.services.ai.azure.com/api/projects/TiAi-Web-Bot";

const AGENT_NAME =
  process.env.AZURE_AI_AGENT_NAME ||
  process.env.AZURE_AI_AGENT_ID ||
  "aibottiaia";

const RESPONSE_STYLE = "Answer briefly and directly. Use 2-5 short bullets or lines unless the user asks for detail. Do not include citations, file names, filecite markers, or source tokens in the visible answer.";

let projectClient;

function getProjectClient() {
  if (!projectClient) {
    projectClient = new AIProjectClient(PROJECT_ENDPOINT, new DefaultAzureCredential());
  }

  return projectClient;
}

function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function buildFirstTurnMessage(message, history = [], pageTitle, pageUrl) {
  const usableHistory = Array.isArray(history)
    ? history
        .filter((item) => ["user", "assistant"].includes(item?.role) && cleanText(item?.content))
        .slice(-8)
    : [];

  const contextLines = [
    pageTitle ? `Current page title: ${pageTitle}` : "",
    pageUrl ? `Current page URL: ${pageUrl}` : "",
  ].filter(Boolean);

  if (!usableHistory.length && !contextLines.length) return message;

  const transcript = usableHistory
    .map((item) => `${item.role === "user" ? "User" : "Assistant"}: ${cleanText(item.content)}`)
    .join("\n");

  return [
    contextLines.length ? contextLines.join("\n") : "",
    transcript ? `Conversation so far:\n${transcript}` : "",
    `User question:\n${message}`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

function withResponseStyle(message) {
  return `${RESPONSE_STYLE}\n\n${message}`;
}

function getSafeErrorMessage(error) {
  const message = cleanText(error?.message);

  if (message.includes("credential") || message.includes("authentication") || message.includes("Unauthorized")) {
    return "Azure AI is connected, but the server is not authenticated yet. Run npm run azure:login, or enable a managed identity with access to the Foundry project.";
  }

  return message || "Azure AI assistant failed to respond. Please try again.";
}

async function createConversation(openAIClient, content) {
  const conversation = await openAIClient.conversations.create({
    items: [{ type: "message", role: "user", content }],
  });
  return conversation.id;
}

export async function POST(req) {
  try {
    const { message, history, conversationId, pageTitle, pageUrl } = await req.json();
    const userMessage = cleanText(message);

    if (!userMessage) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const project = getProjectClient();
    const openAIClient = project.getOpenAIClient();
    let activeConversationId = cleanText(conversationId);
    const firstTurnMessage = withResponseStyle(buildFirstTurnMessage(userMessage, history, pageTitle, pageUrl));

    if (activeConversationId) {
      try {
        await openAIClient.conversations.items.create(activeConversationId, {
          items: [{ type: "message", role: "user", content: withResponseStyle(userMessage) }],
        });
      } catch {
        activeConversationId = await createConversation(openAIClient, firstTurnMessage);
      }
    } else {
      activeConversationId = await createConversation(openAIClient, firstTurnMessage);
    }

    const azureStream = await openAIClient.responses.create(
      { conversation: activeConversationId, stream: true },
      { body: { agent_reference: { name: AGENT_NAME, type: "agent_reference" } } },
    );

    const encoder = new TextEncoder();
    const body = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of azureStream) {
            if (event.type === "response.output_text.delta" && event.delta) {
              controller.enqueue(encoder.encode(event.delta));
            }
          }
        } catch (error) {
          controller.enqueue(encoder.encode(getSafeErrorMessage(error)));
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Azure-Conversation-Id": activeConversationId,
      },
    });
  } catch (error) {
    console.error("Azure AI chat error:", error);
    return NextResponse.json({ error: getSafeErrorMessage(error) }, { status: 500 });
  }
}

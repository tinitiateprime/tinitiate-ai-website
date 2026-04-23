// lib/openai.js
import OpenAI from "openai";

let openaiClient;

export function getOpenAI() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY environment variable.");
  }

  openaiClient ??= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // server-only
  });

  return openaiClient;
}

export const CHAT_MODEL =
  process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";

export const EMBED_MODEL =
  process.env.OPENAI_EMBED_MODEL?.trim() || "text-embedding-3-small";

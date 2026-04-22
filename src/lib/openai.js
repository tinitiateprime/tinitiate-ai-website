// lib/openai.js
import OpenAI from "openai";

let openaiClient;

export function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY?.trim();

  if (!apiKey) {
    throw new Error(
      "Missing OPENAI_API_KEY. Set the environment variable before using OpenAI-backed routes."
    );
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey });
  }

  return openaiClient;
}

export const CHAT_MODEL =
  process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";

export const EMBED_MODEL =
  process.env.OPENAI_EMBED_MODEL?.trim() || "text-embedding-3-small";

// lib/openai.js
import OpenAI from "openai";

let openaiClient;

export const OPENAI_MISSING_MESSAGE =
  "Missing OPENAI_API_KEY. Set the environment variable before using OpenAI-backed routes.";

export function isOpenAIConfigured() {
  return Boolean(process.env.OPENAI_API_KEY?.trim());
}

export function getOpenAIClient() {
  if (!isOpenAIConfigured()) {
    throw new Error(OPENAI_MISSING_MESSAGE);
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY.trim() });
  }

  return openaiClient;
}

export const CHAT_MODEL =
  process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";

export const EMBED_MODEL =
  process.env.OPENAI_EMBED_MODEL?.trim() || "text-embedding-3-small";

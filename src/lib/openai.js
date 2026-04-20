// lib/openai.js
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // server-only
});

export const CHAT_MODEL =
  process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";

export const EMBED_MODEL =
  process.env.OPENAI_EMBED_MODEL?.trim() || "text-embedding-3-small";

"use client";

import { useEffect, useRef, useState } from "react";
import {
  BotMessageSquare,
  X,
  Send,
  ChevronDown,
  Loader2,
  Phone,
  Mail
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// --- Config ---
const LS_KEY = "tinitiate_chat_v1";
const CONVERSATION_KEY = "tinitiate_azure_conversation_v1";
// const COACHMARK_KEY = "tinitiate_fab_seen_v1";

const ASSISTANT_AVATAR = "/images/tinitiatelogoicon.png";
const USER_AVATAR_LETTER = "You";

// Handoff links
const WHATSAPP_LINK = "https://wa.me/916309123485";
// const EMAIL_LINK = "mailto:contact@tinitiateai.com?subject=Tinitiate AI Solutions%20Website%20Chat&body=Hi%20Tinitiate%20AI%20Solutions%2C%0A%0A";
const EMAIL_LINK = "mailto:contact@tinitiateai.com?subject=Tinitiate AI Solutions%20Enquiry%20from%20Website%3A%20%5BService%5D%20%E2%80%94%20%5BYour%20Name%2C%20Company%5D&body=Hi%20Tinitiate%20AI%20Solutions%20Team%2C%0A%0AI%20am%20interested%20in%20%5BService%5D.%0A%0AName%3A%20%5BYour%20Name%5D%0ACompany%3A%20%5BCompany%5D%0APhone%2FWhatsApp%3A%20%5B%2B91XXXXXXXXXX%5D%0APreferred%20contact%20time%20(IST)%3A%20%5BTime%5D%0ABrief%3A%20%5BOne-two%20lines%5D%0A%0AThanks%2C%0A%5BYour%20Name%5D";
const PHONE_LINK_IN = "tel:+916309123485";
const QUICK_PROMPTS = [
  "Which course is best for a beginner?",
  "Explain professional training fees.",
  "Do you provide placement support?",
  "What is the Work Experience Program?",
  "Which cloud course should I choose?",
  "Do you have weekend batches?",
  "How do I join Java Full Stack?",
  "What is included in mentor guidance?",
  "Tell me about refund policy.",
  "How can I request a callback?",
  "Do you offer corporate training?",
  "What projects will I build?",
];
// The model will output this token when it wants UI contact cards to show
const CONTACT_TOKEN = "<CONTACT_CARD />";
const AI_DISABLED_MESSAGE = [
  "Hi! Our AI assistant is not enabled on this environment yet, but our team can still help you directly.",
  CONTACT_TOKEN,
  '<LINK href="/request-callback" label="Request a Callback" />'
].join("\n");

// --- Helpers ---
const CITATION_MARKER_RE = /\uE200(?:filecite|cite|source)[\s\S]*?\uE201/g;
const OPEN_CITATION_MARKER_RE = /\uE200(?:filecite|cite|source)[\s\S]*$/g;

function stripCitationMarkers(text = "") {
  return String(text)
    .replace(CITATION_MARKER_RE, "")
    .replace(OPEN_CITATION_MARKER_RE, "");
}

function hasContactToken(text = "") {
  return text.includes(CONTACT_TOKEN);
}
function stripContactToken(text = "") {
  return text.replace(CONTACT_TOKEN, "").trim();
}
function ContactHandoff() {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full text-sm border border-emerald-300 bg-emerald-50 text-emerald-800 transition hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200 dark:hover:bg-emerald-900/70"
        title="WhatsApp"
      >
        WhatsApp us
      </a>
      <a
        href={EMAIL_LINK}
        className="px-3 py-1.5 rounded-full text-sm border border-blue-300 bg-blue-50 text-blue-800 transition hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-200 dark:hover:bg-blue-900/70"
        title="Email"
      >
        Email us
      </a>
      <a
        href={PHONE_LINK_IN}
        className="px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-gray-50 text-gray-800 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        title="Call (India)"
      >
        {/* Call (India) */}
        Call
      </a>
      {/* <a
        href={PHONE_LINK_US}
        className="px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100 transition"
        title="Call (USA)"
      >
        Call (USA)
      </a> */}
      {/* <a
        href="tel:+12068024102"
        className="px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100 transition"
        title="Alt (USA)"
      >
        Alt (USA)
      </a> */}
    </div>
  );
}

// Append streamed delta safely (avoid repeated “the the”, etc.)
function appendDeltaSafely(prev, delta) {
  if (!delta) return prev;
  const d = String(delta).replace(/\r\n?/g, "\n");
  const maxOverlap = Math.min(200, prev.length, d.length);
  for (let len = maxOverlap; len > 0; len--) {
    if (prev.slice(-len) === d.slice(0, len)) return prev + d.slice(len);
  }
  return prev + d;
}

// Optional light de-stutter pass once streaming ends
function cleanupStutter(text) {
  let t = stripCitationMarkers(text);
   // collapse duplicated words, but letters only (avoid touching numbers)
  t = t.replace(/\b([A-Za-z]+)(\s+\1\b)+/g, "$1");      // words only
  // collapse duplicate punctuation
  t = t.replace(/([,.!?])\s*\1+/g, "$1 ");             // duplicate punctuation
  // tidy spaces/newlines
  t = t.replace(/[ \t]{2,}/g, " ").replace(/\n{3,}/g, "\n\n");
  return t.trim();
}

function Coachmark({ onDismiss, prefersReducedMotion }) {
  return (
    <AnimatePresence>
      <motion.button
        type="button"
        onClick={onDismiss}
        initial={prefersReducedMotion ? false : { opacity: 0, x: 16, scale: 0.98 }}
        animate={prefersReducedMotion ? false : { opacity: 1, x: 0, scale: 1 }}
        exit={prefersReducedMotion ? false : { opacity: 0, x: 16, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="hidden absolute bottom-1 right-16 max-w-[min(72vw,260px)] sm:block sm:max-w-none"
        aria-label="Dismiss chat hint"
        title="Chat with us"
      >
        <div className="relative drop-shadow-lg">
          {/* pill */}
          <div className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg px-3 py-1.5 text-xs md:text-[13px]">
  Need help? <span className="font-semibold">Chat with us</span>
</div>

          {/* triangle tail (right-pointing, not a rotated square/diamond) */}
          <svg
            viewBox="0 0 24 24"
            className="absolute -right-3 bottom-2.5 w-4 h-4"
            aria-hidden="true"
          >
            <polygon
              points="0,12 14,4 14,20"
              className="fill-indigo-600"
              stroke="#e5e7eb" /* gray-200 */
              strokeWidth="1"
            />
          </svg>
        </div>
      </motion.button>
    </AnimatePresence>
  );
}

// Parse <LINK href="... " label="..."/> tokens
const LINK_RE = /<LINK\s+href="([^"]+)"\s+label="([^"]+)"\s*\/>/g;

function extractLinks(text = "") {
  const links = [];
  let match;
  while ((match = LINK_RE.exec(text)) !== null) {
    links.push({ href: match[1], label: match[2] });
  }
  return links;
}
function stripLinks(text = "") {
  return text.replace(LINK_RE, "").trim();
}

function LinkCTA({ href, label }) {
  const isInternal =
    href?.startsWith("/") ||
    (typeof window !== "undefined" && href?.startsWith(window.location.origin));

  const classes =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border shadow-sm transition " +
    "border-indigo-300 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-200 dark:hover:bg-indigo-900/70";

  const inner = (
    <>
      {label}
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden className="opacity-80">
        <path d="M7 12h10M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </>
  );

  if (isInternal) {
    const clean = href.startsWith("http") ? new URL(href).pathname : href;
    return (
      <Link href={clean} className={classes} prefetch>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
    </a>
  );
}

// Render assistant message with token support (safe while streaming)
function AssistantMessage({ content, isStreaming }) {
  const cleanContent = stripCitationMarkers(content);
  // 1) Strip the contact token from the text; show your handoff buttons separately (you already do this)
  const textNoContact = stripContactToken(cleanContent);

  // 2) If streaming the *last* assistant chunk, don't parse LINK tokens yet
  if (isStreaming) {
    return <>{textNoContact}</>;
  }

  // 3) After stream completes, parse out link tokens and render CTAs
  const links = extractLinks(textNoContact);
  const finalText = stripLinks(textNoContact);

  return (
    <>
      {finalText}
      {!!links.length && (
        <div className="mt-2 flex flex-wrap gap-2">
          {links.slice(0, 2).map((l, i) => (
            <LinkCTA key={`${l.href}-${i}`} href={l.href} label={l.label} />
          ))}
        </div>
      )}
      {hasContactToken(cleanContent) && <ContactHandoff />}
    </>
  );
}

export default function ChatWidget({ aiEnabled = true }) {
  const [panelOpen, setPanelOpen] = useState(false);

  // One-time coachmark next to FAB
  const [showCoach, setShowCoach] = useState(false);
  function hideCoach() {
    setShowCoach(false);
    // if (typeof window !== "undefined") localStorage.setItem(COACHMARK_KEY, "1");
  }
  useEffect(() => {
    if (typeof window === "undefined") return;
    // const seen = localStorage.getItem(COACHMARK_KEY);
    // if (seen) return;

    const t1 = setTimeout(() => setShowCoach(true), 1200);
    const t2 = setTimeout(() => {
      hideCoach();
    }, 9000);

    const onScroll = () => {
      hideCoach();
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Chat state (with localStorage)
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [promptOffset, setPromptOffset] = useState(0);
  const [conversationId, setConversationId] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(CONVERSATION_KEY) || "";
  });
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || "null");
        if (aiEnabled && Array.isArray(saved) && saved.length) return saved;
      } catch {}
    }
    return [
      {
        role: "assistant",
        content: aiEnabled
          ? "Hi! I am the Tinitiate AI assistant. Ask me about courses, pricing, placement, batches, or policies."
          : AI_DISABLED_MESSAGE
      }
    ];
  });
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem(LS_KEY, JSON.stringify(messages));
  }, [messages]);

  function rememberConversationId(nextConversationId) {
    if (!nextConversationId) return;
    setConversationId(nextConversationId);
    if (typeof window !== "undefined") {
      localStorage.setItem(CONVERSATION_KEY, nextConversationId);
    }
  }

  useEffect(() => {
    if (aiEnabled) return;
    setMessages([{ role: "assistant", content: AI_DISABLED_MESSAGE }]);
  }, [aiEnabled]);

  useEffect(() => {
    if (!panelOpen || busy) return undefined;
    const timer = window.setInterval(() => {
      setPromptOffset((current) => (current + 1) % QUICK_PROMPTS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [panelOpen, busy]);

  // Scrolling and references
  const [atBottom, setAtBottom] = useState(true);
  const panelRef = useRef(null);
  const fabRef = useRef(null);
  const messagesRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    const onScroll = () => setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 24);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape" && panelOpen) setPanelOpen(false);
    }
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("keydown", onEsc);
    };
  }, [panelOpen]);

  // Reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Streaming
  const abortRef = useRef(null);
  const textRef = useRef(null);

  function openPanel() {
    hideCoach();
    setPanelOpen(true);
    if (aiEnabled) {
      setTimeout(() => textRef.current?.focus(), 60);
    }
  }

  useEffect(() => {
    if (panelOpen && atBottom) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, panelOpen, atBottom]);

  function handleInputChange(e) {
    setInput(e.target.value);
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = Math.min(120, ta.scrollHeight) + "px";
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) sendMessage(input);
    }
  }

  function replaceLastAssistantMessage(nextContent) {
    setMessages(prev => {
      const copy = [...prev];
      const last = copy[copy.length - 1];

      if (last?.role === "assistant") {
        last.content = nextContent;
        return copy;
      }

      return [...copy, { role: "assistant", content: nextContent }];
    });
  }

  async function readErrorMessage(response) {
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const payload = await response.json().catch(() => null);
      return payload?.error || payload?.message || payload?.details || null;
    }

    const text = await response.text().catch(() => "");
    return text.trim() || null;
  }

  async function sendMessage(text) {
    const userText = text.trim();
    if (!aiEnabled || !userText || busy) return;

    const historyToSend = messages.slice(-6);
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setMessages(prev => [...prev, { role: "user", content: userText }, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        signal: abortRef.current.signal,
        body: JSON.stringify({
          message: userText,
          history: historyToSend,
          conversationId,
          pageTitle: document.title,
          pageUrl: window.location.href
        })
      });
      if (!res.ok) {
        const errorMessage =
          (await readErrorMessage(res)) ||
          "Sorry, something went wrong. Please try again.";
        throw new Error(errorMessage);
      }
      if (!res.body) {
        throw new Error("The assistant returned an empty response. Please try again.");
      }

      rememberConversationId(res.headers.get("x-azure-conversation-id"));

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let partial = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });

        partial = appendDeltaSafely(partial, chunk);
        replaceLastAssistantMessage(stripCitationMarkers(partial));
      }

      replaceLastAssistantMessage(cleanupStutter(partial));
    } catch (err) {
      if (err?.name !== "AbortError") {
        console.error("Chat error:", err);
        replaceLastAssistantMessage(
          err?.message || "Sorry, something went wrong. Please try again."
        );
      }
    } finally {
      setBusy(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) sendMessage(input);
  }

  function clearConversation() {
    setMessages([
      {
        role: "assistant",
        content: aiEnabled
          ? "Welcome to Tinitiate AI Solutions. What would you like to know?"
          : AI_DISABLED_MESSAGE
      }
    ]);
    if (typeof window !== "undefined") localStorage.removeItem(LS_KEY);
    if (typeof window !== "undefined") localStorage.removeItem(CONVERSATION_KEY);
    setConversationId("");
  }

  const panelTitle = aiEnabled
    ? "Tinitiate AI Solutions Assistant"
    : "Contact Tinitiate AI Solutions";
  const promptChoices = [
    QUICK_PROMPTS[promptOffset % QUICK_PROMPTS.length],
    QUICK_PROMPTS[(promptOffset + 4) % QUICK_PROMPTS.length],
    QUICK_PROMPTS[(promptOffset + 8) % QUICK_PROMPTS.length],
  ];

  // Chat panel — floating card on ALL screens
  const chatPanel = (
    <motion.div
      ref={panelRef}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      transition={{ duration: 0.22 }}
      className={[
        "fixed z-[1003]",
        "inset-x-3 bottom-20",
        "w-auto sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[min(92vw,430px)]",
        "h-[min(76vh,660px)] max-h-[660px]",
        "flex flex-col overflow-hidden",
        "rounded-[1.6rem] border border-white/70 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.28)] ring-1 ring-slate-900/5 dark:border-slate-700 dark:bg-slate-950 dark:shadow-[0_28px_90px_rgba(2,6,23,0.65)]"
      ].join(" ")}
      role="dialog"
      aria-label="Tinitiate AI Solutions chat"
    >
      {/* Header with Close X on the right */}
      <div className="flex items-center justify-between bg-[#12345f] px-4 py-3.5 text-white shadow-sm">
        <div className="flex min-w-0 items-center gap-3">
<div className="grid h-9 w-9 aspect-square shrink-0 place-items-center self-center overflow-hidden rounded-2xl bg-white shadow-sm">
  <Image
    src={ASSISTANT_AVATAR}
    alt=""
    width={24}
    height={24}
    className="h-6 w-6 object-contain"
  />
</div>
          <div className="min-w-0">
            <div className="truncate text-sm font-black tracking-wide">{panelTitle}</div>
            <div className="text-[11px] font-semibold text-blue-100">Azure AI assistant</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            onClick={clearConversation}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-blue-50 transition hover:bg-white/10"
            title="Clear conversation"
          >
            Clear
          </button>
          <button
            onClick={() => setPanelOpen(false)}
            aria-label="Close chat"
            className="rounded-full p-2 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
            title="Close"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-[#12345f] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
        <span className="text-slate-500 dark:text-slate-400">Human support</span>
        <div className="flex items-center gap-2">
          <a href={PHONE_LINK_IN} className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 transition hover:border-[#c9a227] dark:border-slate-700">
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
          <a href={EMAIL_LINK} className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 transition hover:border-[#c9a227] dark:border-slate-700">
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesRef}
        className="flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] px-4 py-5 dark:bg-[linear-gradient(180deg,#0f172a_0%,#020617_100%)] md:px-5"
        role="log"
        aria-live="polite"
        aria-relevant="additions text"
      >
        {messages.map((m, i) => {
    const isStreamingLastAssistant = busy && i === messages.length - 1 && m.role === "assistant";
    return (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} gap-3 items-start`}>
            {m.role === "assistant" && (
              <div className="mt-1 grid h-8 w-8 aspect-square shrink-0 place-items-center overflow-hidden rounded-2xl border border-white bg-white shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <Image
                src={ASSISTANT_AVATAR}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              </div>
            )}
            <div
              className={[
                "max-w-[82%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-[0.94rem] leading-7 shadow-sm",
                m.role === "user"
                  ? "rounded-tr-md bg-[#12345f] text-white"
                  : "rounded-tl-md border border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              ].join(" ")}
            >
              {m.role === "assistant" ? (
  <AssistantMessage content={m.content} isStreaming={isStreamingLastAssistant} />
) : (
  m.content
)}
            </div>
            {m.role === "user" && (
              <div
                className="mt-1 grid h-8 w-8 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-[10px] font-black text-[#12345f] shadow-sm"
                aria-hidden
              >
                {USER_AVATAR_LETTER}
              </div>
            )}
          </div>
        );
})}

        {busy && (
          <div className="flex items-center gap-2 pl-9 text-xs text-gray-500 dark:text-slate-400">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Tinitiate AI Solutions is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {aiEnabled ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950">
          <div className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">Try asking</div>
          <div className="grid gap-2 sm:grid-cols-3">
            {promptChoices.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                disabled={busy}
                className="min-h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs font-bold leading-snug text-[#12345f] transition hover:border-[#c9a227] hover:bg-[#fff8df] disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950">
        <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-inner focus-within:border-[#c9a227] focus-within:bg-white dark:border-slate-700 dark:bg-slate-900 dark:focus-within:bg-slate-950">
          <textarea
            ref={textRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={!aiEnabled || busy}
            placeholder={
              aiEnabled
                ? "Ask about courses, fees, placement..."
                : "AI chat is unavailable here. Use WhatsApp, email, or call instead."
            }
            className="max-h-28 min-h-10 flex-1 resize-none border-0 bg-transparent px-2 py-2 text-[0.95rem] leading-6 text-slate-900 placeholder:text-slate-500 focus:outline-none disabled:cursor-not-allowed dark:text-slate-100 dark:placeholder:text-slate-500"
          />
          <button
            type="submit"
            disabled={!aiEnabled || !input.trim() || busy}
            className={[
              "grid h-10 w-10 shrink-0 place-items-center rounded-2xl font-medium transition",
              !aiEnabled || busy
                ? "cursor-not-allowed bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                : "bg-[#12345f] text-white hover:bg-[#1d4775]"
            ].join(" ")}
            aria-label="Send message"
            title="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Scroll to bottom pill */}
      {!atBottom && (
        <button
          onClick={() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="absolute left-1/2 bottom-[5.5rem] z-[1004] flex -translate-x-1/2 items-center gap-1 rounded-full bg-gray-900 px-3 py-1.5 text-xs text-white shadow-lg hover:bg-black/90 sm:bottom-20"
          aria-label="Scroll to newest messages"
        >
          <ChevronDown className="w-3.5 h-3.5" />
          New messages
        </button>
      )}
    </motion.div>
  );

  const dial = (
    <div className="fixed bottom-4 right-4 z-[1004] sm:bottom-6 sm:right-6" ref={fabRef}>
      <div className="relative h-16 w-16">
{showCoach && (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-[#12345f]/30 animate-ping"
  />
)}

{/* Coachmark pill (first-time nudge) */}
{showCoach && (
  <Coachmark onDismiss={hideCoach} prefersReducedMotion={prefersReducedMotion} />
)}

        {/* Main FAB — absolutely anchored in this box; icons crossfade so there’s never any “slide left” */}
        <button
          onClick={() => (panelOpen ? setPanelOpen(false) : openPanel())}
          aria-label={panelOpen ? "Close AI chat" : "Open AI chat"}
          className="absolute inset-0 grid place-items-center rounded-[1.4rem] bg-[#12345f] text-white shadow-[0_18px_45px_rgba(18,52,95,0.35)] ring-4 ring-white transition hover:-translate-y-0.5 hover:bg-[#1d4775] focus:outline-none focus:ring-[#c9a227]/40 dark:ring-slate-900"
        >
          <span
            className={`absolute inset-0 grid place-items-center pointer-events-none transition-[opacity,transform] duration-200 ${
              panelOpen ? "opacity-0 scale-95 rotate-6" : "opacity-100 scale-100 rotate-0"
            }`}
            aria-hidden="true"
          >
            <BotMessageSquare className="w-6 h-6 text-white" />
          </span>
          <span
            className={`absolute inset-0 grid place-items-center pointer-events-none transition-[opacity,transform] duration-200 ${
              panelOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 -rotate-6"
            }`}
            aria-hidden="true"
          >
            <X className="w-6 h-6 text-white" />
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* One floating button (includes WhatsApp/Email/Call) */}
      {dial}

      {/* Chat panel */}
      <AnimatePresence>{panelOpen && chatPanel}</AnimatePresence>
    </>
  );
}

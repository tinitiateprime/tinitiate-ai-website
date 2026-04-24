"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const DEFAULT_FAVICON_PATH = "/favicon.png";
const LOADING_MINIMUM_MS = 260;
const LOADING_FAILSAFE_MS = 8000;
const FAVICON_FRAME_INTERVAL_MS = 110;
const CONTROLLED_FAVICON_LINKS = [
  { id: "app-favicon", rel: "icon" },
  { id: "app-shortcut-icon", rel: "shortcut icon" },
];
const SPINNER_DOTS = Array.from({ length: 10 }, (_, index) => {
  const angle = ((index * 36) - 90) * (Math.PI / 180);
  return {
    x: 16 + (Math.cos(angle) * 10.2),
    y: 16 + (Math.sin(angle) * 10.2),
  };
});

function buildLoadingFavicon(frameIndex) {
  const activeIndex = frameIndex % SPINNER_DOTS.length;

  const circles = SPINNER_DOTS.map((dot, index) => {
    const distance = (index - activeIndex + SPINNER_DOTS.length) % SPINNER_DOTS.length;
    const radius = distance === 0 ? 2.65 : distance === 1 ? 2.35 : distance === 2 ? 2.1 : 1.85;
    const fill = distance === 0 ? "#2563eb" : distance === 1 ? "#60a5fa" : "#94a3b8";
    const opacity = distance === 0 ? 1 : distance === 1 ? 0.72 : distance === 2 ? 0.45 : 0.16;

    return `<circle cx="${dot.x.toFixed(2)}" cy="${dot.y.toFixed(2)}" r="${radius}" fill="${fill}" opacity="${opacity}" />`;
  }).join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill="white" />
      ${circles}
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function getControlledFaviconLinks() {
  if (typeof document === "undefined") return [];

  return CONTROLLED_FAVICON_LINKS.map(({ id, rel }) => {
    let iconLink = document.getElementById(id);

    if (!iconLink) {
      iconLink = document.createElement("link");
      iconLink.setAttribute("id", id);
      iconLink.setAttribute("rel", rel);
      iconLink.setAttribute("type", "image/png");
      iconLink.setAttribute("href", DEFAULT_FAVICON_PATH);
      document.head.appendChild(iconLink);
    }

    return iconLink;
  });
}

function toRouteKey(urlLike) {
  if (typeof window === "undefined" || !urlLike) return null;

  try {
    const resolvedUrl = urlLike instanceof URL
      ? urlLike
      : new URL(String(urlLike), window.location.href);

    if (resolvedUrl.origin !== window.location.origin) return null;

    return resolvedUrl.search
      ? `${resolvedUrl.pathname}${resolvedUrl.search}`
      : resolvedUrl.pathname;
  } catch {
    return null;
  }
}

export default function BrowserTabLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isLoadingRef = useRef(false);
  const loadingStartedAtRef = useRef(0);
  const faviconFrameRef = useRef(0);
  const search = searchParams?.toString() || "";
  const routeKey = search ? `${pathname}?${search}` : pathname;
  const currentRouteRef = useRef(routeKey || "");
  const pendingRouteRef = useRef("");
  const restoreTimerRef = useRef(null);
  const faviconTimerRef = useRef(null);
  const failsafeTimerRef = useRef(null);
  const originalFaviconHrefRef = useRef(DEFAULT_FAVICON_PATH);
  const originalFaviconTypeRef = useRef("image/png");

  const clearPendingTimers = useCallback(() => {
    if (restoreTimerRef.current) {
      window.clearTimeout(restoreTimerRef.current);
      restoreTimerRef.current = null;
    }

    if (faviconTimerRef.current) {
      window.clearInterval(faviconTimerRef.current);
      faviconTimerRef.current = null;
    }

    if (failsafeTimerRef.current) {
      window.clearTimeout(failsafeTimerRef.current);
      failsafeTimerRef.current = null;
    }
  }, []);

  const restoreTabState = useCallback(() => {
    clearPendingTimers();
    pendingRouteRef.current = "";
    isLoadingRef.current = false;

    const iconLinks = getControlledFaviconLinks();
    iconLinks.forEach((iconLink) => {
      iconLink.setAttribute("href", originalFaviconHrefRef.current || DEFAULT_FAVICON_PATH);
      iconLink.removeAttribute("sizes");

      if (originalFaviconTypeRef.current) {
        iconLink.setAttribute("type", originalFaviconTypeRef.current);
      } else {
        iconLink.removeAttribute("type");
      }
    });

    document.documentElement.removeAttribute("data-route-loading");
  }, [clearPendingTimers]);

  const finishLoading = useCallback((force = false) => {
    if (!isLoadingRef.current) return;

    const elapsed = Date.now() - loadingStartedAtRef.current;
    const remaining = LOADING_MINIMUM_MS - elapsed;

    if (!force && remaining > 0) {
      if (restoreTimerRef.current) window.clearTimeout(restoreTimerRef.current);
      restoreTimerRef.current = window.setTimeout(() => {
        restoreTabState();
      }, remaining);
      return;
    }

    restoreTabState();
  }, [restoreTabState]);

  const applyLoadingFrame = useCallback((frameIndex) => {
    const iconLinks = getControlledFaviconLinks();
    iconLinks.forEach((iconLink) => {
      iconLink.setAttribute("type", "image/svg+xml");
      iconLink.setAttribute("sizes", "any");
      iconLink.setAttribute("href", buildLoadingFavicon(frameIndex));
    });
  }, []);

  const startLoading = useCallback(() => {
    if (isLoadingRef.current) return;

    const [iconLink] = getControlledFaviconLinks();
    if (iconLink) {
      originalFaviconHrefRef.current = iconLink.getAttribute("href") || DEFAULT_FAVICON_PATH;
      originalFaviconTypeRef.current = iconLink.getAttribute("type") || "";
    } else {
      originalFaviconHrefRef.current = DEFAULT_FAVICON_PATH;
      originalFaviconTypeRef.current = "image/png";
    }

    isLoadingRef.current = true;
    loadingStartedAtRef.current = Date.now();
    faviconFrameRef.current = 0;

    document.documentElement.setAttribute("data-route-loading", "true");
    applyLoadingFrame(faviconFrameRef.current);

    faviconTimerRef.current = window.setInterval(() => {
      faviconFrameRef.current = (faviconFrameRef.current + 1) % SPINNER_DOTS.length;
      applyLoadingFrame(faviconFrameRef.current);
    }, FAVICON_FRAME_INTERVAL_MS);

    failsafeTimerRef.current = window.setTimeout(() => {
      finishLoading(true);
    }, LOADING_FAILSAFE_MS);
  }, [applyLoadingFrame, finishLoading]);

  const queueNavigation = useCallback((nextRouteKey) => {
    if (!nextRouteKey) return;
    if (nextRouteKey === currentRouteRef.current) return;
    if (nextRouteKey === pendingRouteRef.current) return;

    pendingRouteRef.current = nextRouteKey;
    startLoading();
  }, [startLoading]);

  useEffect(() => {
    if (!routeKey) return;
    if (routeKey === currentRouteRef.current) return;

    currentRouteRef.current = routeKey;
    pendingRouteRef.current = "";
    finishLoading();
  }, [finishLoading, routeKey]);

  useEffect(() => {
    const handleHistoryNavigation = () => {
      queueNavigation(toRouteKey(window.location.href));
    };

    window.addEventListener("popstate", handleHistoryNavigation);

    return () => {
      window.removeEventListener("popstate", handleHistoryNavigation);
    };
  }, [queueNavigation]);

  useEffect(() => {
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function pushState(state, title, url) {
      queueNavigation(toRouteKey(url));
      return originalPushState.apply(this, [state, title, url]);
    };

    window.history.replaceState = function replaceState(state, title, url) {
      queueNavigation(toRouteKey(url));
      return originalReplaceState.apply(this, [state, title, url]);
    };

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [queueNavigation]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target instanceof Element
        ? event.target.closest("a[href]")
        : null;

      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;

      const target = anchor.getAttribute("target");
      if (target && target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      let nextUrl;
      try {
        nextUrl = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (nextUrl.origin !== window.location.origin) return;

      const currentUrl = new URL(window.location.href);
      const isSamePageNavigation =
        nextUrl.pathname === currentUrl.pathname &&
        nextUrl.search === currentUrl.search;

      if (isSamePageNavigation) return;

      queueNavigation(toRouteKey(nextUrl));
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [queueNavigation]);

  useEffect(() => {
    return () => {
      if (isLoadingRef.current) {
        restoreTabState();
      } else {
        clearPendingTimers();
      }
    };
  }, [clearPendingTimers, restoreTabState]);

  return (
    <div
      aria-hidden="true"
      className="route-loader-shell"
    >
      <div className="route-loader-progress-track" aria-hidden="true">
        <div className="route-loader-progress-bar" />
      </div>
    </div>
  );
}

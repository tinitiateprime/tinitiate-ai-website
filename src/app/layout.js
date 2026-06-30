import { Suspense } from 'react';
import { Poppins } from 'next/font/google';
import Header from './components/header';
import CareerPromiseBand from './components/CareerPromiseBand';
import Footer from './components/footer';
import ChatWidget from './components/ChatWidget';
import BrowserTabLoader from './components/BrowserTabLoader';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Tinitiate AI Solutions',
  description: 'Empowering IT Careers',
};

const themeInitScript = `
  (function() {
    try {
      var navigationEntry =
        typeof window.performance !== "undefined" &&
        typeof window.performance.getEntriesByType === "function"
          ? window.performance.getEntriesByType("navigation")[0]
          : null;
      var legacyNavigation =
        typeof window.performance !== "undefined" ? window.performance.navigation : null;
      var navigationType = navigationEntry && navigationEntry.type
        ? navigationEntry.type
        : legacyNavigation && legacyNavigation.type === 1
          ? "reload"
          : legacyNavigation && legacyNavigation.type === 2
            ? "back_forward"
            : "navigate";
      var shouldRestorePreviousScroll = navigationType === "back_forward";
      var shouldStartFromTop = !shouldRestorePreviousScroll;

      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = shouldStartFromTop ? "manual" : "auto";
      }

      if (shouldStartFromTop) {
        var resetScroll = function() {
          window.scrollTo(0, 0);
        };

        resetScroll();
        window.addEventListener(
          "load",
          function handleReloadScrollReset() {
            resetScroll();
            if ("scrollRestoration" in window.history) {
              window.history.scrollRestoration = "auto";
            }
          },
          { once: true }
        );
      }

      var storedTheme = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var routePath = window.location.pathname || "/";
      var routeKind = routePath === "/" ? "home" : "content";
      var resolvedTheme =
        storedTheme === "dark" || storedTheme === "light" ? storedTheme  : (prefersDark ? "dark" : "light");

      document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
      document.documentElement.style.colorScheme = resolvedTheme;
      document.documentElement.setAttribute("data-theme", resolvedTheme);
      document.documentElement.setAttribute("data-route-path", routePath);
      document.documentElement.setAttribute("data-route-kind", routeKind);
    } catch (error) {
    } finally {
      document.documentElement.setAttribute("data-theme-ready", "true");
    }
  })();
`;

export default function RootLayout({ children }) {
  const aiEnabled = Boolean(process.env.OPENAI_API_KEY?.trim());

  return (
    <html
      lang="en"
      data-theme-ready="pending"
      suppressHydrationWarning
    >
      <head>
        <link id="app-favicon" rel="icon" type="image/png" href="/favicon.png" />
        <link id="app-shortcut-icon" rel="shortcut icon" type="image/png" href="/favicon.png" />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>

      <body className={`${poppins.className} flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100`}>
        <Suspense fallback={null}>
          <BrowserTabLoader />
        </Suspense>

        {/* ✅ Theme Script (Correct Way) */}

        {/* Header */}
        <div className="fixed inset-x-0 top-0 z-[1000]">
          <header className="relative z-[2] bg-white/96 backdrop-blur-sm transition-colors duration-300 dark:bg-slate-950/96">
            <Header />
          </header>
          <CareerPromiseBand />
        </div>

        {/* Main */}
        <main className="flex-1 pt-[107.5px] sm:pt-[123px]">
          {children}
        </main>

        {/* Widgets */}
        <ChatWidget aiEnabled={aiEnabled} />
        <Footer />

      </body>
    </html>
  );
}

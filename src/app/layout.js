import Header from './components/header';
import Footer from './components/footer';
import ChatWidget from './components/ChatWidget';
import './globals.css';

export const metadata = {
  title: 'TINITIATE AI',
  description: 'Empowering IT Careers',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme-ready="pending"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem("theme");
                  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  var resolvedTheme =
                    storedTheme === "dark" || storedTheme === "light"
                      ? storedTheme
                      : (prefersDark ? "dark" : "light");

                  document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
                  document.documentElement.style.colorScheme = resolvedTheme;
                  document.documentElement.setAttribute("data-theme", resolvedTheme);
                } catch (error) {
                } finally {
                  document.documentElement.setAttribute("data-theme-ready", "true");
                }
              })();
            `,
          }}
        />
      </head>

      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">

        {/* ✅ Theme Script (Correct Way) */}

        {/* Header */}
        <header className="fixed inset-x-0 top-0 z-[1000] bg-white/96 backdrop-blur-sm transition-colors duration-300 dark:bg-slate-950/96">
          <Header />
        </header>

        {/* Main */}
        <main className="flex-1 pt-[72px] sm:pt-[84px]">
          {children}
        </main>

        {/* Widgets */}
        <ChatWidget />
        <Footer />

      </body>
    </html>
  );
}

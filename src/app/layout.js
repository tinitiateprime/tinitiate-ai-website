// src/app/layout.js
import Header from "./components/header";
import Footer from "./components/footer";
import ChatWidget from "./components/ChatWidget";
import "./globals.css";

export const metadata = {
  title: "TINITIATE",
  description: "Empowering IT Careers",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">

        {/* ✅ ONLY HEADER COMPONENT (NO WRAPPER) */}
        <Header />

        {/* ✅ spacing so content not hidden */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        <ChatWidget />
        <Footer />

      </body>
    </html>
  );
}
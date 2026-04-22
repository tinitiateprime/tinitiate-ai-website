import Header from './components/header';
import Footer from './components/footer'
import ChatWidget from './components/ChatWidget';
import './globals.css'    // Tailwind utilities and base styles

export const metadata = {
  title: 'TINITIATE AI',
  description: 'Empowering IT Careers',
  icons: {
    icon: '/favicon.png', // or .png/.svg
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 antialiased dark:bg-slate-900 dark:text-gray-100">
        <header className="fixed inset-x-0 top-0 z-[1000] bg-white dark:bg-slate-900">
          <Header />
        </header>
        <main className="flex-1 pt-[72px] sm:pt-[84px]">
          {children}
        </main>

        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}

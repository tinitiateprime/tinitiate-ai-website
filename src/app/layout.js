import Header from './components/header';
import Footer from './components/footer'
import ChatWidget from './components/ChatWidget';
import { MessageCircle } from 'lucide-react' // or any icon like 'PhoneCall', 'MessageSquare'
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
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 w-full z-[1000] bg-white ">
          <Header />
        </header>
        {/* <main className="flex-grow pt-14">
          {children}
        </main>
 
        <Footer /> */}
         <main className="flex-grow pt-14">
          {children}
        </main>
 
        <ChatWidget />
 
{/* <a
  href="https://wa.me/919553495553"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-[1001] bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-xl transition-all duration-300"
  aria-label="Chat on WhatsApp"
>
  <MessageCircle className="text-white w-6 h-6" />
</a> */}
        <Footer />
      </body>
    </html>
  )
}
 
 
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import Background from '@/components/Background'
import { Toaster } from 'sonner'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mother Bird's - Traditional Taste, Trusted Quality",
  description: 'Discover authentic flavors crafted with love and tradition. From pickles to preserves, we bring you the finest food products trusted by families across India.',
  keywords: 'pickles, chutney, sauces, ketchup, jams, fruit syrups, traditional food, Indian food products, wholesale food, Mother Birds',
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${poppins.variable} font-sans`}>
        <Background>
          {children}
        </Background>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './ui/header'
// import Footer from './ui/footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '600', '400'] })

export const metadata: Metadata = {
  title: 'Link@ - Plataforma',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

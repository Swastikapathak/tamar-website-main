import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"

import { Navbar } from "../components/navbar"
import type React from "react"
import { Footer } from "../components/footer"
import FAQSection from "../components/faq"

const lexend = Lexend({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Software Development Company",
  description: "Custom software and AI solutions for your business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.className} bg-black text-white overflow-scroll`}>
        <Navbar />
        {children}
        <FAQSection />
        <Footer />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SpiriGo - Book Verified Priests for Rituals & Ceremonies",
  description:
    "Connect with verified priests for religious ceremonies, pujas, last rites, and temple visits. Book seamlessly with secure payments and enjoy hassle-free spiritual services.",
  keywords:
    "priest booking, online puja, religious ceremonies, temple tickets, spiritual services, hindu rituals, last rites, sanskar services",
  openGraph: {
    title: "SpiriGo - Book Verified Priests for Rituals & Ceremonies",
    description:
      "Connect with verified priests for religious ceremonies, pujas, last rites, and temple visits. Book seamlessly with secure payments.",
    url: "https://spirigo.com",
    siteName: "SpiriGo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SpiriGo - Priest Booking Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpiriGo - Book Verified Priests for Rituals & Ceremonies",
    description: "Connect with verified priests for religious ceremonies, pujas, last rites, and temple visits.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://spirigo.com",
    languages: {
      "en-US": "https://spirigo.com/en-US",
      "hi-IN": "https://spirigo.com/hi-IN",
      "ta-IN": "https://spirigo.com/ta-IN",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'
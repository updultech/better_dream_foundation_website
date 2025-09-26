import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Better Dream Foundation Ghana",
  description: "Empowering communities through education, healthcare, and sustainable development across Ghana.",
  keywords: "Better Dream Foundation, Ghana, education, healthcare, community development, NGO, charity",
  authors: [{ name: "Better Dream Foundation Ghana" }],
  creator: "Better Dream Foundation Ghana",
  publisher: "Better Dream Foundation Ghana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://betterdreamfoundation.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Better Dream Foundation Ghana",
    description: "Empowering communities through education, healthcare, and sustainable development across Ghana.",
    url: "https://betterdreamfoundation.org",
    siteName: "Better Dream Foundation Ghana",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Better Dream Foundation Ghana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Dream Foundation Ghana",
    description: "Empowering communities through education, healthcare, and sustainable development across Ghana.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

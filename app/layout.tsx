import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Better Dream Foundation - Empowering Communities for a Better Tomorrow",
    template: "%s | Better Dream Foundation",
  },
  description:
    "Join Better Dream Foundation in creating positive change. We work to empower communities through education, healthcare, and sustainable development programs.",
  keywords: [
    "NGO",
    "charity",
    "community development",
    "education",
    "healthcare",
    "Better Dream Foundation",
    "nonprofit",
    "social impact",
  ],
  authors: [{ name: "Better Dream Foundation" }],
  creator: "Better Dream Foundation",
  publisher: "Better Dream Foundation",
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
    type: "website",
    locale: "en_US",
    url: "https://betterdreamfoundation.org",
    title: "Better Dream Foundation",
    description: "Empowering Communities for a Better Tomorrow",
    siteName: "Better Dream Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Dream Foundation",
    description: "Empowering Communities for a Better Tomorrow",
    creator: "@betterdreamfoundation",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="better-dream-theme"
        >
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

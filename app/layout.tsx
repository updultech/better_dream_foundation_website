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
    default: "Better Dream Foundation Ghana",
    template: "%s | Better Dream Foundation Ghana",
  },
  description:
    "Empowering communities across Ghana through education, healthcare, and sustainable development initiatives. Join us in building a better tomorrow.",
  keywords: ["Ghana", "NGO", "education", "healthcare", "community development", "charity", "foundation"],
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
    type: "website",
    locale: "en_US",
    url: "https://betterdreamfoundation.org",
    title: "Better Dream Foundation Ghana",
    description:
      "Empowering communities across Ghana through education, healthcare, and sustainable development initiatives.",
    siteName: "Better Dream Foundation Ghana",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Better Dream Foundation Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Dream Foundation Ghana",
    description:
      "Empowering communities across Ghana through education, healthcare, and sustainable development initiatives.",
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
  other: {
    "theme-color": "#10b981",
  },
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
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

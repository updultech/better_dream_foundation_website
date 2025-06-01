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
        {/* Aggressive Web3/MetaMask blocker script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Store original console.error
              const originalConsoleError = console.error;

              // Immediately override console.error to suppress MetaMask/ChromeTransport errors
              console.error = function(...args) {
                const errorString = args.join(' ');
                if (errorString.includes('MetaMask') || errorString.includes('ChromeTransport')) {
                  // Suppress the error
                  return;
                }
                // Otherwise, pass through to the original console.error
                originalConsoleError.apply(console, args);
              };

              // Immediately override window.onerror to suppress MetaMask/ChromeTransport errors
              const originalOnError = window.onerror;
              window.onerror = function(message, source, lineno, colno, error) {
                if (typeof message === 'string' && (message.includes('MetaMask') || message.includes('ChromeTransport'))) {
                  return true; // Suppress the error
                }
                if (error && (error.message.includes('MetaMask') || error.message.includes('ChromeTransport'))) {
                  return true; // Suppress the error
                }
                if (originalOnError) {
                  return originalOnError.apply(window, arguments);
                }
                return false;
              };

              try {
                // Create mock objects instead of just setting to undefined
                const mockProvider = {
                  isMetaMask: false,
                  _metamask: { isUnlocked: () => Promise.resolve(false) },
                  request: () => Promise.reject(new Error("MetaMask is not available")),
                  on: () => {},
                  removeListener: () => {},
                  autoRefreshOnNetworkChange: false,
                  chainId: null,
                  networkVersion: null,
                  selectedAddress: null,
                  isConnected: () => false,
                  enable: () => Promise.reject(new Error("MetaMask is not available")),
                  send: () => Promise.reject(new Error("MetaMask is not available")),
                  sendAsync: (_, callback) => callback(new Error("MetaMask is not available")),
                };

                // Mock web3 object
                const mockWeb3 = {
                  currentProvider: null,
                  eth: {
                    accounts: [],
                    defaultAccount: null,
                    getAccounts: () => Promise.resolve([]),
                  },
                };

                // Block ChromeTransport specifically
                const mockChromeTransport = {
                  connectChrome: () => Promise.reject(new Error("Chrome transport is disabled")),
                  sendMessage: () => Promise.reject(new Error("Chrome transport is disabled")),
                };

                // Define properties with specific error handlers
                Object.defineProperty(window, "ethereum", {
                  get: () => mockProvider,
                  set: () => false,
                  configurable: false,
                });

                Object.defineProperty(window, "web3", {
                  get: () => mockWeb3,
                  set: () => false,
                  configurable: false,
                });

                Object.defineProperty(window, "ChromeTransport", {
                  get: () => mockChromeTransport,
                  set: () => false,
                  configurable: false,
                });

                // Block any potential chrome extension messaging
                if (window.chrome && window.chrome.runtime) {
                  window.chrome.runtime.connect = () => ({
                    onMessage: { addListener: () => {} },
                    postMessage: () => {},
                    disconnect: () => {},
                  });

                  window.chrome.runtime.sendMessage = () => Promise.reject(new Error("Chrome messaging is disabled"));
                }

                // Intercept any postMessage attempts
                const originalPostMessage = window.postMessage;
                window.postMessage = (message, targetOrigin, transfer) => {
                  if (
                    message &&
                    ((typeof message === "object" &&
                      ((message.type &&
                        (message.type.includes("METAMASK") ||
                          message.type.includes("ETH") ||
                          message.type.includes("WALLET") ||
                          message.type.includes("WEB3"))) ||
                        JSON.stringify(message).includes("metamask") ||
                        JSON.stringify(message).includes("ethereum") ||
                        JSON.stringify(message).includes("web3"))) ||
                      (typeof message === "string" &&
                        (message.includes("metamask") || message.includes("ethereum") || message.includes("web3"))))
                  ) {
                    return;
                  }
                  return originalPostMessage.call(window, message, targetOrigin, transfer);
                };
              } catch (e) {
                // Error during blocker initialization
              }
            `,
          }}
        />
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

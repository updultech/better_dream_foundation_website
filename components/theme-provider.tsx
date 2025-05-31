"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Use useEffect for client-side mounting
  React.useEffect(() => {
    // Prevent MetaMask detection
    if (typeof window !== "undefined") {
      window.ethereum = undefined
      window.web3 = undefined
    }

    setMounted(true)

    // Add a class to the document to indicate JS is enabled
    document.documentElement.classList.add("js")

    // Cleanup function to prevent memory leaks
    return () => {
      document.documentElement.classList.remove("js")
    }
  }, [])

  // Prevent hydration mismatch by not rendering theme-specific UI until mounted
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

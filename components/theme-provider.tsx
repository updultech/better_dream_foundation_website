"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering theme-specific UI until mounted
  if (!mounted) {
    return <div className="theme-transition">{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

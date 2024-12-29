"use client"

import { useThemeStore } from "@/lib/store/themeStore"

export default function ThemeProvider({ children }) {
  const isDarkTheme = useThemeStore((state) => state.isDarkTheme)
  // console.log("theme", isDarkTheme)
  return <div className={isDarkTheme ? "dark" : ""}>{children}</div>
}

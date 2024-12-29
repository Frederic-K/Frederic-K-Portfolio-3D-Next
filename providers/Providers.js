"use client"

import { usePathname } from "next/navigation"
import { I18nProviderClient } from "@/locales/client"
import { AnimatePresence, motion } from "framer-motion"
import ThemeProvider from "./ThemeProvider"

export const Providers = ({ locale, children }) => {
  const pathname = usePathname()

  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider>
        <AnimatePresence mode="wait">
          <motion.div key={pathname}>{children}</motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </I18nProviderClient>
  )
}

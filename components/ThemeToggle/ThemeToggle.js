"use client"

import clsx from "clsx"
import { MoonStar, Sun } from "lucide-react"
import { useThemeStore } from "../../lib/store/themeStore"
import { motion, AnimatePresence } from "framer-motion"

const ThemeToggle = () => {
  const isDarkTheme = useThemeStore((state) => state.isDarkTheme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <motion.button
      className={clsx(
        "flex h-9 w-9 items-center justify-center rounded-full",
        "bg-orange-200",
        "dark:bg-zinc-600",
        "shadow-convex-light dark:shadow-convex-dark",
        "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
        "transition-all duration-300 ease-in-out"
      )}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDarkTheme ? "dark" : "light"}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkTheme ? (
              <MoonStar className="h-6 w-6 text-orange-500" />
            ) : (
              <Sun className="h-6 w-6 text-orange-500" />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}

export default ThemeToggle

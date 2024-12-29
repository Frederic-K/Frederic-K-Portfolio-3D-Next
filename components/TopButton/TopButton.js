"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import clsx from "clsx"

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={clsx(
            "fixed bottom-4 right-4 z-50",
            "flex h-9 w-9 items-center justify-center rounded-full",
            "bg-orange-200",
            "dark:bg-zinc-600",
            "shadow-convex-light dark:shadow-convex-dark",
            "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
            "transition-all duration-300 ease-in-out",
            "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          )}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp className="h-6 w-6 text-orange-500" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default TopButton

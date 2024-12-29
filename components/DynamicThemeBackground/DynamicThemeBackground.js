"use client"

import Image from "next/image"
import { useThemeStore } from "../../lib/store/themeStore"
import { motion, AnimatePresence } from "framer-motion"

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function DynamicThemeBackground({ lightBg, darkBg }) {
  const isDarkTheme = useThemeStore((state) => state.isDarkTheme)

  return (
    <div className="fixed inset-0 -z-30 h-full w-full bg-zinc-800 dark:bg-zinc-800">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDarkTheme ? "dark" : "light"} // Use a simple key to trigger re-render
          className="absolute inset-0"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust duration for smoother transition
        >
          <Image
            src={isDarkTheme ? darkBg : lightBg}
            alt=""
            fill
            sizes="100vw"
            priority
            quality={100}
            className="object-cover object-center opacity-70"
            aria-hidden="true"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

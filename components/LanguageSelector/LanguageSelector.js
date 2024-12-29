"use client"
import clsx from "clsx"
import { useState, useRef } from "react"
import { useCurrentLocale, useChangeLocale } from "@/locales/client"
import { useLanguageStore } from "@/lib/store/languageStore"
import { useThemeStore } from "@/lib/store/themeStore"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useOnClickOutside } from "usehooks-ts"
import { FLAGS, LANGUAGES } from "@/lib/constants"

function LanguageSelector() {
  const { setLanguage } = useLanguageStore()
  // const { isDarkTheme } = useThemeStore()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  const handleLocaleChange = (newLocale) => {
    changeLocale(newLocale)
    setLanguage(newLocale)
    setIsOpen(false)
  }
  // console.log("currentLocale", currentLocale) // Outputs: 'en'

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex h-9 w-9 items-center justify-center rounded-full",
          "bg-orange-200",
          "dark:bg-zinc-600",
          "shadow-convex-light dark:shadow-convex-dark",
          "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
          "transition-all duration-300 ease-in-out"
        )}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="flex h-full w-full items-center justify-center"
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={FLAGS[currentLocale]}
            alt={`${LANGUAGES.find((lang) => lang.code === currentLocale)?.name} Flag`}
            width={20}
            height={20}
          />
        </motion.div>
      </motion.button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-7 mt-3 w-36 rounded-md border border-zinc-200 bg-zinc-100/50 text-zinc-600 shadow-lg dark:border-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-300"
          >
            {LANGUAGES.map((lang, index) => (
              <div
                key={lang.code}
                className="cursor-pointer"
                onClick={() => handleLocaleChange(lang.code)}
              >
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left transition-colors duration-200 ease-in-out hover:bg-orange-200/50 hover:text-zinc-800 dark:hover:bg-orange-700/30 dark:hover:text-zinc-100 ${
                    currentLocale === lang.code
                      ? "bg-orange-200/30 dark:bg-orange-700/20"
                      : ""
                  }`}
                >
                  <motion.span className="flex-shrink-0">
                    <Image
                      src={FLAGS[lang.code]}
                      alt={`${lang.name} Flag`}
                      width={20}
                      height={20}
                    />
                  </motion.span>
                  <span>{lang.name}</span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSelector

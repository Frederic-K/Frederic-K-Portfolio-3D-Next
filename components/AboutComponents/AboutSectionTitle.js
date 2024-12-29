"use client"

import { motion } from "framer-motion"
import clsx from "clsx"
import { useI18n } from "@/locales/client"

function AboutSectionTitle({ i18nTitleKey }) {
  const t = useI18n()
  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1 } },
  }

  return (
    <div className="flex items-center justify-center py-2">
      <motion.div
        className="h-2 bg-zinc-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
      />
      <h2
        className={clsx(
          "mx-4 text-center",
          "text-2xl font-semibold",
          "relative",
          "relief-text"
        )}
      >
        <span className={clsx("relative z-10", "text-amber-400")}>
          {t(i18nTitleKey)}
        </span>
        <span
          className={clsx(
            "absolute inset-0",
            "translate-x-[1px] translate-y-[1px]",
            "text-zinc-500"
          )}
          aria-hidden="true"
        >
          {t(i18nTitleKey)}
        </span>
      </h2>
      <motion.div
        className="h-2 bg-zinc-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
      />
    </div>
  )
}

export default AboutSectionTitle

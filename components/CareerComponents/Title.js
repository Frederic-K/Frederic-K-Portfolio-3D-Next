"use client"

import React from "react"
import clsx from "clsx"
import { useI18n } from "@/locales/client"

function Title() {
  const t = useI18n()
  return (
    <section className="flex flex-col items-center justify-center">
      <h1
        className={clsx(
          "mb-4 text-center",
          "text-6xl font-bold sm:text-8xl",
          "relative",
          "relief-text"
        )}
      >
        <span
          className={clsx(
            "relative z-10",
            "bg-gradient-to-r from-amber-500 via-red-500 to-amber-500",
            "bg-clip-text text-transparent"
          )}
        >
          {t("careerPage.title")}
        </span>
        <span
          className={clsx(
            "absolute inset-0",
            "translate-x-[1px] translate-y-[1px]",
            "text-zinc-500"
          )}
          aria-hidden="true"
        >
          {t("careerPage.title")}
        </span>
      </h1>
      <h2
        className={clsx(
          "mb-4 text-center",
          "relative",
          "relief-text",
          "text-lg sm:text-xl",
          "max-w-2xl"
        )}
      >
        <span className={clsx("relative z-10", "text-amber-400")}>
          {t("careerPage.catchphrase")}
        </span>
        <span
          className={clsx(
            "absolute inset-0",
            "translate-x-[1px] translate-y-[1px]",
            "text-zinc-500"
          )}
          aria-hidden="true"
        >
          {t("careerPage.catchphrase")}
        </span>
      </h2>
    </section>
  )
}

export default Title

"use client"

import React from "react"
import clsx from "clsx"
import { useI18n } from "@/locales/client"
import Image from "next/image"

function Summary({ className }) {
  const t = useI18n()

  return (
    <div className={clsx("relative flex items-center", className)}>
      <Image
        src={"/images/project/backgroundCube.webp"}
        alt="backgroundCube"
        layout="fill"
        objectFit="cover"
        className={clsx(
          "pointer-events-none",
          "absolute",
          "inset-0",
          "h-full",
          "w-full",
          "object-cover",
          "opacity-15"
        )}
      />
      <div>
        <h1
          className={clsx(
            "text-2xl font-bold text-zinc-800 dark:text-zinc-100"
          )}
        >
          {t("aboutPage.summaryTitle")}
        </h1>
        <p
          className={clsx("mt-4 text-justify text-zinc-700 dark:text-zinc-300")}
        >
          {t("aboutPage.summaryText")}
        </p>
      </div>
    </div>
  )
}

export default Summary

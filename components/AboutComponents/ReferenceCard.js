"use client"

import React from "react"
import clsx from "clsx"
import { useI18n } from "@/locales/client"
import Image from "next/image"

const ReferenceCard = ({ referenceKey, className }) => {
  const t = useI18n()

  return (
    <div className={clsx("relative flex flex-col p-4", className)}>
      <div className="mb-2 flex justify-between">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {t(`aboutPage.references.${referenceKey}.author`)}
        </h3>
        <span className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
          {t(`aboutPage.references.${referenceKey}.date`)}
          <Image
            src="/images/profile/medaille.png"
            alt="Medaille"
            width={28}
            height={28}
            className="ml-1"
            loading="lazy"
          />
        </span>
      </div>
      <p className="text-zinc-700 dark:text-zinc-300">
        {t(`aboutPage.references.${referenceKey}.text`)}
      </p>
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
    </div>
  )
}

export default ReferenceCard

"use client"

import React from "react"
import Image from "next/image"
import clsx from "clsx"
import AboutItemMotionLayout from "../Layouts/AboutItemMotionLayout"
import ContentCardLayout from "@/components/Layouts/ContentCardLayout"
import AboutSectionTitle from "./AboutSectionTitle"
import { motion } from "framer-motion"
import { useI18n } from "@/locales/client"
import { INTERESTS } from "@/lib/constants"

function InterestsSection() {
  const t = useI18n()

  const wiggleVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }
  return (
    <section>
      <AboutItemMotionLayout className="w-full">
        <AboutSectionTitle i18nTitleKey="aboutPage.interestTitle" />
      </AboutItemMotionLayout>
      <article className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INTERESTS.map((interest, index) => (
          <AboutItemMotionLayout className="" key={interest.id}>
            <ContentCardLayout className={""}>
              <div className="flex flex-col items-center justify-center p-2">
                <motion.div
                  variants={wiggleVariants}
                  whileHover="hover"
                  style={{ originY: 1 }} // Adjust the originY to control the wiggle effect
                >
                  <Image
                    src={interest.icon}
                    alt={t(interest.nameKey)}
                    width={64}
                    height={64}
                    className="h-20 w-20 object-contain"
                  />
                </motion.div>
                <span className="text-md mt-2 font-semibold dark:text-zinc-300">
                  {t(interest.nameKey)}
                </span>
              </div>
            </ContentCardLayout>
          </AboutItemMotionLayout>
        ))}
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
      </article>
    </section>
  )
}

export default InterestsSection

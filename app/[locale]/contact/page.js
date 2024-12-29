"use client"

import React from "react"
import dynamic from "next/dynamic"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useI18n } from "@/locales/client"
import DynamicThemeBackground from "@/components/DynamicThemeBackground/DynamicThemeBackground"
import ContactForm from "@/components/ContactComponents/ContactForm"

const Dynamic3DSceneRenderer = dynamic(
  () => import("@/components/Dynamic3DSceneRenderer/Dynamic3DSceneRenderer"),
  { ssr: false }
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
}

export default function Contact() {
  const t = useI18n()

  const lightBg =
    "/images/background/bg-contact/DALL·E 2024-10-28 21.02.18-Contact-Light.webp"
  const darkBg =
    "/images/background/bg-contact/DALL·E 2024-10-18 23.31.19-Contact-Dark.webp"

  return (
    <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center pb-4 pl-4 pr-4 pt-16">
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      <section className="absolute -top-28 -z-10 h-full w-full">
        <Dynamic3DSceneRenderer
          ModelComponent="Stargate"
          modelProps={{ scale: 0.7 }}
          enableTracking={false}
          threshold={0.001}
        />
      </section>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className={clsx(
            "mb-4 text-center text-4xl font-bold sm:text-6xl",
            "relative",
            "relief-text"
          )}
          variants={itemVariants}
        >
          <span className="relative z-10 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 bg-clip-text text-transparent">
            {t("contactPage.title")}
          </span>
          <span
            className="absolute inset-0 translate-x-[1px] translate-y-[1px] text-zinc-500"
            aria-hidden="true"
          >
            {t("contactPage.title")}
          </span>
        </motion.h1>
        <motion.div
          className="mb-4 max-w-md text-center font-bold"
          variants={itemVariants}
        >
          <motion.p
            className={clsx(
              "mb-2 sm:text-xl",
              "text-amber-400",
              "relative",
              "relief-text"
            )}
            variants={itemVariants}
          >
            <span className="relative z-10">{t("contactPage.intro")}</span>
            <span
              className="absolute inset-0 translate-x-[1px] translate-y-[1px] text-zinc-500"
              aria-hidden="true"
            >
              {t("contactPage.intro")}
            </span>
          </motion.p>
          <motion.p
            className={clsx(
              "text-sm sm:text-lg",
              "text-amber-400",
              "relative",
              "relief-text"
            )}
            variants={itemVariants}
          >
            <span className="relative z-10">
              {t("contactPage.description")}
            </span>
            <span
              className="absolute inset-0 translate-x-[1px] translate-y-[1px] text-zinc-500"
              aria-hidden="true"
            >
              {t("contactPage.description")}
            </span>
          </motion.p>
        </motion.div>
        <ContactForm />
      </motion.section>
    </div>
  )
}

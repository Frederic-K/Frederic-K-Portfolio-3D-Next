"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/locales/client"
import clsx from "clsx"
import { Check, ArrowRight, Sparkles, ChevronDown } from "lucide-react"
import ContentCardLayout from "../Layouts/ContentCardLayout"
import Image from "next/image"

const JobCard = ({ job, skills }) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useI18n()

  const containerSkillVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjust this value to control the stagger delay
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <ContentCardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        viewport={{ once: true }}
        className={clsx("relative p-4")}
      >
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {t(job.jobTitleKey)}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t(job.datesKey)} | {t(job.durationKey)}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t(job.locationKey)}
        </p>
        <ul className="mt-2 space-y-1">
          {job.descriptionKeys.map((descriptionKey, index) => (
            <li
              key={index}
              className="flex justify-start text-zinc-700 dark:text-zinc-300"
            >
              <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-amber-700 dark:text-amber-500" />
              {t(descriptionKey)}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "flex w-full items-center justify-between",
              "text-zinc-600 hover:font-semibold hover:text-amber-700",
              "dark:text-zinc-400 dark:hover:font-semibold dark:hover:text-amber-700",
              isOpen && "font-bold"
            )}
          >
            {t("common.skill")}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 overflow-hidden"
              >
                <motion.div
                  className="grid grid-cols-2 gap-2"
                  variants={containerSkillVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {job.skillsKeys.map((skillId) => {
                    const skill = skills.find((skill) => skill.id === skillId)
                    return skill ? (
                      <motion.div
                        key={skillId}
                        className="flex items-center text-zinc-700 dark:text-zinc-300"
                        variants={skillVariants}
                      >
                        <Sparkles className="mr-2 h-4 w-4 flex-shrink-0 text-amber-700 dark:text-amber-600" />
                        {t(skill.nameKey)}
                      </motion.div>
                    ) : null
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
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
    </ContentCardLayout>
  )
}

export default JobCard

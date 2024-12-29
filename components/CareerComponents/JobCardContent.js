"use client"

import { useState } from "react"
import { useI18n } from "@/locales/client"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import { Check, Sparkles, ChevronDown } from "lucide-react"

const JobCardContent = ({ job, skills }) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useI18n()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      viewport={{ once: true }}
      className={clsx("p-4")}
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
            <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-amber-500" />
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
              <div className="grid grid-cols-2 gap-2">
                {job.skillsKeys.map((skillId) => {
                  const skill = skills.find((skill) => skill.id === skillId)
                  return skill ? (
                    <div
                      key={skillId}
                      className="flex items-center text-zinc-700 dark:text-zinc-300"
                    >
                      <Sparkles className="mr-2 h-4 w-4 text-amber-700 dark:text-amber-600" />
                      {t(skill.nameKey)}
                    </div>
                  ) : null
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default JobCardContent

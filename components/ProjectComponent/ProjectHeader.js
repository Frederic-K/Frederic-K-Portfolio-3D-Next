"use client"

import React from "react"
import { useI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

function ProjectHeader({ project, isOpen, onToggle }) {
  const t = useI18n()
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-lg p-4"
      onClick={onToggle}
    >
      <div>
        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          {t(project.titleKey)}
        </h3>
        <p className="text-md font-semibold text-zinc-700 dark:text-zinc-100">
          {t(project.subtitleKey)}
        </p>
      </div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
      </motion.div>
    </div>
  )
}

export default ProjectHeader

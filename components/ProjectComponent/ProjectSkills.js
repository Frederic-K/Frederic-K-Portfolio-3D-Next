"use client"

import React from "react"
import { useI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { SKILLS } from "@/lib/constants"

function ProjectSkills({ skillsKeys }) {
  const t = useI18n()
  return (
    <div className="mt-4 flex flex-wrap">
      {skillsKeys.map((skillId) => {
        const skill = SKILLS.find((skill) => skill.id === skillId)
        return skill ? (
          <motion.div
            key={skillId}
            className="mb-2 mr-2 flex items-center text-zinc-700 dark:text-zinc-300"
          >
            <Sparkles className="mr-2 h-4 w-4 flex-shrink-0 text-amber-700 dark:text-amber-600" />
            {t(skill.nameKey)}
          </motion.div>
        ) : null
      })}
    </div>
  )
}

export default ProjectSkills

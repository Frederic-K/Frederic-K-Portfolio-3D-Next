"use client"

import { motion } from "framer-motion"
import clsx from "clsx"
import React from "react"

function ProjectItemMotionLayout({ children, className, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}

export default ProjectItemMotionLayout

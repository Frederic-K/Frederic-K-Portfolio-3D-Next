"use client"

import React, { useCallback } from "react"
import { motion } from "framer-motion"
import NavButton from "./NavButton"
import { useNavigation } from "@/hooks/useNavigation"
import clsx from "clsx"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const Navigation = () => {
  const { smallScreenButtons, largeScreenButtons } = useNavigation()

  const renderSmallScreenLayout = useCallback(
    () => (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid w-full grid-cols-2 gap-4 px-2.5 py-8 sm:hidden"
      >
        {smallScreenButtons.map((btn) => (
          <div key={btn.id} className={clsx("flex", btn.justifyClass)}>
            <NavButton {...btn} />
          </div>
        ))}
      </motion.div>
    ),
    [smallScreenButtons]
  )

  const renderLargeScreenLayout = useCallback(
    () => (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hover:pause group relative hidden animate-spin-slow items-center justify-center sm:flex"
      >
        {largeScreenButtons.map((btn) => (
          <NavButton key={btn.id} {...btn} />
        ))}
      </motion.div>
    ),
    [largeScreenButtons]
  )

  return (
    <nav className="pointer-events-auto fixed z-10 flex h-screen w-full items-center justify-center">
      {renderSmallScreenLayout()}
      {renderLargeScreenLayout()}
    </nav>
  )
}

export default Navigation

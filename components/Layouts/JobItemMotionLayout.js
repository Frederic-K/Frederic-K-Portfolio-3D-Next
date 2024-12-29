"use client"

import { motion } from "framer-motion"
import clsx from "clsx"

const JobItemMotionLayout = ({ children, index }) => {
  const isEven = index % 2 === 0

  const largeScreenMotionProps = {
    initial: {
      opacity: 0,
      rotateY: isEven ? 120 : -120,
      transformOrigin: isEven ? "right center" : "left center",
      z: -100,
    },
    whileInView: {
      opacity: 1,
      rotateY: 0,
      z: 0,
    },
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.5,
      delay: index * 0.2,
    },
    viewport: { once: true, margin: "-50px" },
  }

  const smallScreenMotionProps = {
    initial: {
      opacity: 0,
      rotateY: -120,
      transformOrigin: "left center",
      z: -100,
    },
    whileInView: {
      opacity: 1,
      rotateY: 0,
      z: 0,
    },
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.5,
      delay: index * 0.2,
    },
    viewport: { once: true, margin: "-50px" },
  }

  return (
    <div className={clsx("relative", "perspective-1000", "rounded-lg")}>
      {/* Large screen */}
      <motion.div
        {...largeScreenMotionProps}
        className={clsx(
          "backdrop-blur-sm",
          "preserve-3d",
          "hidden lg:flex",
          isEven ? "lg:justify-end" : "lg:justify-start",
          isEven ? "lg:mr-8 lg:text-left" : "lg:ml-8 lg:text-left"
        )}
      >
        {children}
      </motion.div>

      {/* Small screen */}
      <motion.div
        {...smallScreenMotionProps}
        className={clsx("backdrop-blur-sm", "preserve-3d", "flex lg:hidden")}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default JobItemMotionLayout

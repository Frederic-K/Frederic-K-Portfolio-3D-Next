"use client"

import React from "react"
import Link from "next/link"
import clsx from "clsx"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
}

const NavBtnLink = motion.create(Link)

const NavButton = ({
  x,
  y,
  label,
  link,
  icon: Icon,
  newTab,
  labelDirection,
  justifyClass,
}) => {
  return (
    <nav
      className={clsx(
        "z-50 cursor-pointer",
        x && y ? "absolute" : "relative",
        justifyClass
      )}
      style={x && y ? { transform: `translate(${x}, ${y})` } : undefined}
    >
      <NavBtnLink
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={link}
        target={newTab ? "_blank" : "_self"}
        className={clsx(
          "flex h-12 w-12 items-center justify-center rounded-full sm:size-14",
          "bg-orange-200",
          "dark:bg-orange-300",
          "shadow-convex-light dark:shadow-convex-dark",
          "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
          "transition-all duration-300 ease-in-out"
        )}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={label}
        prefetch={false}
        scroll={false}
      >
        <span
          className={clsx(
            "sm:group-hover:pause",
            "relative",
            "flex",
            "items-center",
            "justify-center",
            "h-12 w-12 sm:h-12 sm:w-12",
            "p-2 sm:p-3",
            "text-gray-800",
            "hover:text-orange-700",
            "sm:animate-spin-slow-reverse"
          )}
        >
          <Icon className={clsx("h-full w-full")} strokeWidth={1.5} />
          <span className="peer absolute left-0 top-0 h-full w-full bg-transparent" />
          <span
            className={clsx(
              "absolute hidden whitespace-nowrap rounded-md px-2 py-1 text-sm peer-hover:block",
              labelDirection === "left" ? "right-full mr-4" : "left-full ml-4",
              "bg-gray-200 dark:bg-gray-700",
              "text-gray-800 dark:text-gray-200",
              "shadow-md",
              "transition-all duration-200 ease-in-out"
            )}
          >
            {label}
          </span>
        </span>
      </NavBtnLink>
    </nav>
  )
}

export default NavButton

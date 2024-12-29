"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { navigateImage } from "@/lib/utils/carouselUtils"
import React, { useState, useEffect } from "react"
import { useI18n } from "@/locales/client"
import clsx from "clsx"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const CarouselComponent = ({
  className,
  items,
  interval = 4000,
  imageWidth = 175,
  imageHeight = 175,
}) => {
  const t = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          navigateImage("next", prevIndex, items.length)
        )
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isHovered, interval, items.length])

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) =>
      navigateImage(direction, prevIndex, items.length)
    )
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  }

  const currentItem = items[currentIndex]

  if (!currentItem) {
    return null // or perhaps fallback UI
  }

  return (
    <div
      className={clsx("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="flex h-full flex-col items-center justify-center"
        >
          <Image
            src={currentItem.icon}
            alt={t(currentItem.nameKey)}
            width={imageWidth}
            height={imageHeight}
            className="mb-4 object-contain"
          />
          <p className="text-center text-lg font-semibold text-zinc-600 dark:text-zinc-300">
            {t(currentItem.nameKey)}
          </p>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 flex items-center justify-between px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => handleNavigation("prev")}
          className="rounded-full bg-gray-200 p-2 text-gray-800 opacity-70 transition-opacity hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleNavigation("next")}
          className="rounded-full bg-gray-200 p-2 text-gray-800 opacity-70 transition-opacity hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>
    </div>
  )
}

export default CarouselComponent

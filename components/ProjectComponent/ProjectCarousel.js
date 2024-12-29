import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, Globe } from "lucide-react"
import { navigateImage } from "@/lib/utils/carouselUtils"

const ProjectLinks = ({ links }) => {
  const iconMap = {
    github: Github,
    website: Globe,
    // Add more icon mappings as needed
  }

  return (
    <div className="flex space-x-2">
      {links
        .filter((link) => iconMap[link.type])
        .map((link, index) => {
          const Icon = iconMap[link.type]
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-800/75 p-2 text-yellow-100 hover:text-yellow-400"
            >
              <Icon size={20} />
            </a>
          )
        })}
    </div>
  )
}

const ProjectCarousel = ({ images, title, links, isOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (images.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [images.length, isPaused])

  const handleNavigate = (direction) => {
    setCurrentIndex((prevIndex) =>
      navigateImage(direction, prevIndex, images.length)
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "100%" : 0,
      }}
      transition={{
        duration: 0.3,
        // delay: 0.1,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden"
      style={{ originY: 0 }}
    >
      <div
        className={clsx(
          "relative h-full w-full overflow-hidden rounded-lg",
          "bg-zinc-200/50 dark:bg-zinc-800/50"
        )}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - ${currentIndex + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>
        <>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent" />
        </>
      </div>
      {images.length > 1 && (
        <>
          <button
            className={clsx(
              "absolute left-2 top-1/2 -translate-y-1/2",
              "rounded-full bg-black/50 p-2 text-orange-300 hover:bg-black/75 hover:text-orange-700"
            )}
            onClick={() => handleNavigate("prev")}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={clsx(
              "absolute right-2 top-1/2 -translate-y-1/2",
              "rounded-full bg-black/50 p-2 text-orange-300 hover:bg-black/75 hover:text-orange-700"
            )}
            onClick={() => handleNavigate("next")}
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
      <div className="absolute bottom-4 right-6 flex space-x-2">
        <ProjectLinks links={links} />
      </div>
    </motion.div>
  )
}

export default ProjectCarousel

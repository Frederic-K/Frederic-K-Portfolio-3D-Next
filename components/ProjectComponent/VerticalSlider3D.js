"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import ProjectCardHalftone from "./ProjectCardHalftone"
import { navigateImage } from "@/lib/utils/carouselUtils"
import { PROJECTS } from "@/lib/constants/project"

const VISIBLE_SLIDES = 2
const TRANSITION_DURATION = 500

const VerticalSlider3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNavigating, setIsNavigating] = useState(false)

  const handleNavigation = useCallback(
    (direction) => {
      if (isNavigating) return
      setIsNavigating(true)
      setCurrentIndex((prevIndex) =>
        navigateImage(direction, prevIndex, PROJECTS.length)
      )
      setTimeout(() => setIsNavigating(false), TRANSITION_DURATION)
    },
    [isNavigating]
  )

  const getPositionConfig = useCallback(
    (index) => {
      const position =
        (index - currentIndex + PROJECTS.length) % PROJECTS.length
      if (position === 0)
        return { transform: "translateY(0%) scale(1)", zIndex: 3 }

      for (let i = 1; i <= VISIBLE_SLIDES; i++) {
        if (position === i || position === PROJECTS.length - i) {
          const direction = position === i ? 1 : -1
          return {
            transform: `translateY(${direction * i * 35}%) rotateX(${direction * i * 30}deg) scale(${1 - i * 0.2})`,
            zIndex: 3 - i,
          }
        }
      }

      return { transform: "translateY(200%) scale(0)", zIndex: 0 }
    },
    [currentIndex]
  )

  return (
    <div
      className={clsx(
        "perspective-1000",
        "relative",
        "flex",
        "h-[500px]",
        "w-full",
        "items-center",
        "justify-center",
        "overflow-hidden"
      )}
    >
      <SlideRenderer
        currentIndex={currentIndex}
        getPositionConfig={getPositionConfig}
      />
      <NavigationButtons handleNavigation={handleNavigation} />
      <SlideCounter currentIndex={currentIndex} totalSlides={PROJECTS.length} />
    </div>
  )
}

const SlideRenderer = ({ currentIndex, getPositionConfig }) => (
  <AnimatePresence mode="popLayout" initial={false}>
    {PROJECTS.map((project, index) => (
      <SlideItem
        key={project.id}
        project={project}
        index={index}
        currentIndex={currentIndex}
        positionConfig={getPositionConfig(index)}
      />
    ))}
  </AnimatePresence>
)

const SlideItem = ({ project, index, currentIndex, positionConfig }) => (
  <motion.div
    initial={{ transform: positionConfig.transform }}
    animate={{ transform: positionConfig.transform }}
    exit={{ transform: positionConfig.transform }}
    transition={{ duration: TRANSITION_DURATION / 1000, ease: "easeInOut" }}
    className={`absolute flex h-48 w-72 flex-col items-center justify-center rounded-lg shadow-lg ${
      index === currentIndex ? "z-10" : "blur-sm"
    }`}
    style={{ zIndex: positionConfig.zIndex }}
  >
    <ProjectCardHalftone
      project={project}
      className="h-full w-full rounded-lg border-2 border-amber-700"
    />
  </motion.div>
)

const NavigationButtons = ({ handleNavigation }) => (
  <>
    <button
      onClick={() => handleNavigation("prev")}
      className="absolute left-1/2 top-10 z-10 -translate-x-1/2 rotate-90 transform text-3xl text-white"
    >
      &lt;
    </button>
    <button
      onClick={() => handleNavigation("next")}
      className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 rotate-90 transform text-3xl text-white"
    >
      &gt;
    </button>
  </>
)

const SlideCounter = ({ currentIndex, totalSlides }) => (
  <div className="absolute bottom-2 text-white">
    {currentIndex + 1} / {totalSlides}
  </div>
)

export default VerticalSlider3D

import React from "react"
import clsx from "clsx"
import { motion, useAnimationControls, useMotionValue } from "framer-motion"
import Image from "next/image"
import { useI18n } from "@/locales/client"
import { useEffect } from "react"

const ScrollBannerComponent = ({ items, itemWidth = 50, duration = 5 }) => {
  const t = useI18n()
  const controls = useAnimationControls()
  const x = useMotionValue(0)

  useEffect(() => {
    controls.start({
      x: [-itemWidth * items.length, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: items.length * duration,
          ease: "linear",
        },
      },
    })
  }, [controls, items.length, itemWidth, duration])

  const handleHover = () => {
    controls.stop()
  }

  const handleHoverEnd = () => {
    controls.start({
      x: [x.get(), x.get() - itemWidth * items.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: items.length * duration,
          ease: "linear",
        },
      },
    })
  }

  return (
    <div
      className="relative w-full overflow-hidden p-2"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div className="flex space-x-8" animate={controls} style={{ x }}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex flex-shrink-0 flex-col items-center">
            <Image
              src={item.icon}
              alt={t(item.nameKey)}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <span className="mt-2 text-sm dark:text-zinc-300">
              {t(item.nameKey)}
            </span>
          </div>
        ))}
      </motion.div>
      <Image
        src={"/images/project/backgroundCube.webp"}
        alt="backgroundCube"
        layout="fill"
        objectFit="cover"
        className={clsx(
          "pointer-events-none",
          "absolute",
          "inset-0",
          "h-full",
          "w-full",
          "object-cover",
          "opacity-15"
        )}
      />
    </div>
  )
}

export default ScrollBannerComponent

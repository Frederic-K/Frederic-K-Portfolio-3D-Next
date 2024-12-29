import { useMemo, useState, useEffect } from "react"
import { useI18n } from "@/locales/client"
import mockProjectData from "@/components/ProjectComponent/mockProjectData"
import {
  calculateCircularPosition,
  calculateResponsiveRadius,
} from "@/lib/utils/mathUtils"

export const useProject = () => {
  const t = useI18n()
  const [radius, setRadius] = useState(0)

  useEffect(() => {
    // Set the initial radius on the client side
    setRadius(calculateResponsiveRadius(window.innerWidth))

    const handleResize = () => {
      setRadius(calculateResponsiveRadius(window.innerWidth))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const largeScreenProjects = useMemo(
    () =>
      mockProjectData.map((project, index) => {
        const { offsetX, offsetY } = calculateCircularPosition(
          index,
          mockProjectData.length
        )

        // Calculate the angle in radians
        const angle = (index / mockProjectData.length) * 2 * Math.PI

        return {
          ...project,
          title: t(project.titleKey), // Assuming you have translation keys for project titles
          x: `calc(${offsetX} * ${radius}px)`,
          y: `calc(${offsetY} * ${radius}px)`,
          // rotation: -index * (360 / mockProjectData.length),
          rotation: `${(angle * 180) / Math.PI + 90}deg`, // Convert to degrees and add 90 degrees
        }
      }),
    [t, radius]
  )

  return { largeScreenProjects }
}

import { useMemo, useState, useEffect } from "react"
import { useI18n } from "@/locales/client"
import { NAVBUTTON_LINKS } from "@/lib/constants"
import {
  calculateCircularPosition,
  calculateResponsiveRadius,
} from "@/lib/utils/mathUtils"

export const useNavigation = () => {
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

  const smallScreenButtons = useMemo(
    () =>
      NAVBUTTON_LINKS.map((btn, index) => ({
        ...btn,
        label: t(btn.labelKey),
        labelDirection: index % 2 === 0 ? "right" : "left",
        justifyClass: index % 2 === 0 ? "justify-start" : "justify-end",
      })),
    [t]
  )

  const largeScreenButtons = useMemo(
    () =>
      NAVBUTTON_LINKS.map((btn, index) => {
        const { offsetX, offsetY } = calculateCircularPosition(
          index,
          NAVBUTTON_LINKS.length
        )

        return {
          ...btn,
          label: t(btn.labelKey),
          x: `calc(${offsetX} * ${radius}px)`,
          y: `calc(${offsetY} * ${radius}px)`,
        }
      }),
    [t, radius]
  )

  return { smallScreenButtons, largeScreenButtons }
}

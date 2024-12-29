import { VIEWPORT_CONFIG } from "@/lib/constants"

export const calculateCircularPosition = (index, total) => {
  const angle = (index / total) * 2 * Math.PI
  return {
    offsetX: Math.cos(angle),
    offsetY: Math.sin(angle),
  }
}

export const calculateResponsiveRadius = (viewportWidth) => {
  const { minViewportWidth, maxViewportWidth, minRadius, maxRadius } =
    VIEWPORT_CONFIG
  const scaleFactor =
    (viewportWidth - minViewportWidth) / (maxViewportWidth - minViewportWidth)
  return Math.min(
    Math.max(minRadius + scaleFactor * (maxRadius - minRadius), minRadius),
    maxRadius
  )
}

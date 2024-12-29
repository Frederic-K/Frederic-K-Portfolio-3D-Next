import React from "react"
import { useMouseTracking } from "@/hooks/useMouseTracking"

const MouseTracker = ({
  children,
  enableTracking = false,
  threshold = 0.001,
}) => {
  const mousePosition = useMouseTracking(enableTracking, threshold)

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { mousePosition, enableTracking })
  )
}

export default MouseTracker

///////////// WORKS WELL ///////////////
// import { useState, useEffect, useCallback } from "react"

// export const useMouseTracking = (enableTracking = false, threshold = 0.001) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   const updateMousePosition = useCallback(
//     (event) => {
//       const newX = (event.clientX / window.innerWidth) * 2 - 1
//       const newY = -(event.clientY / window.innerHeight) * 2 + 1

//       if (
//         Math.abs(newX - mousePosition.x) > threshold ||
//         Math.abs(newY - mousePosition.y) > threshold
//       ) {
//         setMousePosition({ x: newX, y: newY })
//       }
//     },
//     [mousePosition, threshold]
//   )

//   useEffect(() => {
//     if (enableTracking) {
//       window.addEventListener("mousemove", updateMousePosition)
//     }

//     return () => {
//       if (enableTracking) {
//         window.removeEventListener("mousemove", updateMousePosition)
//       }
//     }
//   }, [enableTracking, updateMousePosition])

//   return mousePosition
// }

// const MouseTracker = ({ children }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const updateMousePosition = (event) => {
//       setMousePosition({
//         x: (event.clientX / window.innerWidth) * 2 - 1,
//         y: -(event.clientY / window.innerHeight) * 2 + 1,
//       })
//     }

//     window.addEventListener("mousemove", updateMousePosition)
//     return () => window.removeEventListener("mousemove", updateMousePosition)
//   }, [])

//   return React.Children.map(children, (child) =>
//     React.cloneElement(child, { mousePosition })
//   )
// }

import { useState, useEffect, useCallback } from "react"

export const useMouseTracking = (enableTracking = false, threshold = 0.001) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const updateMousePosition = useCallback(
    (event) => {
      const newX = (event.clientX / window.innerWidth) * 2 - 1
      const newY = -(event.clientY / window.innerHeight) * 2 + 1

      setMousePosition((prevPosition) => {
        if (
          Math.abs(newX - prevPosition.x) > threshold ||
          Math.abs(newY - prevPosition.y) > threshold
        ) {
          return { x: newX, y: newY }
        }
        return prevPosition
      })
    },
    [threshold]
  )

  useEffect(() => {
    if (enableTracking) {
      window.addEventListener("mousemove", updateMousePosition)
    }

    return () => {
      if (enableTracking) {
        window.removeEventListener("mousemove", updateMousePosition)
      }
    }
  }, [enableTracking, updateMousePosition])

  return mousePosition
}

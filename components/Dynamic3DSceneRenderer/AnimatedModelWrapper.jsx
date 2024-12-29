import React, { useRef, useEffect } from "react"
import { useAnimations } from "@react-three/drei"
import * as THREE from "three"

const AnimatedModelWrapper = ({ children, loopAnimations = true }) => {
  const group = useRef()
  const animations = children.props.animations || []
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (Object.keys(actions).length > 0) {
      // Play all animations
      Object.values(actions).forEach((action) => action.play())

      if (loopAnimations) {
        Object.values(actions).forEach((action) => {
          action.loop = THREE.LoopRepeat
          action.repetitions = Infinity
        })
      }

      // Cleanup function
      return () => {
        Object.values(actions).forEach((action) => action.stop())
      }
    }
  }, [actions, loopAnimations])

  return <group ref={group}>{children}</group>
}

export default AnimatedModelWrapper

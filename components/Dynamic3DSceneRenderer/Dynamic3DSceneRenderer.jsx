"use client"

import clsx from "clsx"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import dynamic from "next/dynamic"
import MouseTracker from "../MouseTracker/MouseTracker"
import { Suspense } from "react"
import CyberpunkLoader from "../CyberpunkLoader/CyberpunkLoader"

export default function Dynamic3DSceneRenderer({
  ModelComponent,
  modelProps = {},
  cameraPosition = [0, 0, 5],
  lights = [],
  enableTracking = true,
  threshold = 0.001,
  ...canvasProps
}) {
  const DynamicModel = dynamic(
    () => import(`@/components/Models/${ModelComponent}`),
    { ssr: false }
  )

  const renderLight = (light, index) => {
    switch (light.type) {
      case "ambientLight":
        return (
          <ambientLight
            key={index}
            intensity={light.intensity}
            color={light.color}
          />
        )
      case "pointLight":
        return (
          <pointLight
            key={index}
            position={light.position}
            intensity={light.intensity}
            color={light.color}
          />
        )
      case "directionalLight":
        return (
          <directionalLight
            key={index}
            position={light.position}
            intensity={light.intensity}
            color={light.color}
          />
        )
      case "spotLight":
        return (
          <spotLight
            key={index}
            position={light.position}
            angle={light.angle}
            penumbra={light.penumbra}
            intensity={light.intensity}
            color={light.color}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={clsx("absolute inset-0 -z-10", "h-full w-full")}>
      <Suspense fallback={<CyberpunkLoader />}>
        <Canvas camera={{ position: cameraPosition, fov: 75 }} {...canvasProps}>
          {lights.map(renderLight)}
          <MouseTracker enableTracking={enableTracking} threshold={threshold}>
            <DynamicModel {...modelProps} />
          </MouseTracker>
          <Environment preset="dawn" />
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
            enableDamping={false}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

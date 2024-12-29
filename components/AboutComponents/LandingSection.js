import React from "react"
import clsx from "clsx"
import dynamic from "next/dynamic"
import Title from "./Title"

const Dynamic3DSceneRenderer = dynamic(
  () => import("@/components/Dynamic3DSceneRenderer/Dynamic3DSceneRenderer"),
  { ssr: false }
)

function LandingSection() {
  return (
    <section
      className={clsx(
        "relative",
        "flex",
        "h-screen",
        "flex-col",
        "items-center",
        "justify-center"
      )}
    >
      <div className="absolute inset-0 -top-[40%] -z-10">
        <Dynamic3DSceneRenderer
          ModelComponent="SteampunkClock"
          modelProps={{
            animationSpeed: 0.3,
            scale: 0.032,
          }}
          enableTracking={false}
          threshold={0.001}
          lights={[
            { type: "ambientLight", intensity: 0.3, color: "#3D2B1F" }, // Very dark brown ambient light
            {
              type: "pointLight",
              position: [10, 10, 10],
              intensity: 0.6,
              color: "#8B4513",
            }, // Darker orange-brown point light
            {
              type: "directionalLight",
              position: [-5, 5, 5],
              intensity: 0.4,
              color: "#B8860B",
            }, // Darker goldenrod directional light
          ]}
        />
      </div>
      <div className="mb-[20%] mt-auto md:mb-[15%] lg:mb-[10%]">
        <Title />
      </div>
    </section>
  )
}

export default LandingSection

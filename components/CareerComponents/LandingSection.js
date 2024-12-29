import React from "react"
import dynamic from "next/dynamic"
import clsx from "clsx"
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
      <div className="absolute inset-0 -top-[30%] -z-10">
        <Dynamic3DSceneRenderer
          ModelComponent="FantasyCompass"
          modelProps={{
            animationSpeed: 1,
            scale: 2.1,
            rotation: [Math.PI / 6, Math.PI / 6, -Math.PI / 9],
          }}
          enableTracking={false}
          threshold={0.001}
        />
      </div>
      <div className="mb-[20%] mt-auto md:mb-[15%] lg:mb-[10%]">
        <Title />
      </div>
    </section>
  )
}

export default LandingSection

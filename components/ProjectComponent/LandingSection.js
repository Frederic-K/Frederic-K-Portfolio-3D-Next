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
      <div className="absolute inset-0 -z-10 md:hidden">
        <Dynamic3DSceneRenderer
          ModelComponent="HoverBike"
          modelProps={{
            animationSpeed: 0.3,
            scale: 0.55,
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
      <div className="absolute inset-0 top-[10%] -z-10 hidden md:flex">
        <Dynamic3DSceneRenderer
          ModelComponent="HoverBike"
          modelProps={{
            animationSpeed: 0.3,
            scale: 0.7,
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

// import React from "react"
// import dynamic from "next/dynamic"
// import clsx from "clsx"
// import Title from "./Title"

// const Dynamic3DSceneRenderer = dynamic(
//   () => import("@/components/Dynamic3DSceneRenderer/Dynamic3DSceneRenderer"),
//   { ssr: false }
// )

// function LandingSection() {
//   return (
//     <section className="relative flex h-screen flex-col items-center justify-center">
//       <div className="absolute inset-0 -top-[25%] -z-10">
//         <Dynamic3DSceneRenderer
//           ModelComponent="ArcanePlanet"
//           modelProps={{
//             rotationSpeed: 0.2,
//             scale: 1.2,
//           }}
//           enableTracking={false}
//           threshold={0.001}
//           lights={[
//             { type: "ambientLight", intensity: 50, color: "#ffffff" }, // Very dark brown ambient light
//             {
//               type: "pointLight",
//               position: [10, 10, 10],
//               intensity: 25,
//               color: "#ffffff",
//             }, // Darker orange-brown point light
//             {
//               type: "directionalLight",
//               position: [-5, 5, 5],
//               intensity: 25,
//               color: "#ffffff",
//             }, // Darker goldenrod directional light
//           ]}
//         />
//       </div>
//       <div className="mb-[20%] mt-auto md:mb-[15%] lg:mb-[10%]">
//         <Title />
//       </div>
//     </section>
//   )
// }

// export default LandingSection

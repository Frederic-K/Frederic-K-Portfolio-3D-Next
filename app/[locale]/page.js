import Navigation from "@/components/HomeComponents/Naviagation"
import DynamicThemeBackground from "@/components/DynamicThemeBackground/DynamicThemeBackground"
import dynamic from "next/dynamic"
import { metadata } from "../metadata"
// import WebGLErrorBoundary from "@/components/WebGLErrorBoundary/WebGLErrorBoundary"

const Dynamic3DSceneRenderer = dynamic(
  () => import("@/components/Dynamic3DSceneRenderer/Dynamic3DSceneRenderer"),
  { ssr: false }
)

// TODO : metadata for SEO and Open Graph : check Metada doc
export { metadata }

export default function Home() {
  const lightBg =
    "/images/background/bg-home/DALL·E 2024-10-28 21.03.12-Home-Light.webp"
  const darkBg =
    "/images/background/bg-home/DALL·E 2024-10-18 21.16.27-Home-Dark.webp"

  return (
    <div>
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      <Navigation />
      {/* <WebGLErrorBoundary> */}
      <Dynamic3DSceneRenderer
        ModelComponent="DroneX" // scale 0.5 // Home
        modelProps={{ scale: 0.5 }}
        cameraPosition={[0, 0, 5]}
        // lights={[
        //   { type: "ambientLight", intensity: 0.5, color: "#ffffff" },
        //   {
        //     type: "directionalLight",
        //     position: [5, 5, 5],
        //     intensity: 1,
        //     color: "#ffffff",
        //   },
        //   {
        //     type: "pointLight",
        //     position: [-5, -5, -5],
        //     intensity: 0.5,
        //     color: "#ff0000",
        //   },
        //   {
        //     type: "spotLight",
        //     position: [0, 5, 0],
        //     angle: 0.3,
        //     penumbra: 0.5,
        //     intensity: 1,
        //     color: "#00ff00",
        //   },
        // ]}
        enableTracking={true}
        threshold={0.001}
      />
      {/* </WebGLErrorBoundary> */}
    </div>
  )
}

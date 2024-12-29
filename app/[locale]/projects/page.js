import React from "react"
import DynamicThemeBackground from "@/components/DynamicThemeBackground/DynamicThemeBackground"
import LandingSection from "@/components/ProjectComponent/LandingSection"
import HorizontalSlider3D from "@/components/ProjectComponent/HorizontalSlider3D"
import VerticalSlider3D from "@/components/ProjectComponent/VerticalSlider3D"
import ProjectModal from "@/components/ProjectComponent/ProjectModal"
import ProjectList from "@/components/ProjectComponent/ProjectList"

export default async function Project() {
  const lightBg =
    "/images/background/bg-career/DALL·E 2024-10-28 20.59.07-career-Light.webp"
  const darkBg =
    "/images/background/bg-career/DALL·E 2024-10-21 17.43.45-career-Dark.webp"

  return (
    <div className="relative">
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      <LandingSection />
      <div className="mx-auto hidden max-w-3xl items-center justify-center md:flex md:h-96">
        <HorizontalSlider3D />
      </div>
      <div className="mx-auto flex h-full max-w-3xl items-center justify-center md:hidden">
        <VerticalSlider3D />
      </div>
      <ProjectModal />
      <div className="mx-auto mt-24 flex max-w-3xl flex-col items-center justify-center">
        <ProjectList />
      </div>
    </div>
  )
}

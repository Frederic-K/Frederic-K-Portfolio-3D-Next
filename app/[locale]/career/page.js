import React from "react"
import DynamicThemeBackground from "@/components/DynamicThemeBackground/DynamicThemeBackground"
import LandingSection from "@/components/CareerComponents/LandingSection"
import Timeline from "@/components/CareerComponents/Timeline"

export default async function Career() {
  const lightBg =
    "/images/background/bg-career/DALL·E 2024-10-28 20.59.07-career-Light.webp"
  const darkBg =
    "/images/background/bg-career/DALL·E 2024-10-21 17.43.45-career-Dark.webp"

  return (
    <div className="relative">
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      <LandingSection />
      <div className="container mx-auto max-w-2xl px-4 py-16 lg:max-w-5xl">
        <Timeline />
      </div>
    </div>
  )
}

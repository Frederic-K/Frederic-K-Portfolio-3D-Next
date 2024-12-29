import React from "react"
import DynamicThemeBackground from "@/components/DynamicThemeBackground/DynamicThemeBackground"
import ProfileSection from "@/components/AboutComponents/ProfileSection"
import InterestsSection from "@/components/AboutComponents/InterestsSection"
import ReferencesSection from "@/components/AboutComponents/ReferencesSection"
import SkillsSection from "@/components/AboutComponents/SkillsSection"
import TechnologySection from "@/components/AboutComponents/TechnologySection"
import LandingSection from "@/components/AboutComponents/LandingSection"

export default function About() {
  const lightBg =
    "/images/background/bg-about/DALL·E 2024-10-28 20.01.16-About-Light.webp"
  const darkBg =
    "/images/background/bg-about/DALL·E 2024-10-21 17.46.45-About-Dark.webp"

  return (
    <div className="relative">
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      <LandingSection />
      <div className="min-h-screen">
        <div className="container mx-auto flex max-w-5xl flex-col gap-1 px-4 py-16">
          <ProfileSection />
          <TechnologySection />
          <ReferencesSection />
          <SkillsSection />
          <InterestsSection />

          {/* Add more content components here */}
        </div>
      </div>
    </div>
  )
}

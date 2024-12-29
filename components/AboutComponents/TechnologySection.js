import React from "react"
import AboutItemMotionLayout from "../Layouts/AboutItemMotionLayout"
import ContentCardLayout from "@/components/Layouts/ContentCardLayout"
import AboutSectionTitle from "./AboutSectionTitle"
import DevelopmentTopLanguage from "./DevelopmentTopLanguage"
import DevelopmentSkill from "./DevelopmentSkill"

function TechnologySection() {
  return (
    <section>
      <AboutItemMotionLayout className="w-full">
        <AboutSectionTitle i18nTitleKey="aboutPage.devSkillTitle" />
      </AboutItemMotionLayout>
      <article className="flex flex-col gap-4 lg:flex-row">
        <AboutItemMotionLayout className="w-full lg:w-1/3">
          <ContentCardLayout>
            <DevelopmentTopLanguage className="flex h-60 justify-center" />
          </ContentCardLayout>
        </AboutItemMotionLayout>
        <AboutItemMotionLayout className="w-full lg:w-2/3">
          <ContentCardLayout>
            <DevelopmentSkill
              className="flex h-60 justify-center p-8"
              perLine="6"
              smPerLine="10"
            />
          </ContentCardLayout>
        </AboutItemMotionLayout>
      </article>
    </section>
  )
}

export default TechnologySection

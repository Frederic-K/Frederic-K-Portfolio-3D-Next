import React from "react"
import AboutItemMotionLayout from "../Layouts/AboutItemMotionLayout"
import ContentCardLayout from "@/components/Layouts/ContentCardLayout"
import AboutSectionTitle from "./AboutSectionTitle"
import Summary from "./Summary"
import SoftSkillCarousel from "./SoftSkillCarousel"

function ProfileSection() {
  return (
    <section>
      <AboutItemMotionLayout className="w-full py-2">
        <AboutSectionTitle i18nTitleKey="aboutPage.profileTitle" />
      </AboutItemMotionLayout>
      <article className="flex flex-col gap-4 lg:flex-row">
        <AboutItemMotionLayout className="w-full lg:w-2/3">
          <ContentCardLayout>
            <Summary className="p-4 lg:h-[304px]" />
          </ContentCardLayout>
        </AboutItemMotionLayout>
        <AboutItemMotionLayout className="w-full lg:w-1/3">
          <ContentCardLayout>
            <SoftSkillCarousel className="p-4 lg:h-[304px]" />
          </ContentCardLayout>
        </AboutItemMotionLayout>
      </article>
    </section>
  )
}

export default ProfileSection

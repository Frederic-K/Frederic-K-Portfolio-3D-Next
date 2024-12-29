import React from "react"
import AboutItemMotionLayout from "../Layouts/AboutItemMotionLayout"
import ContentCardLayout from "@/components/Layouts/ContentCardLayout"
import AboutSectionTitle from "./AboutSectionTitle"
import ReferenceCard from "./ReferenceCard"

function ReferencesSection() {
  return (
    <section>
      <AboutItemMotionLayout className="w-full">
        <AboutSectionTitle i18nTitleKey="aboutPage.referencesTitle" />
      </AboutItemMotionLayout>
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          <AboutItemMotionLayout className="w-full lg:w-1/3">
            <ContentCardLayout>
              <ReferenceCard
                referenceKey="herveKoell2024"
                className="lg:h-60"
              />
            </ContentCardLayout>
          </AboutItemMotionLayout>
          <AboutItemMotionLayout className="w-full lg:w-2/3">
            <ContentCardLayout>
              <ReferenceCard
                referenceKey="yousriTabbakh2023"
                className="lg:h-60"
              />
            </ContentCardLayout>
          </AboutItemMotionLayout>
        </div>
        <AboutItemMotionLayout className="w-full">
          <ContentCardLayout>
            <ReferenceCard
              referenceKey="laurentReber2024"
              className="lg:h-60"
            />
          </ContentCardLayout>
        </AboutItemMotionLayout>
      </article>
    </section>
  )
}

export default ReferencesSection

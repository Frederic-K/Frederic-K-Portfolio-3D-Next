"use client"

import React from "react"
import Image from "next/image"
import clsx from "clsx"
import { useI18n, useCurrentLocale } from "@/locales/client"
import AboutItemMotionLayout from "../Layouts/AboutItemMotionLayout"
import ContentCardLayout from "@/components/Layouts/ContentCardLayout"
import AboutSectionTitle from "./AboutSectionTitle"
import ProgramsList from "./ProgramsList"
import InfiniteScrollBanner from "./InfiniteScrollBanner"

function SkillsSection() {
  const t = useI18n()
  const locale = useCurrentLocale()

  const wordcloudEN = "/images/skills/wordcloudEN.webp"
  const wordcloudFR = "/images/skills/wordcloudFR.webp"
  return (
    <section>
      <AboutItemMotionLayout className="w-full">
        <AboutSectionTitle i18nTitleKey="aboutPage.globalSkillTitle" />
      </AboutItemMotionLayout>
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          <AboutItemMotionLayout className="w-full lg:w-2/3">
            <ContentCardLayout>
              <Image
                src={locale === "fr" ? wordcloudFR : wordcloudEN}
                alt={t("aboutPage.skillsWordCloud")}
                layout="responsive"
                width={992}
                height={992}
                className="relative p-1"
              />
              <Image
                src={"/images/project/backgroundCube.webp"}
                alt="backgroundCube"
                layout="fill"
                objectFit="cover"
                className={clsx(
                  "pointer-events-none",
                  "absolute",
                  "inset-0",
                  "h-full",
                  "w-full",
                  "object-cover",
                  "opacity-15"
                )}
              />
            </ContentCardLayout>
          </AboutItemMotionLayout>
          <AboutItemMotionLayout className="hidden w-full lg:block lg:w-1/3">
            <ContentCardLayout className="">
              <ProgramsList className="flex h-full flex-col justify-between lg:min-h-[490px]" />
            </ContentCardLayout>
          </AboutItemMotionLayout>
        </div>
        <AboutItemMotionLayout className="w-full">
          <ContentCardLayout>
            <InfiniteScrollBanner />
          </ContentCardLayout>
        </AboutItemMotionLayout>
        <AboutItemMotionLayout className="w-full lg:hidden">
          <ContentCardLayout>
            <ProgramsList />
          </ContentCardLayout>
        </AboutItemMotionLayout>
      </article>
    </section>
  )
}

export default SkillsSection

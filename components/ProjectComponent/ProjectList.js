"use client"

import React, { useState, useCallback } from "react"
import { PROJECTS } from "@/lib/constants/project"
import { useI18n } from "@/locales/client"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import Image from "next/image"
import ProjectItemMotionLayout from "@/components/Layouts/ProjectItemMotionLayout"
import ContentCardLayout from "@/components/Layouts/ContentCardLayout"
import ProjectCarousel from "./ProjectCarousel"
import ProjectHeader from "./ProjectHeader"
import ProjectSpecifications from "./ProjectSpecifications"
import ProjectSkills from "./ProjectSkills"

function ProjectList() {
  const t = useI18n()
  const [openProject, setOpenProject] = useState(null)

  const toggleProject = useCallback((projectId) => {
    setOpenProject((prev) => (prev === projectId ? null : projectId))
  }, [])

  return (
    <>
      {PROJECTS.map((project, index) => (
        <ProjectItemMotionLayout
          index={index}
          key={project.id}
          className="w-full"
        >
          <ContentCardLayout>
            <div className="relative mb-4">
              {/* Background Cube */}
              <Image
                src={"/images/project/backgroundCube.webp"}
                alt={t(project.titleKey)}
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
              <ProjectHeader
                project={project}
                isOpen={openProject === project.id}
                onToggle={() => toggleProject(project.id)}
              />
              <AnimatePresence>
                {openProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden text-zinc-800 dark:text-zinc-200"
                  >
                    {/* Carousel */}
                    <div className="carousel-container relative h-56 p-2 sm:h-64 lg:h-80 2xl:h-96">
                      <ProjectCarousel
                        images={project.images}
                        title={t(project.titleKey)}
                        links={project.links}
                        isOpen={openProject === project.id}
                      />
                    </div>
                    {/* Project Details */}
                    <div className="p-4">
                      <p className="">{t(project.overviewKey)}</p>
                      <ProjectSpecifications
                        specifications={project.specificationsKeys}
                      />
                      {/* Skills */}
                      <div className="mt-4 flex flex-wrap">
                        <ProjectSkills skillsKeys={project.skillsKeys} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ContentCardLayout>
        </ProjectItemMotionLayout>
      ))}
    </>
  )
}

export default ProjectList

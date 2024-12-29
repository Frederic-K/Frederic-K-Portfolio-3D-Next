"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import clsx from "clsx"
import { useI18n } from "@/locales/client"
import { useModalStore } from "@/lib/store"

import CyberpunkLoader from "../CyberpunkLoader/CyberpunkLoader"
import { Github, Globe, LucideEye } from "lucide-react"

const ProjectLinks = ({ links, project }) => {
  const { openModal } = useModalStore()
  const iconMap = {
    github: Github,
    website: Globe,
    // Add more icon mappings as needed
  }

  return (
    <div className="project-links flex items-center justify-center gap-4">
      {links
        .filter((link) => iconMap[link.type])
        .map((link, index) => {
          const Icon = iconMap[link.type]
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-amber-400"
            >
              <Icon size={24} />
            </a>
          )
        })}
      <button
        onClick={(e) => {
          e.stopPropagation()
          openModal(project)
        }}
        className="text-white transition-colors hover:text-amber-400"
      >
        <LucideEye size={24} />
      </button>
    </div>
  )
}

const ProjectCardHalftone = ({ project, className = "" }) => {
  const t = useI18n()
  const [isClicked, setIsClicked] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef(null)

  const handleClickOutside = () => {
    if (isClicked) {
      setIsClicked(false)
    }
  }

  useOnClickOutside(cardRef, handleClickOutside)

  // Use optional chaining to safely access project.images
  const images = project?.images || []

  const imageUrl =
    images && images.length > 0
      ? images[0]
      : "https://images.unsplash.com/photo-1501769752-a59efa2298ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  if (!project) {
    return <CyberpunkLoader />
  }

  return (
    <div
      ref={cardRef}
      className={clsx(
        "cursor-pointer",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-glass-halo",
        className
      )}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div
        className={clsx(
          "project-card",
          "relative",
          "grid",
          "overflow-hidden",
          "rounded-lg",
          "h-full w-full"
        )}
        style={{
          "--image-url": `url(${imageUrl})`,
        }}
      >
        <div className="project-card-halftone-effect absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-end justify-between p-2 text-lg">
          <h2 className="text-xl font-bold text-orange-100">
            {t(project.titleKey)}
          </h2>
          <p className="w-52 text-right font-bold text-amber-600">
            {t(project.subtitleKey)}
          </p>
        </div>
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70"
            >
              <ProjectLinks
                links={project.links || []}
                project={project} // Pass the entire project object
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProjectCardHalftone

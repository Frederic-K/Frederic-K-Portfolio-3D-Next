"use client"

import { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import { X } from "lucide-react"
import { useI18n } from "@/locales/client"
import { useOnClickOutside } from "usehooks-ts"
import { useModalStore } from "@/lib/store/modalStore"
import Image from "next/image"

const ProjectModal = () => {
  const t = useI18n()
  const modalRef = useRef(null)
  const { isOpen, currentProject, closeModal } = useModalStore()

  useOnClickOutside(modalRef, closeModal)

  return (
    <AnimatePresence>
      {isOpen && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 min-h-screen bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className={clsx(
              "relative",
              "max-w-lg rounded-lg",
              "bg-zinc-200",
              "p-6",
              "shadow-xl",
              "dark:bg-zinc-800"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Cube */}
            <Image
              src={"/images/project/backgroundCube.webp"}
              alt={t(currentProject.titleKey)}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-cover opacity-15"
            />
            <button
              onClick={closeModal}
              className={clsx(
                "absolute right-4 top-4",
                "text-gray-500 hover:text-gray-700",
                "dark:text-gray-400 dark:hover:text-gray-200"
              )}
            >
              <X size={24} />
            </button>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {t(currentProject.titleKey)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t(currentProject.overviewKey)}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

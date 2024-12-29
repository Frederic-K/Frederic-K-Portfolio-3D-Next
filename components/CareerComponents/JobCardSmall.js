import { motion } from "framer-motion"
import { useI18n } from "@/locales/client"
import clsx from "clsx"
import JobCardContent from "./JobCardContent"

const JobCardSmall = ({ job, skills, index }) => {
  const t = useI18n()

  const motionProps = {
    initial: {
      opacity: 0,
      rotateY: 120,
      transformOrigin: "left center",
      z: -100,
    },
    whileInView: {
      opacity: 1,
      rotateY: 0,
      z: 0,
    },
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.5,
      delay: index * 0.2,
    },
    viewport: { once: true, margin: "-50px" },
  }

  return (
    <div className="persepective-1000">
      <motion.div
        {...motionProps}
        className={clsx(
          "p-4",
          "bg-zinc-300/30 dark:bg-zinc-800/30",
          "rounded-lg shadow-md",
          "border border-zinc-200 dark:border-zinc-700",
          "backdrop-blur-sm",
          "preserve-3d"
        )}
      >
        <JobCardContent job={job} skills={skills} t={t} />
      </motion.div>
    </div>
  )
}

export default JobCardSmall

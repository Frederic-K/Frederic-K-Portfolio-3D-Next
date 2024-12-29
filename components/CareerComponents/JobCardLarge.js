import { motion } from "framer-motion"
import { useI18n } from "@/locales/client"
import JobCardContent from "./JobCardContent"

const JobCardLarge = ({ job, skills, index, isEven }) => {
  const t = useI18n()

  const motionProps = {
    initial: {
      opacity: 0,
      rotateY: isEven ? 120 : -120,
      transformOrigin: isEven ? "right center" : "left center",
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
    <motion.div
      {...motionProps}
      className="rounded-lg border border-zinc-900 bg-white/30 shadow-md dark:border-zinc-100 dark:bg-black/30"
    >
      <JobCardContent job={job} skills={skills} t={t} />
    </motion.div>
  )
}

export default JobCardLarge

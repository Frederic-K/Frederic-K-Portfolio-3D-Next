"use client"

import { motion } from "framer-motion"
import { CheckCircle, X } from "lucide-react"
import { useEffect } from "react"
import { useToastStore } from "@/lib/store/toastStore"

const Toast = ({ id, message }) => {
  const removeToast = useToastStore((state) => state.removeToast)

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [id, removeToast])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="mb-4 flex items-center justify-between rounded-lg bg-green-500 p-4 text-white shadow-lg"
    >
      <div className="flex items-center">
        <CheckCircle className="mr-2 h-6 w-6" />
        <p>{message}</p>
      </div>
      <button
        onClick={() => removeToast(id)}
        className="ml-4 focus:outline-none"
      >
        <X className="h-5 w-5 text-zinc-100 hover:text-zinc-600" />
      </button>
    </motion.div>
  )
}

export default Toast

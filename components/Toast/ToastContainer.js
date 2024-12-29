"use client"

import { useToastStore } from "@/lib/store/toastStore"
import Toast from "./Toast"
import { AnimatePresence } from "framer-motion"

const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts)

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col space-y-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ToastContainer

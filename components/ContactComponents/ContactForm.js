"use client"
import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import clsx from "clsx"
import { useI18n } from "@/locales/client"
import { useToastStore } from "@/lib/store/toastStore"
import ToastContainer from "../Toast/ToastContainer"

const schema = z.object({
  name: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Z\s]+$/),
  email: z
    .string()
    .email()
    .max(100)
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  message: z.string().min(10).max(500),
})

const formContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const formItem = {
  hidden: { y: 20, opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    y: 0,
    opacity: 1,
    backdropFilter: "blur(5px)",
    transition: { type: "spring", stiffness: 200 },
  },
}

export default function ContactForm() {
  const t = useI18n()
  const [isSuccess, setIsSuccess] = useState(false)
  const [charCount, setCharCount] = useState({ name: 0, email: 0, message: 0 })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  })
  const addToast = useToastStore((state) => state.addToast)

  useEffect(() => {
    const subscription = watch((formValues, { name: fieldName }) => {
      if (fieldName) {
        setCharCount((prevCounts) => ({
          ...prevCounts,
          [fieldName]: formValues[fieldName]?.length || 0,
        }))
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: "Frederic-K",
        message: data.message,
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      reset()
      addToast({ message: t("contactPage.successMessage") })
    } catch (error) {
      console.error("Error sending email:", error)
      addToast({ message: t("contactPage.errorMessage"), type: "error" })
    }
  }

  const renderCharCount = (field, max) => (
    <span className="absolute bottom-2 right-2 text-xs text-zinc-600">
      {charCount[field]}/{max}
    </span>
  )

  const inputClasses = clsx(
    "w-full rounded-lg p-4",
    "bg-white bg-opacity-30",
    "focus:outline-none focus:ring-2 focus:ring-amber-500",
    "placeholder:font-semibold placeholder:text-zinc-700",
    "hover:shadow-glass-halo",
    "transition-all duration-300 ease-in-out"
  )

  return (
    <motion.div initial="hidden" animate="visible" className="relative">
      <motion.form
        variants={formContainer}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
        className={clsx("flex w-full max-w-md flex-col space-y-4")}
      >
        <motion.div variants={formItem} className="relative">
          <input
            {...register("name")}
            placeholder={t("contactPage.form.namePlaceholder")}
            className={inputClasses}
          />
          {renderCharCount("name", 50)}
          {errors.name && (
            <p className="mt-1 text-sm font-bold text-red-500">
              {t("contactPage.form.nameError")}
            </p>
          )}
        </motion.div>

        <motion.div variants={formItem} className="relative">
          <input
            {...register("email")}
            placeholder={t("contactPage.form.emailPlaceholder")}
            className={inputClasses}
          />
          {renderCharCount("email", 100)}
          {errors.email && (
            <p className="mt-1 text-sm font-bold text-red-500">
              {t("contactPage.form.emailError")}
            </p>
          )}
        </motion.div>

        <motion.div variants={formItem} className="relative">
          <textarea
            {...register("message")}
            placeholder={t("contactPage.form.messagePlaceholder")}
            className={inputClasses}
          ></textarea>
          {renderCharCount("message", 500)}
          {errors.message && (
            <p className="mt-1 text-sm font-bold text-red-500">
              {t("contactPage.form.messageError")}
            </p>
          )}
        </motion.div>

        <motion.button
          variants={formItem}
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            "rounded-lg p-4 text-zinc-700 hover:font-semibold hover:text-orange-700",
            "focus:outline-none focus:ring-2 focus:ring-amber-500",
            "bg-orange-200",
            "dark:bg-orange-300",
            "shadow-convex-light dark:shadow-convex-dark",
            "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
            "transition-[box-shadow,font-weight,color] duration-300 ease-in-out",
            { "cursor-not-allowed opacity-50": isSubmitting }
          )}
        >
          {isSubmitting ? (
            <span className="animate-pulse font-semibold text-orange-700">
              {t("contactPage.form.sendingButton")}
            </span>
          ) : (
            t("contactPage.form.sendButton")
          )}
        </motion.button>
      </motion.form>
      <ToastContainer />
    </motion.div>
  )
}

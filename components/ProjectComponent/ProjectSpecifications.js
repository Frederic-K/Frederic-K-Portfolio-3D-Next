"use client"

import React from "react"
import { useI18n } from "@/locales/client"

function ProjectSpecifications({ specifications }) {
  const t = useI18n()
  return (
    <>
      <div className="mt-4">
        <h5 className="font-bold">{t("common.technicalspecifications")}</h5>
        <ul className="list-inside list-disc">
          {specifications.technical.map((spec, index) => (
            <li key={index}>{t(spec)}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h5 className="font-bold">{t("common.functionalspecifications")}</h5>
        <ul className="list-inside list-disc">
          {specifications.functional.map((spec, index) => (
            <li key={index}>{t(spec)}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProjectSpecifications

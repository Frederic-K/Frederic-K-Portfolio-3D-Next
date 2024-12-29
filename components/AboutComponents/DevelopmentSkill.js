/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import clsx from "clsx"
import Image from "next/image"

function DevelopmentSkill({ className, perLine, smPerLine }) {
  return (
    <div className={clsx(className, "relative")}>
      <img
        src={`https://skillicons.dev/icons?i=html,css,js,react,redux,sass,tailwind,materialui,express,nodejs,mongodb,nextjs,vite,cypress,threejs,tauri,npm,yarn,git,github,figma,regex,vscode,netlify,firebase,postman&perline=${perLine}&size=64`}
        className={`sm:hidden`}
        alt="Frederic-K's Development Skills"
        loading="lazy"
      />
      <img
        src={`https://skillicons.dev/icons?i=html,css,js,react,redux,sass,tailwind,materialui,express,nodejs,mongodb,nextjs,vite,cypress,threejs,tauri,npm,yarn,git,github,figma,regex,vscode,netlify,firebase,postman&perline=${smPerLine}&size=64`}
        className={`hidden sm:block`}
        alt="Frederic-K's Development Skills"
        loading="lazy"
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
    </div>
  )
}

export default DevelopmentSkill

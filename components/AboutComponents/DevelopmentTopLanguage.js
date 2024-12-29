/* eslint-disable @next/next/no-img-element */
import React from "react"
import clsx from "clsx"
import Image from "next/image"

function DevelopmentTopLanguage({ className }) {
  return (
    <div className={clsx(className, "relative")}>
      <img
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Frederic-K&theme=transparent&hide_border=true&title_color=ffffff&text_color=FFFFFF&text_bold=true&layout=donut`}
        alt="Frederic-K's Top Languages"
        loading="lazy"
        className="w-full"
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

export default DevelopmentTopLanguage

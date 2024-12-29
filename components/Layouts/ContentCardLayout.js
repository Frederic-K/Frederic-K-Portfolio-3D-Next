import React from "react"
import clsx from "clsx"

const ContentCardLayout = ({ children, className }) => {
  return (
    <article className={clsx("group", className)}>
      <div
        className={clsx(
          "w-full rounded-lg",
          "bg-white/30 dark:bg-black/30",
          "shadow-convex-light dark:shadow-convex-dark",
          "backdrop-blur-sm",
          "transition-all duration-300 ease-in-out",
          "group-hover:shadow-glass-halo"
        )}
      >
        {children}
      </div>
    </article>
  )
}

export default ContentCardLayout

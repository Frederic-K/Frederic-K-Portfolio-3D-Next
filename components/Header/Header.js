"use client"

import React, { useState, useRef } from "react"
import clsx from "clsx"
import { useI18n } from "@/locales/client"
import { useThemeStore } from "@/lib/store/themeStore"
import { motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import NavBarLinks from "./NavBarLinks"
import NavDropdownLinks from "./NavDropdownLinks"
import NavMenuButton from "./NavMenuButton"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import { NAVMENU_LINKS } from "@/lib/constants"

export default function Header() {
  const t = useI18n()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const isDarkTheme = useThemeStore((state) => state.isDarkTheme)
  const headerRef = useRef(null)
  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)
  useOnClickOutside(headerRef, closeNav)

  return (
    <motion.header
      ref={headerRef}
      className={clsx("fixed left-0 right-0 top-0 z-50", {
        "shadow-md backdrop-blur-md": isNavOpen,
      })}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <NavMenuButton
            onClick={toggleNav}
            isDarkTheme={isDarkTheme}
            isOpen={isNavOpen}
          />
          <NavBarLinks
            isOpen={isNavOpen}
            setIsOpen={setIsNavOpen}
            links={NAVMENU_LINKS}
            t={t}
          />
        </div>
        <div className="flex gap-2">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
      <NavDropdownLinks
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
        links={NAVMENU_LINKS}
        t={t}
      />
    </motion.header>
  )
}

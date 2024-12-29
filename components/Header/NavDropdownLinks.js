"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const NavDropdownLinks = ({ isOpen, links, t }) => {
  const pathname = usePathname()

  const linkClass = (path) => {
    const currentPath = pathname.replace(/^\/[^/]+/, "") || "/"
    return `block px-4 py-2 text-lg font-bold ${
      currentPath === path
        ? "bg-gradient-to-r from-orange-700 via-orange-400 to-orange-700 bg-clip-text text-transparent"
        : "text-zinc-200 hover:bg-gradient-to-r hover:from-orange-700 hover:via-orange-400 hover:to-orange-700 hover:bg-clip-text hover:text-transparent"
    }`
  }

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-2">
              {links.map((link, idx) => (
                <motion.li
                  key={`${link.labelKey}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <Link href={link.path} className={linkClass(link.path)}>
                    {t(link.labelKey)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavDropdownLinks

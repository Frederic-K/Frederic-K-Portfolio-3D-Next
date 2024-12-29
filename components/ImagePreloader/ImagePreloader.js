"use client"

import { useEffect } from "react"

const ImagePreloader = ({ imageSources }) => {
  useEffect(() => {
    imageSources.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [imageSources])

  return null
}

export default ImagePreloader

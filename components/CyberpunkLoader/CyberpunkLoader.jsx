import React from "react"

const CyberpunkLoader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-pulse rounded-full border-4 border-red-700"></div>
        <div className="absolute inset-2 animate-spin rounded-full border-4 border-orange-500"></div>
        <div className="absolute inset-4 animate-ping rounded-full border-4 border-yellow-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="animate-pulse text-xl font-bold text-white">
            LOADING
          </span>
        </div>
      </div>
    </div>
  )
}

export default CyberpunkLoader

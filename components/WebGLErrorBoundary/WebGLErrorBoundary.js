"use client"
import React from "react"

class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("WebGL Error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          Sorry, there was a problem loading the 3D content. Please try
          refreshing the page or using a different browser.
        </div>
      )
    }

    return this.props.children
  }
}

export default WebGLErrorBoundary

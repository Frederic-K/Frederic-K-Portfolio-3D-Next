/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "exo2": ["var(--font-exo2)", "var(--font-geist-sans)", "sans-serif"],
        "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "glass-halo":
          "5px 5px 20px 0px rgba(255,165,0, 0.3), 0 0 15px 3px rgba(255, 140, 0, 0.6)",
        "convex-light":
          "4px 4px 8px 0 rgba(0,0,0,0.2), -4px -4px 8px 0 rgba(255,255,255,0.3), inset 1px 1px 2px rgba(255,255,255,0.3), inset -1px -1px 2px rgba(0,0,0,0.1)",
        "convex-dark":
          "4px 4px 8px 0 rgba(0,0,0,0.4), -4px -4px 8px 0 rgba(255,255,255,0.1), inset 1px 1px 2px rgba(255,255,255,0.1), inset -1px -1px 2px rgba(0,0,0,0.2)",
        "pressed-light":
          "inset 4px 4px 8px 0 rgba(0,0,0,0.3), inset -4px -4px 8px 0 rgba(255,255,255,0.3)",
        "pressed-dark":
          "inset 4px 4px 8px 0 rgba(0,0,0,0.5), inset -4px -4px 8px 0 rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "firefly-radial":
          // // yellow
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.8) 0%, rgba(217,217,217, 0) 100%)",
        // // yelow/black radial gradient for firefly effect
        // "radial-gradient(50% 50% at 50% 50%, rgba(255, 200, 0, 0.8) 0%, rgba(217,217,217, 0) 100%)",
        // // Blue electric radial gradient for firefly effect
        // "radial-gradient(50% 50% at 50% 50%, rgba(0, 191, 255, 0.6) 0%, rgba(0, 0, 139, 0) 100%)",
      },
      animation: {
        "spin-slow": "spin 45s linear infinite",
        "spin-btn-slow": "spin 15s linear infinite",
        "spin-slow-reverse": "spin 45s linear infinite reverse",
        "fireFliesMove": "fireFliesMove 3s infinite alternate",
        "auto-run": "autoRun 20s linear infinite",
      },
      keyframes: {
        fireFliesMove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
        autoRun: {
          from: {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(0deg)",
          },
          to: {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(360deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover", "hover"],
    },
  },
  plugins: [
    require("./plugins/maskPlugin"),
    // Add your other plugins here
  ],
}

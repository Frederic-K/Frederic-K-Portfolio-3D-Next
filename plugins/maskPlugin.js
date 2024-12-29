module.exports = function ({ addUtilities }) {
  const newUtilities = {
    ".mask-fade-to-top": {
      maskImage: "linear-gradient(to top, black 30%, transparent 50%)",
      WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 50%)",
    },
  }
  addUtilities(newUtilities, ["responsive", "hover"])
}

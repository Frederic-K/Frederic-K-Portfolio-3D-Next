import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useThemeStore = create(
  persist(
    (set) => ({
      isDarkTheme: false,
      toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
    }),
    { name: "theme-storage" }
  )
)

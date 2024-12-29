import { create } from "zustand"

export const useModalStore = create((set) => ({
  isOpen: false,
  currentProject: null,
  openModal: (project) => set({ isOpen: true, currentProject: project }),
  closeModal: () => set({ isOpen: false, currentProject: null }),
}))

import { create } from "zustand"

type IndexStore = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useIndexStore = create<IndexStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

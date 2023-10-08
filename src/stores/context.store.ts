import { create } from "zustand"

type Context = {
  /**
   * The URL of the current tab
   */
  currentUrl: string
}

export const useContextStore = create<Context>((set) => ({
  currentUrl: ""
}))

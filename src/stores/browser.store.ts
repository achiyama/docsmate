import { create } from "zustand";

type BrowserState = {
  currentUrl?: string;
  fetchCurrentUrl: () => void;
};

export const useBrowsertStore = create<BrowserState>((set) => ({
  currentUrl: undefined,
  fetchCurrentUrl: () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      set({ currentUrl: tabs[0].url });
    });
  },
  swtichUrl: () => {}
}));

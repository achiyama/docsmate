import { create } from "zustand";

type BrowserState = {
  currentPage?: {
    title: string;
    url: string;
    domain: string;
  };
  fetchCurrentPage: () => void;
};

export const useBrowsertStore = create<BrowserState>((set) => ({
  currentUrl: undefined,
  fetchCurrentPage: () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      set({
        currentPage: {
          title: currentTab.title,
          url: currentTab.url,
          domain: new URL(currentTab.url).hostname
        }
      });
    });
  }
}));

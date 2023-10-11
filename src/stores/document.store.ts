import { createStore } from "zustand";

import { useBrowsertStore } from "./browser.store";

type DocumentState = {
  isValid: boolean;
  currentDocument?: {
    name: string;
  };
};

export const documentStore = createStore<DocumentState>((set) => ({
  isValid: false,
  currentDocument: undefined,
  fetchCurrentDocument: () => {
    const browserStore = useBrowsertStore();
    browserStore.currentPage.domain;
  }
}));

import { createStore } from "zustand";

import { useBrowsertStore } from "./browser.store";
import documents from "./documents.json";

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
    const domain = browserStore.currentPage.domain;

    const document = documents.regex.find(
      (document) => document.domain === domain
    );
  }
}));

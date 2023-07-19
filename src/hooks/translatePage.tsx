import { useEffect, useState } from "react";

import { Documents } from "~domains/documents/documents";
import { DocumentUrl } from "~domains/documents/urls/document-url";

/**
 * ページの言語を切り替える
 * @returns のURL
 */
export const useTranslatePage = (url: URL) => {
  console.log(url);
  const documents = new Documents();
  const document = documents.getByUrl(url);
  console.log(document);
  return url;
};

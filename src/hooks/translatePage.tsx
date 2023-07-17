import { useEffect, useState } from "react";

import { DocumentUrl } from "~domains/documents/urls/document-url";

/**
 * ページの言語を切り替える
 * @returns のURL
 */
export const useTranslatePage = (url: string) => {
  const targetUrl = new DocumentUrl(url);
  console.log(targetUrl);
  return url;
};

import { useEffect, useRef, useState } from "react";

/**
 * 現在開いているぺージのURLを取得する
 * @returns のURL
 */
export const useGetCurrentPage = () => {
  const [currentUrl, setCurrentUrl] = useState<URL>();

  useEffect(() => {
    const getCurrentUrl = async () => {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      setCurrentUrl(new URL(tabs[0].url!));
    };
    getCurrentUrl();
  }, []);

  if (!currentUrl) throw new Error("URLが取得できませんでした");

  return currentUrl!;
};

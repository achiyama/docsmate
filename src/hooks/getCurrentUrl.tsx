import { useEffect, useState } from "react";

/**
 * 現在開いているぺージのURLを取得する
 * @returns のURL
 */
export const useGetCurrentUrl = () => {
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

  return currentUrl;
};

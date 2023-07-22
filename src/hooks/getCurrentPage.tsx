import { useEffect, useRef, useState } from "react";

/**
 * 現在開いているぺージのURLを取得する
 * @returns のURL
 */
export const useGetCurrentPage = () => {
  const [currentUrl, setCurrentUrl] = useState<string>();

  useEffect(() => {
    const getCurrentUrl = async () => {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      setCurrentUrl(tabs[0].url!);
    };
    getCurrentUrl();
  }, [currentUrl]);

  return currentUrl!;
};

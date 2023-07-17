import { useEffect, useState } from "react";

/**
 * 現在開いているぺージのURLを取得する
 * @returns のURL
 */
export const useGetCurrentPage = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const getCurrentUrl = async () => {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      const currentUrl = tabs[0].url!;
      setUrl(currentUrl);
    };
    getCurrentUrl();
  }, []);

  return url;
};

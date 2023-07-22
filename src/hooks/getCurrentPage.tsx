import { useEffect, useRef, useState } from "react";

/**
 * 現在開いているぺージのURLを取得する
 * @returns のURL
 */
export const useGetCurrentPage = () => {
  const [url, setUrl] = useState<URL>();

  useEffect(() => {
    console.log("useEffect");
    const getCurrentUrl = async () => {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      console.log(`現在開いているURL: ${tabs[0].url}`);
      const currentUrl = new URL(tabs[0].url!);
      setUrl(currentUrl);
    };
    getCurrentUrl();
  });
  return url!;
};

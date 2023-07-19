import { useEffect, useRef, useState } from "react";

/**
 * 現在開いているぺージのURLを取得する
 * @returns のURL
 */
export const useGetCurrentPage = () => {
  const refFirstRef = useRef(true);
  const [url, setUrl] = useState<URL>();

  useEffect(() => {
    // 開発環境の場合、初回のみ処理をスキップする
    if (process.env.NODE_ENV === "development") {
      if (refFirstRef.current) {
        refFirstRef.current = false;
        return;
      }
    }

    const getCurrentUrl = async () => {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      const currentUrl = new URL(tabs[0].url!);
      setUrl(currentUrl);
    };
    getCurrentUrl();
  }, []);

  return url!;
};

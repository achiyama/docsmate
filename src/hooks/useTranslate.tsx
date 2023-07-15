import { useEffect, useState } from "react";

export const useTranslate = () => {
  const [url, setUrl] = useState("");

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
  }, [url]);

  return url;
};

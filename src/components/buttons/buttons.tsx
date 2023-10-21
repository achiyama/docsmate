import { Button } from "@/components/button/button";
import { useOpenTab } from "@/hooks/useOpenCurrentTab";
import { useBrowsertStore } from "@/stores/browser.store";

export const Buttons = () => {
  const currentUrl = useBrowsertStore((state) => state.currentPage?.url);

  const openCurrentTab = useOpenTab({
    url: currentUrl,
    type: "currentTab"
  });
  const openNewTab = useOpenTab({
    url: currentUrl,
    type: "newTab"
  });
  const openNewWindow = useOpenTab({
    url: currentUrl,
    type: "newWindow"
  });

  console.info(`[Current URL]: ${currentUrl}`);

  return (
    <>
      <div className="dt-m-1">
        <Button buttonName="Current Tab" onClick={openCurrentTab}></Button>
      </div>
      <div className="dt-m-1">
        <Button buttonName="New Tab" onClick={openNewTab}></Button>
      </div>
      <div className="dt-m-1">
        <Button buttonName="New Window" onClick={openNewWindow}></Button>
      </div>
    </>
  );
};

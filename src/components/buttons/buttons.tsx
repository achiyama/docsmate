import { useOpenTab } from "@/hooks/useOpenCurrentTab";
import { useBrowserStore } from "@/stores/browser.store";
import Button from "@mui/material/Button";

export const Buttons = () => {
  const currentUrl = useBrowserStore((state) => state.currentPage?.url);

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
        <Button
          className="dt-w-full"
          variant="outlined"
          onClick={openCurrentTab}>
          Current Tab
        </Button>
      </div>
      <div className="dt-m-1">
        <Button className="dt-w-full" variant="outlined" onClick={openNewTab}>
          New Tab
        </Button>
      </div>
      <div className="dt-m-1">
        <Button
          className="dt-w-full"
          variant="outlined"
          onClick={openNewWindow}>
          New Window
        </Button>
      </div>
    </>
  );
};

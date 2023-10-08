import { Button } from "~components/button/button"
import { useOpenTab } from "~hooks/useOpenCurrentTab"
import { useBrowsertStore } from "~stores/browser.store"

export const Buttons = () => {
  const fetchCurrentUrl = useBrowsertStore((state) => state.fetchCurrentUrl)
  const currentUrl = useBrowsertStore((state) => state.currentUrl)

  const openCurrentTab = useOpenTab({
    url: "https://www.youtube.com/watch?v=TQs2svOTiaQ",
    type: "currentTab"
  })
  const openNewTab = useOpenTab({
    url: "https://www.youtube.com/watch?v=TQs2svOTiaQ",
    type: "newTab"
  })
  const openNewWindow = useOpenTab({
    url: "https://www.youtube.com/watch?v=TQs2svOTiaQ",
    type: "newWindow"
  })

  fetchCurrentUrl()

  console.info(`[Current URL]: ${currentUrl}`)

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
  )
}

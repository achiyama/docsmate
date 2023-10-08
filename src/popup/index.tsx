import "../main.css"

import { useOpenTab } from "~hooks/useOpenCurrentTab"
import { useBrowsertStore } from "~stores/browser.store"
import { Button } from "~ui/button/button"

import { useIndexStore } from "./index.store"

const IndexPopup = () => {
  const bears = useIndexStore((state) => state.bears)
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

  return (
    <div>
      <div className="dt-bg-slate-300">{currentUrl}</div>
      <div className="dt-m-1">
        <Button buttonName="Current Tab" onClick={openCurrentTab}></Button>
      </div>
      <div className="dt-m-1">
        <Button buttonName="New Tab" onClick={openNewTab}></Button>
      </div>
      <div className="dt-m-1">
        <Button buttonName="New Window" onClick={openNewWindow}></Button>
      </div>
    </div>
  )
}

export default IndexPopup

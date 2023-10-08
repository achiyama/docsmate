import "../main.css"

import { useOpenTab } from "~hooks/useOpenCurrentTab"
import { useBrowsertStore } from "~stores/browser.store"
import { Button } from "~ui/button/button"

import { useIndexStore } from "./index.store"

const IndexPopup = () => {
  const bears = useIndexStore((state) => state.bears)
  const increasePopulation = useIndexStore((state) => state.increasePopulation)
  const removeAllBears = useIndexStore((state) => state.removeAllBears)
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
      <h1 className="text-3xl font-bold underline">{bears} around here ...</h1>
      <p>{currentUrl}</p>
      <button onClick={increasePopulation}>Add</button>
      <button onClick={removeAllBears}>DeleteAll</button>
      <Button buttonName="Current Tab" onClick={openCurrentTab}></Button>
      <Button buttonName="New Tab" onClick={openNewTab}></Button>
      <Button buttonName="New Window" onClick={openNewWindow}></Button>
    </div>
  )
}

export default IndexPopup

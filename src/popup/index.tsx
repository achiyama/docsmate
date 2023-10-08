import { Button } from "~ui/button/button"

import { useIndexStore } from "./index.store"

const IndexPopup = () => {
  const bears = useIndexStore((state) => state.bears)
  const increasePopulation = useIndexStore((state) => state.increasePopulation)
  const removeAllBears = useIndexStore((state) => state.removeAllBears)

  return (
    <div>
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>Add</button>
      <button onClick={removeAllBears}>DeleteAll</button>
      <Button url={"https://www.youtube.com/watch?v=TQs2svOTiaQ"}></Button>
    </div>
  )
}

export default IndexPopup

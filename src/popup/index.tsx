import { Footer } from "~components/footer"

import "../main.css"

import { Buttons } from "~components/buttons/buttons"
import { Status } from "~components/status"

const IndexPopup = () => {
  return (
    <div className="dt-w-[200px] dt-bg-gray-50">
      <Status valid={true} siteName="Microsoft Docs"></Status>
      <Buttons></Buttons>
      <Footer></Footer>
    </div>
  )
}

export default IndexPopup

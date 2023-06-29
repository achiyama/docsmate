import githubMark from "data-base64:~assets/github-mark.png"
import twitterLogoBlue from "data-base64:~assets/twitter-logo-blue.png"
import { useState } from "react"

import Icon from "../components/images/icon"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 12
        }}>
        <h2>DocsMate</h2>
        <input onChange={(e) => setData(e.target.value)} value={data} />
        <a href="https://docs.plasmo.com" target="_blank">
          View Docs
        </a>
        <Icon url="https://github.com/achiyama/docsmate" src={githubMark} />
        <Icon
          url="https://github.com/achiyama/docsmate"
          src={twitterLogoBlue}
        />
      </div>
    </>
  )
}

export default IndexPopup

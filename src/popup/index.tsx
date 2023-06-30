import githubMark from "data-base64:~assets/github-mark.png"
import twitterLogoBlue from "data-base64:~assets/twitter-logo-blue.png"
import { useState } from "react"

import Icon from "../components/images/icon"

function IndexPopup() {
  const [data, setData] = useState("")

  function hello() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs[0].url)
    })
  }

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
        <input></input>
        <button onClick={hello}>変更する</button>
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

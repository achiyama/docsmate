import githubMark from "data-base64:~assets/github-mark.png"
import twitterLogoBlue from "data-base64:~assets/twitter-logo-blue.png"
import { useState } from "react"

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
      </div>
      <a target="_blank" href="https://github.com/achiyama/docsmate">
        <img
          src={githubMark}
          style={{
            width: 16,
            height: 16,
            marginRight: 8
          }}></img>
      </a>
      <a target="_blank" href="https://twitter.com/achiy4ma">
        <img
          src={twitterLogoBlue}
          style={{
            width: 16,
            height: 16,
            marginRight: 8
          }}></img>
      </a>
    </>
  )
}

export default IndexPopup

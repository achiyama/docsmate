import React from "react"

export const Icon = (props) => {
  return (
    <a href={props.url} target="_blank">
      <img src={props.src} style={{ width: "16px" }} />
    </a>
  )
}

export default Icon

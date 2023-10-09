import React from "react"

type IconProps = {
  url: string
  src: string
}

export const Icon = (props: IconProps) => {
  return (
    <a href={props.url} target="_blank">
      <img src={props.src} style={{ width: "16px" }} />
    </a>
  )
}

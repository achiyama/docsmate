import React from "react"

type IconProps = {
  url: string
  src: string
  size: number
}

export const Icon = (props: IconProps) => {
  return (
    <a href={props.url} target="_blank">
      <img src={props.src} style={{ width: props.size, height: props.size }} />
    </a>
  )
}

export type OpenType = "currentTab" | "newTab" | "newWindow"

export type OpenTabParams = {
  url: string
  type: OpenType
}

export const useOpenTab = (params: OpenTabParams) => {
  const { url, type } = params

  const openTab = () => {
    switch (type) {
      case "currentTab":
        chrome.tabs.update({ url })
        break
      case "newTab":
        chrome.tabs.create({ url })
        break
      case "newWindow":
        chrome.windows.create({ url })
        break
      default:
        break
    }
  }

  return openTab
}

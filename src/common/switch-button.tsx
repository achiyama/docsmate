export const SwitchButton = (props: { name: string; type: number }) => {
  const open = () => {
    switch (props.type) {
      case 1:
        chrome.tabs.update({ url: "https://www.google.com/" })
        break
      case 2:
        chrome.tabs.create({ url: "https://www.google.com/" })
        break
      case 3:
        chrome.windows.create({ url: "https://www.google.com/" })
        break
      default:
        break
    }
  }

  return (
    <>
      <button
        onClick={open}
        className="w-40 bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {props.name}
      </button>
    </>
  )
}

export default SwitchButton

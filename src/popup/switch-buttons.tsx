import SwitchButton from "../common/switch-button"

export const SwitchButtons = () => {
  return (
    <>
      <div className="mb-1">
        <SwitchButton name={"Current Tab"} type={1}></SwitchButton>
      </div>
      <div className="mb-1">
        <SwitchButton name={"New Tab"} type={1}></SwitchButton>
      </div>
      <div className="mb-1">
        <SwitchButton name={"New Window"} type={1}></SwitchButton>
      </div>
    </>
  )
}

export default SwitchButtons

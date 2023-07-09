import SwitchButton from "../commons/switch-button"

export const SwitchButtons = () => {
  return (
    <>
      <div className="mb-1">
        <SwitchButton name={"Current Tab"} type={1}></SwitchButton>
      </div>
      <div className="mb-1">
        <SwitchButton name={"New Tab"} type={2}></SwitchButton>
      </div>
      <div className="mb-1">
        <SwitchButton name={"New Window"} type={3}></SwitchButton>
      </div>
    </>
  )
}

export default SwitchButtons

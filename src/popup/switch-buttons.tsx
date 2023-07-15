import SwitchButton from "../commons/switch-button";

export const SwitchButtons = (props: { url: string }) => {
  return (
    <>
      <div className="mb-1">
        <SwitchButton
          name={"Current Tab"}
          type={1}
          url={props.url}></SwitchButton>
      </div>
      <div className="mb-1">
        <SwitchButton name={"New Tab"} type={2} url={props.url}></SwitchButton>
      </div>
      <div className="mb-1">
        <SwitchButton
          name={"New Window"}
          type={3}
          url={props.url}></SwitchButton>
      </div>
    </>
  );
};

export default SwitchButtons;

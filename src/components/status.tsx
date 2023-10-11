import { SVGIcon } from "./svg/svg-icon";

type StatusProps = {
  valid: boolean;
  siteName: string;
};

export const Status = (props: StatusProps) => {
  return (
    <div className="dt-w-full dt-bg-gray-50">
      {props.valid ? (
        <ValidStatus siteName={props.siteName}></ValidStatus>
      ) : (
        <InvalidStatus></InvalidStatus>
      )}
    </div>
  );
};

type ValidStatusProps = {
  siteName: string;
};

const ValidStatus = (props: ValidStatusProps) => {
  return (
    <div className="dt-m-3 dt-flex dt-items-center dt-text-center">
      <SVGIcon size={2} color="#434344" type="prohibition" />
      <div className="dt-text-base dt-grow dt-font-bold dt-text-gray-600">
        {props.siteName}
      </div>
    </div>
  );
};

type InvalidStatusProps = {};

const InvalidStatus = (props: InvalidStatusProps) => {
  return <div></div>;
};

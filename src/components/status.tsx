import { useBrowsertStore } from "@/stores/browser.store";

import { SVGIcon } from "./svg/svg-icon";

type StatusProps = {
  valid: boolean;
  siteName: string;
};

export const Status = (props: StatusProps) => {
  return (
    <div className="dt-w-full">
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
  const domain = useBrowsertStore((state) => state.currentPage?.domain);

  return (
    <>
      <div className="dt-m-3 dt-flex dt-items-center dt-text-center">
        <SVGIcon size={2} color="#434344" type="checkmark" />
        <div className="dt-flex-grow">
          <div className="dt-text-sm dt-font-bold dt-text-gray-600">
            {props.siteName}
          </div>
          <div className="dt-font-bold">{domain}</div>
        </div>
      </div>
    </>
  );
};

type InvalidStatusProps = {};

const InvalidStatus = (props: InvalidStatusProps) => {
  const domain = useBrowsertStore((state) => state.currentPage?.domain);

  return (
    <>
      <div className="dt-m-3 dt-flex dt-items-center dt-text-center">
        <SVGIcon size={2} color="#434344" type="checkmark" />
        <div className="dt-flex-grow">
          <div className="dt-text-sm dt-font-bold dt-text-red-500">
            This Page is Invalid
          </div>
          <div className="dt-font-bold">{domain}</div>
        </div>
      </div>
    </>
  );
};

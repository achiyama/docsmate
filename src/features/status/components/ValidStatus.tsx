import { SVGIcon } from "@/components/svg/svg-icon";
import { useBrowsertStore } from "@/stores/browser.store";

type ValidStatusProps = {
  siteName: string;
};

export const ValidStatus = (props: ValidStatusProps) => {
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

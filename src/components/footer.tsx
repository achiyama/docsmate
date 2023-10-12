import githubMark from "data-base64:../../assets/github-mark.png";

import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <div className="dt-flex dt-py-2 dt-px-4 dt-border-t-[1px]">
      <Icon
        url="https://github.com/achiyama/docsmate"
        src={githubMark}
        size={16}
      />
    </div>
  );
};

import githubMark from "data-base64:~assets/github-mark.png";

import Icon from "./images/icon";

export const Footer = () => {
  return (
    <>
      <div className="flex py-2 px-4 border-t-[1px]">
        <Icon url="https://github.com/achiyama/docsmate" src={githubMark} />
      </div>
    </>
  );
};

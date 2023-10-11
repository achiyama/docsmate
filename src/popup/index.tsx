import { Buttons } from "@/components/buttons/buttons";
import { Footer } from "@/components/footer";
import { Status } from "@/components/status";
import { useBrowsertStore } from "@/stores/browser.store";

import "../main.css";

const IndexPopup = () => {
  const fetchCurrentUrl = useBrowsertStore((state) => state.fetchCurrentPage);
  fetchCurrentUrl();

  return (
    <div className="dt-w-[200px] dt-border-t-8 dt-border-blue-300">
      <div>
        <Status valid={false} siteName="This Page is Invalid"></Status>
        <Buttons></Buttons>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default IndexPopup;

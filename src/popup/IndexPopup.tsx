import { useBrowsertStore } from "@/stores/browser.store";

import "../main.css";

import { Buttons } from "@/components/buttons/Buttons";
import { Footer } from "@/components/Footer";
import { Status } from "@/components/Status";

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

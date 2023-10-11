import { Buttons } from "@/components/buttons/buttons";
import { Footer } from "@/components/footer";
import { Status } from "@/components/status";
import { useBrowsertStore } from "@/stores/browser.store";

const IndexPopup = () => {
  const fetchCurrentUrl = useBrowsertStore((state) => state.fetchCurrentUrl);
  fetchCurrentUrl();

  return (
    <div className="dt-w-[200px] dt-bg-gray-50">
      <Status valid={true} siteName="This Page is Invalid"></Status>
      <Buttons></Buttons>
      <Footer></Footer>
    </div>
  );
};

export default IndexPopup;

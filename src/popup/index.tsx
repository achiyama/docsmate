import { useBrowsertStore } from "@/stores/browser.store";

import "../main.css";

import { Buttons } from "@/components/buttons/Buttons";
import { Footer } from "@/components/Footer";
import { Status } from "@/components/Status";
import { MainLayout } from "@/Layout/MainLayout";

const IndexPopup = () => {
  const fetchCurrentUrl = useBrowsertStore((state) => state.fetchCurrentPage);
  fetchCurrentUrl();

  return (
    <MainLayout>
      <div>
        <Status valid={false} siteName="This Page is Invalid" />
        <Buttons />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default IndexPopup;

import { useBrowsertStore } from "@/stores/browser.store";

import "../main.css";

import { Buttons } from "@/components/buttons/buttons";
import { Footer } from "@/components/footer";
import { Status } from "@/components/status";
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

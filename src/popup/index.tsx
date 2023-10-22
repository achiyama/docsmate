import { useBrowsertStore } from "@/stores/browser.store";
import { useDocumentStore } from "@/stores/document.store";

import "../main.css";

import { Buttons } from "@/components/buttons/buttons";
import { Footer } from "@/components/footer";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Status } from "@/components/status";
import { MainLayout } from "@/Layout/MainLayout";

const IndexPopup = () => {
  const fetchCurrentUrl = useBrowsertStore((state) => state.fetchCurrentPage);
  fetchCurrentUrl();
  // const fetchCurrentDocument = useDocumentStore(
  //   (state) => state.fetchCurrentDocument
  // );
  // fetchCurrentDocument();

  return (
    <MainLayout>
      <div>
        <Status valid={false} siteName="This Page is Invalid" />
        <LanguageSelector />
        <Buttons />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default IndexPopup;

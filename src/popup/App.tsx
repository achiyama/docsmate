import { Buttons } from "@/components/buttons/buttons";
import { Footer } from "@/components/footer";
import { Status } from "@/components/status";
import { MainLayout } from "@/Layout/MainLayout";
import { useBrowsertStore } from "@/stores/browser.store";

export const App = () => {
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

import { Buttons } from "@/components/buttons/buttons";
import { Footer } from "@/components/Footer";
import { Status } from "@/features/status/Status";
import { MainLayout } from "@/Layout/MainLayout";
import { useBrowsertStore } from "@/stores/browser.store";

export const App = () => {
  const fetchCurrentUrl = useBrowsertStore((state) => state.fetchCurrentPage);
  fetchCurrentUrl();

  return (
    <MainLayout>
      <Status />
      <Buttons />
      <Footer />
    </MainLayout>
  );
};

import { Buttons } from "@/components/buttons/buttons";
import { Status } from "@/features/status/components/Status";
import { MainLayout } from "@/Layout/MainLayout";
import { useBrowserStore } from "@/stores/browser.store";

export const App = () => {
  const fetchCurrentUrl = useBrowserStore((state) => state.fetchCurrentPage);
  fetchCurrentUrl();

  return (
    <MainLayout>
      <Status />
      <Buttons />
    </MainLayout>
  );
};

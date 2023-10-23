import { Footer } from "@/components/Footer";
import { Header } from "@/header/header";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="dt-w-[200px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

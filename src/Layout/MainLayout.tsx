import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

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

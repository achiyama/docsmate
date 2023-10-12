type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="dt-w-[200px] dt-border-t-8 dt-border-blue-300">
      {children}
    </div>
  );
};

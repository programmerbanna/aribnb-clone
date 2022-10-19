// internal components
import Header from "@components/Header";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      {/* <LandingPageFooter /> */}
    </div>
  );
};

export default MainLayout;

// internal components
import Header from "@components/Header";

type LandingPageLayoutProps = {
  children?: React.ReactNode;
};

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      {/* <LandingPageFooter /> */}
    </div>
  );
};

export default LandingPageLayout;

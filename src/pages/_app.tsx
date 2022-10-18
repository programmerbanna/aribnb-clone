import { useRouter } from "next/router";
// internal imports
import "@styles/globals.css";
import { AppPropsWithLayout } from "@config/types";
import { landingPageUrls } from "@config/constants";
import LandingPageLayout from "@components/Layout";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const getLayout =
    Component.getLayout ??
    ((page) => {
      if (landingPageUrls.includes(router.pathname)) {
        return <LandingPageLayout>{page}</LandingPageLayout>;
      }
      // return <DashboardLayout>{page}</DashboardLayout>
    });
  return getLayout(<Component {...pageProps} />);
}

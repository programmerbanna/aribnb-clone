import { useRouter } from "next/router";
// internal imports
import "@styles/globals.css";
import { AppPropsWithLayout } from "@config/types";
import { mainPageUrls } from "@config/constants";
import MainLaout from "@components/Layout/MainLayout";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const getLayout =
    Component.getLayout ??
    ((page) => {
      if (mainPageUrls.includes(router.pathname)) {
        return <MainLaout>{page}</MainLaout>;
      }
      // return <DashboardLayout>{page}</DashboardLayout>
    });
  return getLayout(<Component {...pageProps} />);
}

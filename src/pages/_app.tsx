import type { AppProps } from "next/app";
// internal imports
import "@styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

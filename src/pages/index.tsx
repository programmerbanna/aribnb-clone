import Head from "next/head";
// internal imports
import Home from "@views/Home";
import Main from "@components/Main";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone | Hasanul Haque Banna</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <Main>
        <section></section>
      </Main>
    </div>
  );
}

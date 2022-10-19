import Main from "@components/Main";
import Banner from "./components/Banner";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Banner />
      <Main>
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
        </section>
      </Main>
    </>
  );
};
export default Home;

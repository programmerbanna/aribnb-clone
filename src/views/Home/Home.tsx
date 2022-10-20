import Main from "@components/Main";
import { useGlobalContext } from "@context/context";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const { data } = useGlobalContext();
  console.log(data);
  return (
    <>
      <Banner />
      <Main>
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {data?.map((item: any, i: number) => (
            <SmallCard
              key={i}
              thumbnail={item?.thumbnailUrl}
              title={item?.title}
              url={item?.url}
            />
          ))}
        </section>
      </Main>
    </>
  );
};
export default Home;

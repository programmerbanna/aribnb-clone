import Main from "@components/Main";
import { useGlobalContext } from "@context/context";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";

const Home: React.FC = () => {
  const { data } = useGlobalContext();
  const randHighest = Math.floor(Math.random() * data?.length);
  const randLowest = Math.floor(Math.random() * (randHighest - 10));

  console.log(data);

  return (
    <>
      <Banner />
      <Main>
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {data?.slice(randLowest, randHighest).map((item: any, i: number) => (
            <SmallCard
              key={i}
              name={item?.name?.commor}
              flag={item?.flags.png}
              timezone={item?.timezones[0]}
            />
          ))}
        </section>
      </Main>
    </>
  );
};
export default Home;

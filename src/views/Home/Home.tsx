import Main from "@components/Main";
import { useGlobalContext } from "@context/context";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";

const Home: React.FC = () => {
  const { data } = useGlobalContext();
  const randHighest = Math.floor(Math.random() * data?.length);

  console.log(data);

  return (
    <>
      <Banner />
      <Main>
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* small crd */}
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data
              ?.slice(randHighest - 8, randHighest)
              .map((item: any, i: number) => (
                <SmallCard
                  key={i}
                  name={item?.name?.common}
                  flag={item?.flags.png}
                  timezone={item?.timezones[0]}
                />
              ))}
          </div>
        </section>
      </Main>
    </>
  );
};
export default Home;

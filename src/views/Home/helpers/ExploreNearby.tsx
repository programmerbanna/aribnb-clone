import { useGlobalContext } from "@context/context";
import SmallCard from "../components/SmallCard";

const ExploreNearby: React.FC = () => {
  const { exploreBy } = useGlobalContext();

  return (
    <section className="pt-6">
      <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
      {/* small crd */}
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreBy?.map((item: any, i: number) => (
          <SmallCard
            key={i}
            location={item?.location}
            image={item?.img}
            distance={item?.distance}
          />
        ))}
      </div>
    </section>
  );
};
export default ExploreNearby;

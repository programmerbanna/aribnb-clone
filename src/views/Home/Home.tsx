import Main from "@components/Main";
import Banner from "./components/Banner";
import LargeCard from "./components/LargeCard";
import ExploreNearby from "./helpers/ExploreNearby";
import LiveAnyWhere from "./helpers/LiveAnyWhere";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Main>
        {/* explore nearby */}
        <ExploreNearby />
        {/* live any where */}
        <LiveAnyWhere />
        {/* large card */}
        <LargeCard
          image="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist created by Airbnb."
          btnText="Get Inspired"
        />
      </Main>
    </>
  );
};
export default Home;

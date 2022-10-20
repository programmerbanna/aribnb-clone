import Main from "@components/Main";
import Banner from "./components/Banner";
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
      </Main>
    </>
  );
};
export default Home;

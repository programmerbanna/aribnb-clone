import Main from "@components/Main";
import { useGlobalContext } from "@context/context";
import Banner from "./components/Banner";
import ExploreNearby from "./helpers/ExploreNearby";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Main>
        {/* explore nearby */}
        <ExploreNearby />
      </Main>
    </>
  );
};
export default Home;

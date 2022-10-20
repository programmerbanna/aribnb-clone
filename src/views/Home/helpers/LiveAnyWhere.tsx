import { useGlobalContext } from "@context/context";
import MediumCard from "../components/MediumCard";

const LiveAnyWhere: React.FC = () => {
  const { liveAnyWhere } = useGlobalContext();
  return (
    <section>
      <h2 className="py-8 text-4xl font-semibold">Live anywhere</h2>
      <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
        {liveAnyWhere?.map((item: any, i: number) => (
          <MediumCard image={item?.img} key={i} title={item?.title} />
        ))}
      </div>
    </section>
  );
};
export default LiveAnyWhere;

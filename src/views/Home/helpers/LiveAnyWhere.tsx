import { useGlobalContext } from "@context/context";
import MediumCard from "../components/MediumCard";

const LiveAnyWhere: React.FC = () => {
  const { liveAnyWhere } = useGlobalContext();
  console.log(liveAnyWhere);
  return (
    <section>
      <h2 className="py-8 text-4xl font-semibold">Live anywhere</h2>
      <div className="flex space-x-3 overflow-auto">
        {liveAnyWhere?.map((item: any, i: number) => (
          <MediumCard image={item?.img} key={i} title={item?.title} />
        ))}
      </div>
    </section>
  );
};
export default LiveAnyWhere;

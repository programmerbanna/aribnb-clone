import Image from "next/image";
// internal imports
import { SmallCardProps } from "../config/types";

const SmallCard: React.FC<SmallCardProps> = ({ flag, name, timezone }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      {/* left */}
      <div className="relative w-16 h-16">
        <Image src={flag} alt={name} layout="fill" className="rounded-lg" />
      </div>
      {/* right */}
      <div>
        <h2>{name}</h2>
        <h3>{timezone}</h3>
      </div>
    </div>
  );
};
export default SmallCard;

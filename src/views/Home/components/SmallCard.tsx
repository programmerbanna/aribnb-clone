import Image from "next/image";
// internal imports
import { SmallCardProps } from "../config/types";

const SmallCard: React.FC<SmallCardProps> = ({ flag, name, timezone }) => {
  return (
    <div>
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

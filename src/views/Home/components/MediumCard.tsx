import Image from "next/image";
import { MediumCardProps } from "../config/types";

const MediumCard: React.FC<MediumCardProps> = ({ image, title }) => {
  return (
    <div className="transition duration-300 ease-out transform cursor-pointer hover:scale-105">
      <div className="relative h-80 w-80">
        <Image
          src={image}
          alt={title}
          layout="fill"
          loading="lazy"
          className="rounded-xl"
        />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
};
export default MediumCard;

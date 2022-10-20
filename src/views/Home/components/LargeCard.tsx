import Image from "next/image";
import { LargeCardProps } from "../config/types";

const LargeCard: React.FC<LargeCardProps> = ({
  btnText,
  description,
  image,
  title,
}) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={image}
          className="rounded-2xl"
          layout="fill"
          alt={title}
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="w-64 mb-3 text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">
          {btnText}
        </button>
      </div>
    </section>
  );
};
export default LargeCard;

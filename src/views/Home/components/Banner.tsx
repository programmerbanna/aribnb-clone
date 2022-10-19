import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/images/home-banner.jpg"
        layout="fill"
        loading="lazy"
        objectFit="cover"
        alt="airbnb home banner"
        className="opacity-75"
      />
      <div className="absolute w-full text-center top-1/2">
        <p className="text-2xl font-semibold sm:text-4xl sm:font-bold drop-shadow-2xl">
          Fair data use and automated decision making.
        </p>
        <button className="px-10 py-4 my-3 font-bold text-purple-600 transition duration-150 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90">
          Check here...
        </button>
      </div>
    </div>
  );
};

export default Banner;

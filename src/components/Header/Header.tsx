import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 shadow-md md:px-10">
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="/images/airbnb-logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="aribnb"
        />
      </div>
      <div>
        <input type="text" placeholder="Start your search..." />
        <SearchIcon />
      </div>
    </header>
  );
};
export default Header;

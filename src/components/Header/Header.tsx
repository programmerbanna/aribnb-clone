import React from "react";
import Image from "next/image";
import { GrSearch } from "react-icons/gr";
import { RiGlobalLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="/images/airbnb-logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb"
        />
      </div>
      <div className="flex items-center py-2 rounded-full md:border-2">
        <input
          type="text"
          placeholder="Start your search..."
          className="flex-grow pl-5 text-gray-600 placeholder-gray-600 bg-transparent outline-none"
        />
        <GrSearch className="w-8 h-8 p-2 hidden md:inline-flex !text-white bg-red-400 rounded-full cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-600">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <RiGlobalLine className="h-6" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <BiMenuAltRight className="h-6" />
          <FaUserCircle className="h-6" />
        </div>
      </div>
    </header>
  );
};
export default Header;

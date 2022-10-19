import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="px-8 mx-auto max-w-7xl sm:px-16 ">{children}</main>;
};

export default Main;

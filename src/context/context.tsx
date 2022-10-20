import React, { createContext, useState } from "react";
import { useContext } from "react";
import { ContextTypes, DataTypes } from "./types";

export const AppContextProvider = createContext<ContextTypes | null>(null);

// declaring context options

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [exploreBy, setExploreby] = useState<DataTypes | null>();

  const value = { exploreBy, setExploreby };
  return (
    <AppContextProvider.Provider value={value}>
      {children}
    </AppContextProvider.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContextProvider);
};
export { AppContext, useGlobalContext };

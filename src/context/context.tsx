import React, { createContext, useState } from "react";
import { ContextTypes, DataTypes } from "./types";

const AppContextProvider = createContext<ContextTypes | null>(null);

// declaring context options

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataTypes | null>(null);

  const value = { data, setData };
  return (
    <AppContextProvider.Provider value={value}>
      {children}
    </AppContextProvider.Provider>
  );
};
export default AppContext;

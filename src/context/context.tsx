import React, { createContext, useState } from "react";

const AppContextProvider = createContext<any | null>(null);

// declaring context options

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState();

  const value = { data, setData };
  return (
    <AppContextProvider.Provider value={value}>
      {children}
    </AppContextProvider.Provider>
  );
};
export default AppContext;

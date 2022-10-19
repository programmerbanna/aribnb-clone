import React from "react";

export type DataTypes = {
  data?: string[];
};
export type ContextTypes = {
  data?: DataTypes | null;
  setData?: React.Dispatch<React.SetStateAction<DataTypes | null>>;
};

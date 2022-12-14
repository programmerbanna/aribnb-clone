import React from "react";

export type DataTypes = {
  data?: string[];
}[];
export type ContextTypes = {
  exploreBy?: DataTypes | null;
  setExploreby?: React.Dispatch<React.SetStateAction<DataTypes | null>>;
  liveAnyWhere?: DataTypes | null;
  setLiveAnyWhere?: React.Dispatch<React.SetStateAction<DataTypes | null>>;
};

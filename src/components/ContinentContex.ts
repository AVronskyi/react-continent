import React from "react";
import { Context } from "vm";

export const ContinentContex = React.createContext<Context>({
  isSelectedContinent: false,
  setIsSelectedContinent: () => false,
});

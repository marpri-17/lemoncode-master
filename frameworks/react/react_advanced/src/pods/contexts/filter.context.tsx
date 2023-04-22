import React from "react";

interface IFilterContex {
  filterValue: string;
  setFilterValue: (name: string) => void;
}

export const FilterContext = React.createContext<IFilterContex>(null);

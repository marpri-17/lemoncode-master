import React from "react";
import { FilterContext } from "@pods/contexts/filter.context";
import { MemberListComponent } from "./members-list.component";

export const MemberListContainer: React.FC = () => {
  const initializeOganizationName = (defaultValue: string): string => {
    const savedValue: string = localStorage.getItem("organizationName");
    return savedValue || defaultValue;
  };

  const [filter, setFilter] = React.useState(
    initializeOganizationName("lemoncode")
  );

  const onChangeOrganizationFilter = (oganizationName: string) => {
    if (oganizationName.length) {
      localStorage.setItem("organizationName", oganizationName);
    }
    setFilter(oganizationName);
  };

  return (
    <FilterContext.Provider
      value={{
        filterValue: filter,
        setFilterValue: onChangeOrganizationFilter,
      }}
    >
      <MemberListComponent />
    </FilterContext.Provider>
  );
};

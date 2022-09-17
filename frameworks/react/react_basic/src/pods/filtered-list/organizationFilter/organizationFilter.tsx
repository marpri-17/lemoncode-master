import React from "react";
import { useFilteredList } from "@pods/filtered-list/useFilteredList.hooks";
import { useDebounce } from "use-debounce";

export const OrganizationFilter: React.FC = () => {
  const { organizationName, setOrganizationName } = useFilteredList();
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 1000);

  React.useEffect(() => {
    setFilter(organizationName);
  }, [organizationName]);

  // Use debounce here. State and useEffect to fetch
  React.useEffect(() => {
    setOrganizationName(debouncedFilter);
  }, [organizationName, debouncedFilter]);

  return (
    <form className="list-header-container">
      <input
        type="text"
        className="list-header-input"
        placeholder="Search organization"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onSubmit={(e) => e.preventDefault()}
      ></input>
      <span>{filter}</span>
      <span>{debouncedFilter}</span>
    </form>
  );
};

import React from "react";
import { useDebounce } from "use-debounce";

interface Props {
  organizationName: string;
  setOrganizationName: (filter: string) => void;
}

export const OrganizationFilter: React.FC<Props> = ({
  organizationName,
  setOrganizationName,
}) => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 1000);

  React.useEffect(() => {
    if (organizationName && organizationName.length) {
      setFilter(organizationName);
    }
  }, [organizationName]);

  // Use debounce here. State and useEffect to fetch
  React.useEffect(() => {
    localStorage.setItem("filter", debouncedFilter);
    setOrganizationName(debouncedFilter);
  }, [debouncedFilter]);

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

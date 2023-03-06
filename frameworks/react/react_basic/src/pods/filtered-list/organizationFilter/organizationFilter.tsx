import React from "react";

interface Props {
  organizationName: string;
  setOrganizationName: (filter: string) => void;
}

export const OrganizationFilter: React.FC<Props> = ({
  organizationName,
  setOrganizationName,
}) => {
  const handleFormSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    const organizationName: HTMLInputElement = (
      event.target as HTMLFormElement
    ).querySelector("input#organizationName");
    setOrganizationName(organizationName.value);
  };

  return (
    <form
      className="list-header-container"
      style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
      onSubmit={handleFormSubmit}
    >
      <input
        id="organizationName"
        type="text"
        className="list-header-input"
        placeholder="Search organization"
        defaultValue={organizationName}
      ></input>
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
};

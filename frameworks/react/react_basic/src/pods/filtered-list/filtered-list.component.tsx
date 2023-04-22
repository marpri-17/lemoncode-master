import React from "react";
import { ListComponent } from "./list/list.component";
import { mapMembersApimodelToMembersViewModel } from "./list/list.mapper";
import { MemberViewModel } from "./list/list.viewmodel";
import { OrganizationFilter } from "./organizationFilter/organizationFilter";
import { useFilteredList } from "./useFilteredList.hooks";

export const FilteredListMembers: React.FunctionComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [memberList, setMemberList] = React.useState<MemberViewModel[]>([]);
  const { setOrganizationName, members } = useFilteredList();

  React.useEffect(() => {
    localStorage.getItem("filter")
      ? setFilter(localStorage.getItem("filter"))
      : setFilter("lemoncode");
  }, []);

  React.useEffect(() => {
    if (filter && filter.length) {
      setOrganizationName(filter);
    }
  }, [filter]);

  React.useEffect(() => {
    setMemberList(mapMembersApimodelToMembersViewModel(members));
  }, [members]);

  const setFilterOnChange = (organizationName: string) =>
    setFilter(organizationName);

  return (
    <>
      <OrganizationFilter
        organizationName={filter}
        setOrganizationName={setFilterOnChange}
      />
      <ListComponent listItems={memberList} />
    </>
  );
};

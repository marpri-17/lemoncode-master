import React from "react";
import { Search } from "./search/search.component";
import { ListComponent } from "./list/list.component";
import { mapMembersApimodelToMembersViewModel } from "./list/list.mapper";
import { MemberViewModel } from "./list/list.viewmodel";
import { useFilteredList } from "./useFilteredList.hooks";

export const MemberListComponent: React.FunctionComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [memberList, setMemberList] = React.useState<MemberViewModel[]>([]);
  const { setOrganizationName, members } = useFilteredList();

  React.useEffect(() => {
    localStorage.getItem("filter")
      ? setFilter(localStorage.getItem("filter"))
      : setFilter("lemoncode"); // FIXME
  }, []);

  React.useEffect(() => {
    if (filter && filter.length) {
      setOrganizationName(filter);
    }
  }, [filter]);

  React.useEffect(() => {
    setMemberList(mapMembersApimodelToMembersViewModel(members));
  }, [members]);

  const onChangeOrganizationFilter = (oganizationName: string) => {
    console.log(oganizationName);
    setFilter(oganizationName);
  };

  return (
    <>
      <Search
        onChangeFilterValue={onChangeOrganizationFilter}
        wrapperSx={{ justifyContent: "flex-start" }}
      />
      <ListComponent listItems={memberList} />
    </>
  );
};

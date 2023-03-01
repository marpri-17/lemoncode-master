import React from "react";
import { Search } from "./search/search.component";
import { ListComponent } from "./list/list.component";
import { mapMembersApimodelToMembersViewModel } from "./list/list.mapper";
import { MemberViewModel } from "./list/list.viewmodel";
import { useFilteredList } from "./useFilteredList.hooks";
import { FilterContext } from "@pods/contexts/filter.context";

export const MemberListComponent: React.FunctionComponent = () => {
  const { filterValue: organizationName } = React.useContext(FilterContext);

  const [memberList, setMemberList] = React.useState<MemberViewModel[]>([]);
  const { members } = useFilteredList(organizationName);

  React.useEffect(() => {
    setMemberList(mapMembersApimodelToMembersViewModel(members));
  }, [members]);

  return (
    <>
      <Search wrapperSx={{ justifyContent: "flex-start" }} />
      <ListComponent listItems={memberList} />
    </>
  );
};

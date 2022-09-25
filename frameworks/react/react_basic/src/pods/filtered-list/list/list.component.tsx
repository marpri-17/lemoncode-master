import React from "react";
import { routes } from "@core/router/routes";
import { Link } from "react-router-dom";
import { mapMembersApimodelToMembersViewModel } from "./list.mapper";
import { MemberViewModel } from "./list.viewmodel";
import { useFilteredList } from "../useFilteredList.hooks";

interface Props {
  listItems: MemberViewModel[];
}

export const ListComponent: React.FC<Props> = ({ listItems }) => {
  React.useEffect(() => {
    console.log("LIST COMPONENT ", listItems);
  }, [listItems]);

  return (
    <>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {listItems.map((item) => (
          <>
            <img src={item.avatarUrl} />
            <span>{item.id}</span>
            <Link to={routes.detail(item.login)}>{item.login}</Link>
          </>
        ))}
      </div>
      <Link to={routes.list}>Navigate to detail page</Link>
    </>
  );
};

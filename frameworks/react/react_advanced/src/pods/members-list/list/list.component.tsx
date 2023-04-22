import React from "react";
import { routes } from "@core/router/routes";
import { Link } from "react-router-dom";
import { MemberViewModel } from "./list.viewmodel";

interface Props {
  listItems: MemberViewModel[];
}

export const ListComponent: React.FC<Props> = ({ listItems }) =>
  listItems.length ? (
    <>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {listItems.map((item) => (
          <React.Fragment key={item.id}>
            <img src={item.avatarUrl} />
            <span>{item.id}</span>
            <Link to={routes.github.detail(item.login)}>{item.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  ) : (
    <> No results found </>
  );

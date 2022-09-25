import React from "react";
import { MemberViewModel } from "@pods/filtered-list";
import { Link } from "react-router-dom";
import { routes } from "@core/router/routes";

interface Props {
  member: MemberViewModel;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { id, login, avatarUrl } = props.member;

  return (
    <div className="detail-container">
      <h3>User Id: {login}</h3>
      <img src={`${avatarUrl}`} />
      <span>{id}</span>
      <div>
        <Link to={routes.list}>Back to list page</Link>
      </div>
    </div>
  );
};

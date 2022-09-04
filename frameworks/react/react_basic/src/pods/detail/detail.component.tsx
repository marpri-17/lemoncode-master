import React from "react";
import { MemberViewModel } from "@pods/list/list.viewmodel";
import { Link } from "react-router-dom";

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
        <Link to="/list">Back to list page</Link>
      </div>
    </div>
  );
};

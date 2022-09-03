import React from "react";
import { getOrganizationMembersList } from "@core/apis/github.service";
import { routes } from "@core/router/routes";
import { Link } from "react-router-dom";
import { mapMembersApimodelToMembersViewModel } from "./list.mapper";
import { MemberViewModel } from "./list.viewmodel";

interface ListScene {
  members: MemberViewModel[];
  organization: string;
}

export const ListComponent: React.FC = () => {
  const [listScene, setListScene] = React.useState<ListScene>({
    members: [],
    organization: "lemoncode",
  });

  const { members, organization: org } = listScene;

  React.useEffect(() => {
    getOrganizationMembersList(org)
      .then((membersList) => mapMembersApimodelToMembersViewModel(membersList))
      .then((json) => setListScene({ ...listScene, members: json }));
  }, []);

  return (
    <>
      <div className="list-header-container">
        <form>
          <input
            type="text"
            className="list-header-input"
            placeholder="Search organization"
            value={org}
            onChange={(e) =>
              setListScene({ ...listScene, organization: e.target.value })
            }
            onSubmit={(e) => e.preventDefault()}
          ></input>
        </form>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatarUrl} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to={routes.list}>Navigate to detail page</Link>
    </>
  );
};

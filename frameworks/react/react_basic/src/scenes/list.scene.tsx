import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@core/router/routes";
import { AppLayout } from "@layouts/app.kayout";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface ListScene {
  members: MemberEntity[];
  organization: string;
}

export const ListScene: React.FC = () => {
  const [listScene, setListScene] = React.useState<ListScene>({
    members: [],
    organization: "lemoncode",
  });

  const { members, organization: org } = listScene;

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      .then((json) => setListScene({ ...listScene, members: json }));
  }, []);

  return (
    <AppLayout>
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
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to={routes.list}>Navigate to detail page</Link>
    </AppLayout>
  );
};

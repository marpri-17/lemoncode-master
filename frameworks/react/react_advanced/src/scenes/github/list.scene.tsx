import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { MemberListContainer } from "@pods/members-list";

export const GithubListScene: React.FC = () => {
  return (
    <AppLayout>
      <MemberListContainer />
    </AppLayout>
  );
};

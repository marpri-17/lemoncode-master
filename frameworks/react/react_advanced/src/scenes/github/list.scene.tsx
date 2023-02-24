import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { MemberListComponent } from "@pods/members-list";

export const GithubListScene: React.FC = () => {
  return (
    <AppLayout>
      <MemberListComponent />
    </AppLayout>
  );
};

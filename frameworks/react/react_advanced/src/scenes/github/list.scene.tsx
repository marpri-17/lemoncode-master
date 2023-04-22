import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { MemberListContainer } from "@pods/members-list";
import { Typography } from "@mui/material";

export const GithubListScene: React.FC = () => {
  return (
    <AppLayout>
      <Typography variant="h2" textAlign="center">
        Github repo members
      </Typography>
      <MemberListContainer />
    </AppLayout>
  );
};

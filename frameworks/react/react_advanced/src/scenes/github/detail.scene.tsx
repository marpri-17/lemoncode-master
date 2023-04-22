import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { DetailContainer } from "@pods/detail";

export const GithubDetailScene: React.FC = () => {
  return (
    <AppLayout>
      <DetailContainer />
    </AppLayout>
  );
};

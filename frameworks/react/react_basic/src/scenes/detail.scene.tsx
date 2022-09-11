import { AppLayout } from "@layouts/app.layout";
import { DetailContainer } from "@pods/detail";
import React from "react";

export const DetailScene: React.FC = () => {
  return (
    <AppLayout>
      <DetailContainer />
    </AppLayout>
  );
};

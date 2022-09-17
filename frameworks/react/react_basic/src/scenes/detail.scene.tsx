import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { DetailContainer } from "@pods/detail";

export const DetailScene: React.FC = () => {
  return (
    <AppLayout>
      <DetailContainer />
    </AppLayout>
  );
};

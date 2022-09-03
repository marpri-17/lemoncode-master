import React from "react";
import { AppLayout } from "@layouts/app.kayout";
import { LoginContainer } from "@pods/list";

export const ListScene: React.FC = () => {
  return (
    <AppLayout>
      <LoginContainer />
    </AppLayout>
  );
};

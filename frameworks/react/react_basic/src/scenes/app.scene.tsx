import { AppLayout } from "@layouts/app.layout";
import React from "react";
import { Outlet } from "react-router-dom";

export const AppScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  );
};

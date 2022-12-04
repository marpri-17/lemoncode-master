import React from "react";
import { AppNavBar } from "pods/nav-bar/nav-bar.component";
import RouterError from "pods/router-error/router-error.component";

export const RouterErrorLayout: React.FC = () => {
  return (
    <>
      <AppNavBar />
      <RouterError />
    </>
  );
};

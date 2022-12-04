import React from "react";
import { AppNavBar } from "pods/nav-bar/nav-bar.component";
import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
  return (
    <>
      <AppNavBar />
      <Outlet />
    </>
  );
};

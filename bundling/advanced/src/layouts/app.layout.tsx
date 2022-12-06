import React from "react";
import { AppNavBar } from "pods/nav-bar/nav-bar.component";
import { Outlet, useNavigate } from "react-router-dom";

export const AppLayout: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("welcome");
  }, []);

  return (
    <>
      <AppNavBar />
      <Outlet />
    </>
  );
};

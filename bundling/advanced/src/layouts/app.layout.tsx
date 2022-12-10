import React from "react";
import { AppNavBar } from "pods/nav-bar/nav-bar.component";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const AppLayout: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <AppNavBar />
      <Outlet />
    </Box>
  );
};

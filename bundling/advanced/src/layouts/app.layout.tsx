import React from "react";
import { AppNavBar } from "pods/nav-bar/nav-bar.component";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { CenterColumnLayout } from "./centered-layout";

export const AppLayout: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <AppNavBar />
      <CenterColumnLayout sectionId="main">
        <Outlet />
      </CenterColumnLayout>
    </Box>
  );
};

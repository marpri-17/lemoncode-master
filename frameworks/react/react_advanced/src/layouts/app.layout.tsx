import React from "react";
import Paper from "@mui/material/Paper/Paper";
import { HeaderComponent } from "@components/header.component";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <Paper>{children}</Paper>
    </>
  );
};

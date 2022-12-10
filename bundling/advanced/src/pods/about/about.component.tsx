import React from "react";
import { Box } from "@mui/material";
import logoImage from "assets/logo_2.png";
import { CenterColumnLayout } from "layouts/centered-layout";
import { HowToComponent } from "./how-to/how-to.component";
import "./about.styles.scss";

export const AboutComponent: React.FC = () => {
  return (
    <CenterColumnLayout sectionId="about">
      <HowToComponent />
      <Box component="img" src={logoImage} alt="Logo Lemoncode"></Box>
    </CenterColumnLayout>
  );
};

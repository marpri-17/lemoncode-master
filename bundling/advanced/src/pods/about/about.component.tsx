import React from "react";
import { Box } from "@mui/material";
import { HowToComponent } from "./how-to/how-to.component";
import logoImage from "assets/logo_2.png";
import "./about.styles.scss";

export const AboutComponent: React.FC = () => {
  return (
    <Box id="about">
      <HowToComponent />
      <Box component="img" src={logoImage} alt="Logo Lemoncode"></Box>
    </Box>
  );
};

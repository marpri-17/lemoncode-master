import React from "react";
import { Box, Typography } from "@mui/material";
import { HowToComponent } from "./how-to/how-to.component";
import logoImage from "assets/logo_2.png";
import "./about.styles.scss";

export const AboutComponent: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <HowToComponent />
      <Box
        id="about-bar"
        sx={{
          maxHeight: "15%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={logoImage}
          alt="Logo Lemoncode"
          sx={{ flexShrink: 1 }}
        />
        <Typography variant="h6" className="about-end" align="right">
          Master Front End - Bundling
        </Typography>
      </Box>
    </Box>
  );
};

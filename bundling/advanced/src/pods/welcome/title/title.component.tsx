import React from "react";
import logoImage from "assets/logo_2.png";
import { Box, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { CustomButton } from "components/button/button.component";

export function TitleComponent() {
  return (
    <Box id="title">
      <Box component="img" src={logoImage} alt="Logo Lemoncode"></Box>
      <Typography variant="h3" align="center">
        Webpack & React Material UI base project
      </Typography>
      <Typography className="my-title" align="center">
        {process.env.GREETING}
      </Typography>
      <CustomButton
        label="Saber más"
        variant="outlined"
        size="large"
        startIcon={<AddIcon />}
      ></CustomButton>
    </Box>
  );
}

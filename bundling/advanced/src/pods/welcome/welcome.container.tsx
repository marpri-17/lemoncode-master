import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { CenterColumnLayout } from "layouts/centered-layout";
import { CustomButton } from "components/button/button.component";
import { TitleComponent } from "./title/title.component";
import { Typography } from "@mui/material";

export const Welcome: React.FC = () => {
  return (
    <CenterColumnLayout sectionId="welcome">
      <TitleComponent />

      <CustomButton
        sx={{ justifySelf: "end" }}
        label="Saber más"
        variant="outlined"
        size="large"
        startIcon={<AddIcon />}
      ></CustomButton>
    </CenterColumnLayout>
  );
};

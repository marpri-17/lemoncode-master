import React, { BaseSyntheticEvent } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { CustomButton } from "components/button/button.component";
import { TitleComponent } from "./title/title.component";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    navigate("about");
  };

  return (
    <Box
      id="welcome"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TitleComponent />

      <Box sx={{ flexShrink: 1 }}>
        <CustomButton
          label="Saber más"
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          propHandler={handler}
        ></CustomButton>
      </Box>
    </Box>
  );
};

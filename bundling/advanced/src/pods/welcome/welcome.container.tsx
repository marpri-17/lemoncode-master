import React, { BaseSyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { CustomButton } from "components/button/button.component";
import { TitleComponent } from "./title/title.component";
import { QuoteContainer } from "./quote";

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
      <QuoteContainer />
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

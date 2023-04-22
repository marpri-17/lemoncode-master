import React from "react";
import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const ComponentError: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          align="center"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ErrorOutlineIcon sx={{ marginRight: "10px" }} />
          Oops!
        </Typography>
        <Typography align="center">
          Sorry, an unexpected error has occurred.
        </Typography>
      </Box>
    </Box>
  );
};

import React from "react";
import { Typography, Link as MaterialLink, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function RouterError() {
  return (
    <Box id="error-page">
      <Typography variant="h1" align="center">
        Oops!
      </Typography>
      <Typography align="center">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <MaterialLink
          component={RouterLink}
          to="/"
          underline="hover"
          align="center"
        >
          Go to the home page
        </MaterialLink>
        <Typography variant="caption" align="center">
          This is a demo page for display error view
        </Typography>
      </Box>
    </Box>
  );
}

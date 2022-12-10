import React from "react";
import { Typography, Link as MaterialLink, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function RouterError() {
  return (
    <Box id="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <MaterialLink component={RouterLink} to="/" underline="hover">
        Go to the home page
      </MaterialLink>
      <Typography variant="caption">
        This is a demo page for display error view
      </Typography>
    </Box>
  );
}

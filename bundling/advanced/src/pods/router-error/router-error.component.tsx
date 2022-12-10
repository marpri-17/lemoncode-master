import React from "react";
import { Typography, Link as MaterialLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CenterColumnLayout } from "layouts/centered-layout";

export default function RouterError() {
  return (
    <CenterColumnLayout sectionId="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <MaterialLink component={RouterLink} to="/" underline="hover">
        Go to the home page
      </MaterialLink>
      <Typography variant="caption">
        This is a demo page for display error view
      </Typography>
    </CenterColumnLayout>
  );
}

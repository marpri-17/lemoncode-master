import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function RouterError() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box id="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <i>{error["statusText"] || error["message"]}</i>
      </Typography>
    </Box>
  );
}

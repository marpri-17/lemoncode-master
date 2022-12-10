import "./styles.scss";
import "core/scss/variables.scss";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterRoot } from "core/router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <StrictMode>
      <CssBaseline />
      <RouterRoot />
      {/*  <RouterProvider router={router} /> */}
    </StrictMode>
  </>
);

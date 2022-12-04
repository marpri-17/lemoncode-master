import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "layouts/app.layout";
import { AppScene } from "scenes/app.scene";
import { AboutScene } from "scenes/about.scene";
import { RouterErrorLayout as RouterError } from "layouts/error.layout";
import { redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouterError />,
    // loader: rootLoader,
    children: [
      {
        path: "welcome",
        element: <AppScene />,
        errorElement: <RouterError />,
      },
      {
        path: "about",
        element: <AboutScene />,
        errorElement: <RouterError />,
      },
    ],
  },
]);

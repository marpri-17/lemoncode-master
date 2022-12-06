import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "layouts/app.layout";
import { AppScene } from "scenes/app.scene";
import { AboutScene } from "scenes/about.scene";
import { RouterErrorLayout } from "layouts/error.layout";

// Last version for react router dom (6.4.4)
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouterErrorLayout />,
    children: [
      {
        path: "welcome",
        element: <AppScene />,
      },
      {
        path: "about",
        element: <AboutScene />,
      },
    ],
  },
]);

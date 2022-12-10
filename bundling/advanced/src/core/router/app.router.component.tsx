import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { AppLayout } from "layouts/app.layout";
import { AppScene } from "scenes/app.scene";
import { AboutScene } from "scenes/about.scene";
import { ErrorScene } from "scenes/error.scene";

export const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<AppLayout />}>
          <Route index element={<AppScene />} />
          <Route path={routes.about} element={<AboutScene />} />
          <Route path="*" element={<ErrorScene />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

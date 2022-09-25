import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScene, ListScene, DetailScene } from "@scenes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScene />} />
        <Route path="/list" element={<ListScene />} />
        <Route path="/detail/:login" element={<DetailScene />} />
      </Routes>
    </Router>
  );
};

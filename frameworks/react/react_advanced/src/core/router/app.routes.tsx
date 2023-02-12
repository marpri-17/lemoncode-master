import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import {
  LoginScene,
  GithubListScene,
  GithubDetailScene,
  RickAndMortyDetailScene,
  RickAndMortyListScene,
} from "@scenes";

export const AppRouter = () => {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginScene />} />
        <Route path="/github" element={<GithubListScene />} />
        <Route path="/github/:id" element={<GithubDetailScene />} />
        <Route path="/rickandmorty" element={<RickAndMortyListScene />} />
        <Route path="/rickandmorty/:id" element={<RickAndMortyDetailScene />} />
      </Routes>
    </Router>
  );
};

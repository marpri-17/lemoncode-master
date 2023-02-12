import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@core/router/routes";
import { Login } from "./login.component";
import { LoginFormModel } from "./login.model";

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (login: LoginFormModel): void => {
    const { username, password } = login;
    if (username === "admin" && password === "test") {
      navigate("/github");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return <Login onLogin={handleNavigation} />;
};

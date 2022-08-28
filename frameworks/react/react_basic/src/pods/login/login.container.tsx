import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@core/router/routes";
import { Login } from "./login.component";

export interface LoginForm {
  username: string;
  password: string;
}

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (login: LoginForm): void => {
    const { username, password } = login;
    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return <Login onLogin={handleNavigation} />;
};

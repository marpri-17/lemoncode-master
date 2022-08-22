import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@core/router/routes";

interface LoginForm {
  username: string;
  password: string;
}

export const LoginScene: React.FC = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = React.useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = loginForm;
    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <form onSubmit={handleNavigation}>
        <div>
          <div>
            <label>Username: </label>
            <input
              value={loginForm.username}
              onChange={(e) =>
                setLoginForm({ ...loginForm, username: e.target.value })
              }
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

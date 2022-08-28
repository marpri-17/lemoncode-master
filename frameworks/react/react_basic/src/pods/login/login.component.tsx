import React from "react";
import { LoginForm } from "./login.container";

interface Props {
  onLogin: (info: LoginForm) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [loginForm, setLoginForm] = React.useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(loginForm);
  };

  return (
    <form className="login-form-container" onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Username: </label>
          <input
            className="login-input"
            value={loginForm.username}
            onChange={(e) =>
              setLoginForm({ ...loginForm, username: e.target.value })
            }
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            className="login-input"
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
  );
};

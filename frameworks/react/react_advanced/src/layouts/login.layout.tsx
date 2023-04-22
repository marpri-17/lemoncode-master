import React from "react";

interface LoginProps {
  children: React.ReactNode;
}
export const LoginLayout: React.FC<LoginProps> = ({ children }) => {
  return (
    <div className="login-container">
      <h3>Log in</h3>
      <div className="login-tip">
        <span>username: admin</span>
        <span>password: test</span>
      </div>
      {children}
    </div>
  );
};

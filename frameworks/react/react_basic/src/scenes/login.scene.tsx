import React from "react";
import { LoginLayout } from "@layouts/login.layout";
import { LoginContainer } from "@pods/login";

export const LoginScene: React.FC = () => {
  return (
    <LoginLayout>
      <LoginContainer />
    </LoginLayout>
  );
};

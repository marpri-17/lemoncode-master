import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="app-header">User logged in!</header>
      {children}
    </>
  );
};

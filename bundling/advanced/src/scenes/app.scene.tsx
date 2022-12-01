import React from "react";
import { CustomButton } from "../components/button/button.component";

export const AppScene: React.FC = () => {
  return (
    <>
      <div>App scene</div>
      <CustomButton textColor="red" label="Prueba custom button"></CustomButton>
      <CustomButton label="Prueba custom button 2"></CustomButton>
    </>
  );
};

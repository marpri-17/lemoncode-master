import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  textColor?: string;
}

export const CustomButton: React.FC<ButtonProps> = ({ label, textColor }) => {
  return <Button sx={{ color: textColor ?? "inherit" }}>{label}</Button>;
};

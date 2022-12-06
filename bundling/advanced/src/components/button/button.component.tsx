import React, { BaseSyntheticEvent } from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  size?:
    | "small"
    | "medium" // default
    | "large";
  variant?: "contained" | "outlined" | "text"; // default
  textColor?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  handler?: () => {};
}

export const CustomButton: React.FC<ButtonProps> = ({
  label,
  textColor,
  startIcon,
  endIcon,
  size,
  variant,
}) => {
  const handler = (event: BaseSyntheticEvent) => {
    console.log(event);
  };

  return (
    <Button
      variant={variant ? variant : "text"}
      size={size ? size : "medium"}
      startIcon={startIcon ? startIcon : ""}
      sx={{ color: textColor ?? "inherit" }}
      endIcon={endIcon ? endIcon : ""}
      onClick={handler}
    >
      {label}
    </Button>
  );
};

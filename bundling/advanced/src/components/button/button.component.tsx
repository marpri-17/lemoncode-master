import React, { BaseSyntheticEvent } from "react";
import { Button, SxProps } from "@mui/material";

interface ButtonProps {
  id?: string;
  label: string;
  size?:
    | "small"
    | "medium" // default
    | "large";
  variant?: "contained" | "outlined" | "text"; // default
  textColor?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: SxProps;
  propHandler?: (event: BaseSyntheticEvent) => void;
}

export const CustomButton: React.FC<ButtonProps> = ({
  id,
  label,
  textColor,
  startIcon,
  endIcon,
  size,
  variant,
  sx,
  propHandler,
}) => {
  const handler = (event: BaseSyntheticEvent) => {
    console.log(
      id
        ? `On click button id: ${id}. Pass propHandler to emit`
        : `Custom event for button component. Pass propHandler to emit`
    );
    event.preventDefault();
  };

  return (
    <Button
      id={id ?? ""}
      variant={variant ?? "text"}
      size={size ?? "medium"}
      startIcon={startIcon ?? ""}
      sx={
        sx
          ? { ...sx, ...{ color: textColor ?? "inherit" } }
          : { color: textColor ?? "inherit" }
      }
      endIcon={endIcon ? endIcon : ""}
      onClick={propHandler ?? handler}
    >
      {label}
    </Button>
  );
};

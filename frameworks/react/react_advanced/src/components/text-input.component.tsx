import React from "react";
import { TextField } from "@mui/material";

interface Props {
  initialValue: string;
  label: string;
  onChange?: (event: React.BaseSyntheticEvent) => void;
  id?: string;
}

export const AppGenericInput: React.FC<Props> = (props) => {
  const { initialValue, label, onChange, id } = props;

  return (
    <TextField
      id={id || "filled-search"}
      label={label}
      type="search"
      variant="filled"
      defaultValue={initialValue}
      onChange={onChange || null}
    />
  );
};

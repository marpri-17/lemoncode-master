import React from "react";
import { Box } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { AppGenericInputDebounced } from "@components";

interface Props {
  wrapperSx?: SxProps;
  defaultValue?: string;
  id?: string;
  onChangeFilterValue: (filterValue: string) => void;
}

export const SearchDebounced: React.FC<Props> = (props) => {
  const handleOnChange = (value: string) => {
    console.log(value);
  };

  const mergeContainerStyles = (): SxProps => {
    const privateStyles: SxProps = {
      padding: "1rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",
    };
    return props.wrapperSx
      ? { ...privateStyles, ...props.wrapperSx }
      : privateStyles;
  };

  return (
    <Box component="form" maxWidth="sm" sx={mergeContainerStyles()}>
      <AppGenericInputDebounced
        id="characterName"
        initialValue={props.defaultValue || ""}
        label="Search by character name"
        onChange={handleOnChange}
      />
    </Box>
  );
};

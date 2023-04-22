import React, { useContext } from "react";
import { AppGenericInput } from "@components/text-input.component";
import { Search as SearchMatIcon } from "@mui/icons-material";
import { Button, Container, Box } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { FilterContext } from "@pods/contexts/filter.context";

interface Props {
  wrapperSx?: SxProps;
  defaultValue?: string;
  id?: string;
}

export const Search: React.FC<Props> = (props) => {
  const { filterValue: organizationName, setFilterValue: setOrganizationName } =
    useContext(FilterContext);

  const handleOnFormSubmit = (ev: React.BaseSyntheticEvent) => {
    ev.preventDefault();
    const organizationInput = (ev.target as HTMLFormElement).querySelector(
      "#organization"
    ) as HTMLInputElement;
    if (organizationInput) {
      setOrganizationName(organizationInput.value);
    }
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
    <Box
      component="form"
      maxWidth="sm"
      sx={mergeContainerStyles()}
      onSubmit={handleOnFormSubmit}
    >
      <AppGenericInput
        id="organization"
        initialValue={props.defaultValue || organizationName}
        label="Search organization"
      />
      <Button
        variant="outlined"
        startIcon={<SearchMatIcon />}
        type="submit"
        sx={{ marginLeft: "0.5rem" }}
      >
        Search
      </Button>
    </Box>
  );
};

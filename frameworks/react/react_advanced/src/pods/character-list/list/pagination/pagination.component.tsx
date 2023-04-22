import React from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useCharacterList } from "../useCharacterList.hook";

interface Props {
  onChange: (event: React.ChangeEvent, page: number) => void;
}

export const CharacterPagination: React.FC<Props> = (props) => {
  const { pagination } = useCharacterList();

  return (
    pagination && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Pagination
          count={pagination.pages}
          color="primary"
          size="small"
          onChange={props.onChange}
        />
        <Typography variant="subtitle1">Total: {pagination.count}</Typography>
      </Box>
    )
  );
};

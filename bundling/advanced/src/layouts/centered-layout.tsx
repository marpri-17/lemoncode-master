import React from "react";
import { Box } from "@mui/material";

interface Props {
  sectionId: string;
  children: React.ReactNode;
}

export const CenterColumnLayout: React.FC<Props> = ({
  children,
  sectionId,
}) => {
  return (
    <Box
      id={sectionId}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        minHeight: "100%",
      }}
    >
      {children}
    </Box>
  );
};

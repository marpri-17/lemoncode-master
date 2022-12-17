import React from "react";
import { QuoteViewModel } from "./quotes.model";
import { Box, Typography } from "@mui/material";

interface Props {
  quote: QuoteViewModel;
}

export const QuoteComponent: React.FC<Props> = (props) => {
  const { quote: phrase, author } = props.quote;

  return (
    <Box>
      <Typography variant="h5">{phrase}</Typography>
      <Typography variant="caption">{author}</Typography>
    </Box>
  );
};

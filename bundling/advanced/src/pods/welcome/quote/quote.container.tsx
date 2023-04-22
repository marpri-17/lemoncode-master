import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useQuote } from "./quotes.hook";
import { QuoteComponent } from "./quote.component";
import { ComponentError } from "pods/component-error/component-error.component";

export const QuoteContainer: React.FC = () => {
  const [category, setCategory] = React.useState<string>("success");

  const { data, error, loading } = useQuote(category);

  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : error ? (
    <ComponentError></ComponentError>
  ) : (
    <QuoteComponent quote={data[0]}></QuoteComponent>
  );
};

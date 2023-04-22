import React from "react";
import axios from "axios";
import { QuoteApiModel, QuoteViewModel } from "./quotes.model";

export function useQuote(category: string) {
  const baseUrl = process.env.QUOTES_URL;
  const apiKey = process.env.API_KEY;

  const [data, setData] = React.useState<QuoteViewModel[]>(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const quotesUrl = baseUrl.startsWith("mocks")
    ? baseUrl
    : `${baseUrl}?category=${category}`;

  const mapQuoteApiModelToQuoteViewModel = (
    quotes: QuoteApiModel[]
  ): QuoteViewModel[] => {
    return quotes.map(({ author, quote }) => ({
      author,
      quote,
    }));
  };

  React.useEffect(() => {
    if (category) {
      (async function () {
        try {
          setLoading(true);
          const response = await axios.get<QuoteApiModel[]>(quotesUrl, {
            headers: {
              "X-Api-Key": apiKey,
              "Content-Type": "application/json",
            },
          });
          setData(mapQuoteApiModelToQuoteViewModel(response.data));
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [category]);

  return { data, error, loading };
}

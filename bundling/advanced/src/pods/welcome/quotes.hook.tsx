import { ServerQuote } from "models/quote.models";
// import quotesMock from "./mocks/quotes.json";

export function getQuote(): Promise<ServerQuote> {
  const quotesUrl = process.env.QUOTES_URL;
  const apiKey = process.env.API_KEY;
  console.log(quotesUrl, apiKey);

  return fetch(quotesUrl, {
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Error fetching data");
    });
}

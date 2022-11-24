import { ServerQuote } from "../models/quote.models";
import quotesMock from "./mocks/quotes.json";

export function getQuote(): Promise<ServerQuote> {
  /*   return fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then(
    (resp) => resp.json()
  ); */

  return fetch(quotesMock)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Error fetching data");
    });
}

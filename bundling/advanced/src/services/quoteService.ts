import { ServerQuote } from "../models/quote.models";

export function getQuote(): Promise<ServerQuote> {
  /*   return fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then(
    (resp) => resp.json()
  ); */

  return fetch("./mocks/quotesMock.json").then((resp) => resp.json());
}

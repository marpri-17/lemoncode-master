import { ServerQuote } from "../models/quote.models";

export function getQuote(): Promise<ServerQuote> {
  /*   return fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then(
    (resp) => resp.json()
  ); */

  return fetch("./mocks/quotesMock.json")
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Error fetching data");
    });
}

export interface ServerQuote {
  count: number;
  message: string;
  quotes: IQuote[];
  status: number;
}

interface IQuote {
  text: "string";
  author: "string";
  tag: "string";
}

export function getQuote(): Promise<ServerQuote> {
  return fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then(
    (resp) => resp.json()
  );
}

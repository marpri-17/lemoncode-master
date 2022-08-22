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

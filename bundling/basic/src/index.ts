import "./styles.scss";

import { getQuote, ServerQuote } from "./quoteService";

const sum = (a: number, b: number): number => a + b;
getQuote().then((quote) => printQuote(quote));

console.log(`Resultado es ${sum(2, 3)} !`);

function printQuote(quote: ServerQuote) {
  const [ramdonQuote] = quote.quotes;
  const quoteElement = document.querySelector("#quote");
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("quote-text");
  newParagraph.innerText = ramdonQuote.text;
  const newAuthor = document.createElement("p");
  newAuthor.innerText = ramdonQuote.author;
  quoteElement.appendChild(newParagraph);
  quoteElement.appendChild(newAuthor);
}

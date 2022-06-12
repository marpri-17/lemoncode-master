// import './styles.css';

import { getQuote } from "./quoteService";

const sum = (a, b) => a + b;
getQuote().then(
    (resp) => resp.json()
).then(quote => printQuote(quote));

console.log(`Resultado es ${sum(2, 3)} !`);

function printQuote(quote) {
    const quoteElement = document.querySelector('#quote');
    const newParagraph = document.createElement('p');
    newParagraph.classList.add('quote-text');
    newParagraph.innerText = quote.quotes[0].text;
    const newAuthor = document.createElement('p');
    newAuthor.innerText = quote.quotes[0].author;
    quoteElement.appendChild(newParagraph);
    quoteElement.appendChild(newAuthor);
}
import "./styles.scss";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import { RouterProvider } from "react-router-dom";
import { router } from "core/router/app.router.component";
/* 
const sum = (a: number, b: number): number => a + b;
getQuote().then((quote) => printQuote(quote)); */

// console.log(`Resultado es ${sum(2, 3)} !`);

/* function printQuote(quote: ServerQuote) {
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

const a: number = 1; */

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <StrictMode>
      <CssBaseline />
      <RouterProvider router={router} />
    </StrictMode>
  </>
);

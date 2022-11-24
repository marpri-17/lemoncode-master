import React from "react";
import image from "./content/logo_2.png";

export function TitleComponent() {
  return (
    <div className="container">
      <img src={image} alt="Logo Lemoncode" />
      <h1 className="my-title">{process.env.GREETING}</h1>
    </div>
  );
}

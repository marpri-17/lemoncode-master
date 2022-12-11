import React from "react";
import reactImg from "assets/react_logo.png";
import webpackImg from "assets/webpack_icon.png";
import materialImg from "assets/material.png";
import { Box, Paper, Typography } from "@mui/material";
import rocketSvg from "assets/rocket.svg";
import "./title.styles.scss";

export function TitleComponent() {
  return (
    <Box
      id="title"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 15px 15px 15px",
      }}
    >
      <Box
        sx={{
          justifySelf: "self-start",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "100%",
        }}
      >
        <Box component="img" src={reactImg} alt="Logo Lemoncode"></Box>
        <Box component="img" src={webpackImg} alt="Logo Lemoncode"></Box>
        <Box component="img" src={materialImg} alt="Logo Lemoncode"></Box>
      </Box>
      <Typography variant="h3" align="center" className="about-title">
        Webpack & React Material UI base project
      </Typography>
      <Typography className="my-title" align="center">
        {process.env.GREETING}
      </Typography>
      <Typography variant="h6">
        Proyecto base para construir una aplicación web utilizando React y React
        Material (MUI), con el apoyo de Webpack para la gestión de dependencias
        y el soporte al entorno de desarrollo.
        <br />
        Incluye una proposición de arquitectura basada en pods y la posibilidad
        de incluir variables de entorno locales para utilizar durante el
        bundling de desarrollo y de producción.
      </Typography>
      <Paper
        variant="elevation"
        elevation={3}
        sx={{
          padding: "15px 0 15px 3.1%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="body1" align="justify" sx={{ flexGrow: 1 }}>
          - Instala las dependencias y ejecuta el modo desarrollo con el comando{" "}
          <code>npm start</code> para arrancar el servidor web de webpack y la
          comprobación de tipos de TypeScript. Ejecutando{" "}
          <code>npm run build</code> podemos generar un bundle utilizando las
          variables configuradas en el modo desarrollo. <br /> - Para el deploy
          a producción, los comandos disponibles son <code>npm start:prod</code>{" "}
          para arrancar en local un servidor web de webpack utilizando la
          configuración del modo producción, y <code>npm run build:prod</code>{" "}
          para generar el bundle final (por defecto en el directorio './dist').
        </Typography>
        <Box id="title-rocket" component="img" src={rocketSvg}></Box>
      </Paper>
    </Box>
  );
}

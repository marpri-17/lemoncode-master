import React from "react";
import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const HowToComponent: React.FC = () => {
  return (
    <Box component="article" sx={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Typography variant="h6" align="left">
        HTML
      </Typography>
      <Typography>
        Para gestionar la carga y la transpilación del código HTML se emplean
        las líbrerías html-loader y html-webpack-plugin. También soportan la
        generación de nombrado dinámico y el enrutamiento de las rutas relativas
        presentes en los archivos *.html.
      </Typography>
      <Typography variant="h6">CSS / Sass</Typography>
      <Typography variant="body1" align="justify">
        El proyecto soporta el uso de CSS y de Sass. Las librerías que se
        encargan de la carga y la transpilación de los ficheros son los loaders
        css-loader y sass-loader. Al utilizar Sass, se ha definido una ruta
        dentro del alias 'core' en el que poder centralizar las funcionalidades
        que ofrece el preprocesador de estilos, como una fichero de variables o
        de mixins. Emplea la nueva función de Sass{" "}
        <Link href="https://sass-lang.com/documentation/at-rules/use">
          '@use'
        </Link>{" "}
        para hacer uso de los valores globales en cada fichero particular. Para
        incluirlo en el bundle, importa la hoja de estilos en el componente
        mediante JavaScript:
        <br /> <code>import "./about.styles.scss"</code>
      </Typography>
      <Typography variant="h6"> Assets </Typography>
      <Typography variant="body1" align="justify">
        La carga de imágenes y otros recursos está gestionada por la utilidad de
        Webpack ^5.0.0 assets/resource, que gestiona la ruta de salida del
        archivo en el bundle final y el linkado con el código fuente. Para
        emplearlo y posibilitar el trabajo del transpilador, debemos hacer uso
        de los recursos importandolos en el componente:
        <br />
        <code>import logoImage from "assets/logo_2.png"</code>
      </Typography>
      <Typography variant="h6"> JS </Typography>
      <Typography variant="body1" align="justify" marginBottom="0.2rem">
        Soporta el uso de Typescript y React gracias a los loaders gestionados
        por Babel (configurados en el fichero .bablrc)
      </Typography>
      <Link
        variant="h6"
        underline="hover"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/marpri-17/lemoncode-master/tree/main/bundling/advanced"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <GitHubIcon sx={{ marginRight: "0.2rem" }} />
        View on Github
      </Link>
    </Box>
  );
};

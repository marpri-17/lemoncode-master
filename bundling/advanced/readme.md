## Basic Webpack bundle

- Bundle generado mediante Webpack
- Javascript procesado por babel utilizando los presets por defecto para compilar a es5
- Estilos manejados mediante css loader y sass gestionado por `sass` y `sass-loader`. `style-loader` se encarga de insertar el css/scss importado en el archivo principal de javascript
- `html-webpack-plugin` manejará la generación de los archivos html, mientras que `html-loader` se encarga del renombrado correcto de las importaciones de las tags, sustituyendo los nombres de cada archivo por el autogenerado, incluyendo hash, y de actualizar la ruta de acceso, en caso de ser necesario.
- Utilizamos `rimraf` para el borrado profundo de la copia de la carpeta `dist` en el que se genera el bundle de producción cada vez que se ejecuta el `npm run build`
- Support reacts
- Install webpack merge for handle differents configuration files for each enviroment
- Añadido `DotEnv` para dar soporte al uso de variables de entorno para desarrollo
- Añadido `Material UI` para el uso de componentes estilados. MUI Material icons para uso de iconos.
- Arquitectura de pods/scenes implementada

## Notes

React Router Index Route not working. Work around with navigate using layout component -> https://reactrouter.com/en/main/guides/index-route

### Availables scripts

```yml
start: "run-p -l typecheck:dev start:dev",
build: "rimraf ./dist && webpack --config ./config/webpack/dev.js",
start:prod: "run-p -l typecheck:dev webpack serve --config ./config/webpack/prod.js",
build:prod: "rimraf ./dist && webpack --config ./config/webpack/prod.js",
start:dev: " webpack serve --config ./config/webpack/dev.js"
clean: "rimraf ./dist",
typecheck: "tsc --noEmit",
typecheck:dev: "npm run typecheck -- --watch",
```

```json
"dependencies": {
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/material": "^5.10.15",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.18.2",
    "@babel/preset-env": "^7.18.2",
    "@babel/preset-react": "^7.17.12",
    "@babel/preset-typescript": "^7.17.12",
    "@types/react": "^18.0.25",
    "babel-loader": "^8.2.5",
    "css-loader": "^6.7.1",
    "dotenv-webpack": "^8.0.1",
    "html-loader": "^3.1.0",
    "html-webpack-plugin": "^5.5.0",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "sass": "^1.52.3",
    "sass-loader": "^13.0.0",
    "style-loader": "^3.3.1",
    "typescript": "^4.7.4",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.9.2",
    "webpack-merge": "^5.8.0"
  }
```

## Basic Webpack bundle

- Bundle generado mediante Webpack
- Javascript procesado por babel utilizando los presets por defecto para compilar a es5
- Estilos manejados mediante css loader y sass gestionado por `sass` y `sass-loader`. `style-loader` se encarga de insertar el css/scss importado en el archivo principal de javascript
- `html-webpack-plugin` manejará la generación de los archivos html, mientras que `html-loader` se encarga del renombrado correcto de las importaciones de las tags, sustituyendo los nombres de cada archivo por el autogenerado, incluyendo hash, y de actualizar la ruta de acceso, en caso de ser necesario.
- Utilizamos `rimraf` para el borrado profundo de la copia de la carpeta `dist` en el que se genera el bundle de producción cada vez que se ejecuta el comando `npm run build`

```json
"devDependencies": {
    "@babel/core": "^7.18.2",
    "@babel/preset-env": "^7.18.2",
    "babel-loader": "^8.2.5",
    "css-loader": "^6.7.1",
    "html-loader": "^3.1.0",
    "html-webpack-plugin": "^5.5.0",
    "rimraf": "^3.0.2",
    "sass": "^1.52.3",
    "sass-loader": "^13.0.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.9.2"
  }
```

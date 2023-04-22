## Basic Webpack bundle

- Bundle generado mediante Webpack 5
- Javascript procesado por babel utilizando los presets por defecto para compilar a es5. Se han añadido los presets de Typescript y React
- Estilos manejados mediante css loader y sass gestionado por `sass` y `sass-loader`. `style-loader` se encarga de insertar el css/scss importado en el archivo principal de javascript
- `html-webpack-plugin` manejará la generación de los archivos html, mientras que `html-loader` se encarga del renombrado correcto de las importaciones de las tags, sustituyendo los nombres de cada archivo por el autogenerado, incluyendo hash, y de actualizar la ruta de acceso, en caso de ser necesario
- Utilizamos `rimraf` para el borrado profundo de la carpeta `dist` en el que se genera el bundle de producción cada vez que se vuelve a compilar
- React ^18.0.0
- Material UI
- Configuraciones independientes para los entornos de desarrollo y producción. La fusión de los ditintos archivos de configuración se realiza con la ayuda de `webpack merge`
- Añadido `DotEnv` para dar soporte al uso de variables de entorno para desarrollo diferenciadas entre modo producción y modo desarrollo
- Propuesta de arquitectura basada en pods

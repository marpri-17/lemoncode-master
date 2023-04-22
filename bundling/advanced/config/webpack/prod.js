const { merge } = require('webpack-merge');
const path = require("path");
const commons = require('./base');
const DotEnv = require('dotenv-webpack')


module.exports = merge(commons, {
    mode: 'production',
    devtool: false,
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    performance: {
        maxEntrypointSize: 624000,
        maxAssetSize: 624000
    },
    plugins: [
        new DotEnv({
            path: path.join(path.resolve(__dirname, "../"), 'env/prod.env'),
        })

    ]
})
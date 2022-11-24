const { merge } = require('webpack-merge');
const commons = require('./base');
const path = require("path");
const DotEnv = require("dotenv-webpack")


module.exports = merge(commons, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        hot: true,
        static: {
            directory: path.join(path.resolve(__dirname, "../../"), "src"),
        },
    },
    plugins: [
        new DotEnv({
            path: path.join(path.resolve(__dirname, "../"), 'env/dev.env'),
        })
    ]
})
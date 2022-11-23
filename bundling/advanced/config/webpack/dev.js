const { merge } = require('webpack-merge');
const base = require('./base');
const path = require("path");


module.exports = merge(base, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, "src"),
        },
    }
})
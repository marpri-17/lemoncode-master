const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: ['./index.js'],
    output: {
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // Fichero en dist
            template: "./index.html", // Fichero de entrada ./src
            scriptLoading: "blocking",
        })
    ],
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, "src"),
        },
    }
}
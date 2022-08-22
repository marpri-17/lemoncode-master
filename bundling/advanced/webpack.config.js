const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: ['./index.tsx'],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },


    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/image_[hash][ext][query]'
    },


    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },

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
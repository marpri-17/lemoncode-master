const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(path.resolve(__dirname, "../../"), "src"),
    entry: [path.join(path.resolve(__dirname, "../../"), "src/index.tsx")],
    output: {
        filename: 'main.js',
        path: path.join(path.resolve(__dirname, "../../"), './dist'),
        assetModuleFilename: 'content/[hash].[ext]'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            components: path.join(path.resolve(__dirname, "../../"), "src/components"),
            pods: path.join(path.resolve(__dirname, "../../"), "src/pods"),
            core: path.join(path.resolve(__dirname, "../../"), "src/core"),
            layouts: path.join(path.resolve(__dirname, "../../"), "src/layouts"),
            scenes: path.join(path.resolve(__dirname, "../../"), "src/scenes")
        }
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
                exclude: /node_modules/,
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
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'content/[name].[ext]'
                }
            },
            {
                test: /\.json/,
                type: 'asset',
                generator: {
                    filename: 'mocks/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // Fichero en dist
            template: "./index.html", // Fichero de entrada ./src
            scriptLoading: "blocking",
        })
    ]
}
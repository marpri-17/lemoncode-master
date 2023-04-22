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
            assets: path.join(path.resolve(__dirname, "../../"), "src/assets"),
            core: path.join(path.resolve(__dirname, "../../"), "src/core"),
            layouts: path.join(path.resolve(__dirname, "../../"), "src/layouts"),
            mocks: path.join(path.resolve(__dirname, "../../"), "src/mocks"),
            pods: path.join(path.resolve(__dirname, "../../"), "src/pods"),
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
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'content/[name].[ext]'
                }
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
            {
                test: /\.json/,
                type: 'asset',
                exclude: /node_modules/,
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
const { merge } = require('webpack-merge');
const base = require('./base');


module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    }
})
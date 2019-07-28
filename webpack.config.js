const path = require('path');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin')
const webpack = requier('webpack')

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './init.js',

    mode: 'none',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CaseSensitivePathsWebpackPlugin(),
        new webpack.optimize.UglifyJsPlagin()
    ]
}

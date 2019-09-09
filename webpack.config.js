const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        // styles: './style.css'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    mode: 'none',

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader'],
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     'css-loader'
                // ]
            }
        ]
    },

    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: '[name].css'
    //     }) // в случаее если много точек входа [name]
    // ]
}

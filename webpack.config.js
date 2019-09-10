const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index'
    },
    mode: 'none',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            allChunks: true
        }) // в случаее если много точек входа [name]
    ]
}

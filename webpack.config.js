const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, 'src'),

    mode: 'none',
    entry: {
        index: './index',
        shop: './shop'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js' // шаблонизатор - name будет либо index, либо shop
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test application 01',
            hash: true // теперь вместо адреса в src еще добавляется hash (номера сборки)
        })
    ]
};

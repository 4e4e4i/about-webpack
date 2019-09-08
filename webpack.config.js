const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        shop: './shop',
        profile: './profile'
    },
    mode: "none",

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js' // шаблонизатор - name будет либо index, либо shop
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    priority: 1,
                    enforce: true
                }
            },
        }
    }
};

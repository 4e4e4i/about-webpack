const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index'
    },
    mode: 'none',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
}

const path = require('path');

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
                test: /\.js$/,
                loader: 'strip-loader',
                options: {
                    strip: ['console.*']
                }
            }
        ]
    }
}

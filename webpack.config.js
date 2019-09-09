const path = require('path');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: './index',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    mode: 'none',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {

        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}

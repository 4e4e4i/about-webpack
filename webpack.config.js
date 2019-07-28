const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './Home.js',

    mode: 'none',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'source-map'
}

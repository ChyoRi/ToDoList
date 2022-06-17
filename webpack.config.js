const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: __dirname + '',
    output : {
        path: __dirname + '/build',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/, use: ['style-loader', 'css-loader', 'sass-lader']
            },
            {
                test: /\.html$/, use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + './index.html',
            filename: 'index.html'
        })
    ],
    devServer : {
        open: true
    }

}
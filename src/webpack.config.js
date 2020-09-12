var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader:'babel-loader'
            }
        ]
    },
 plugins: [new HtmlWebpackPlugin({
         template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        config: JSON.stringify({
            apiUrl: 'http://localhost:3000'
        })
    }
}
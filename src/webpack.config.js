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
                exclued: /(node_modules|bower_components)/,
                use: {
                        loader:'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
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
            apiUrl: 'http://localhost:63851/api'
        })
    }
}
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractText = require('extract-text-webpack-plugin');

console.log('NODE_ENV', process.env.NODE_ENV);

const extractSass = new extractText({
    filename: '[name].css',
    disable: process.env.NODE_ENV === 'development'
})

module.exports = {
    entry: {
        chessgame: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true,
        contentBase: 'dist'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        extractSass
    ]
}

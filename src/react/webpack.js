/**
 * PEER DEPS:
 * webpack / webpack-dev-server
 */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    entry: './src/index.js',
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
});

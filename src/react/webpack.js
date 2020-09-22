/**
 * PEER DEPS:
 * - webpack
 * - webpack-dev-server
 */
const fs = require('fs');
const path = require('path');

const plugins = [];

(function addHtmlPlugin(plugins) {
    const INDEX_HTML_PATH = './src/index.html';
    const needsPlugin = fs.existsSync(path.join(process.cwd(), INDEX_HTML_PATH));

    if (needsPlugin) {
        plugins.push(new (require('html-webpack-plugin'))({
            template: INDEX_HTML_PATH,
            filename: "./index.html"
        }));
    }
})(plugins);

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
    plugins,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
});

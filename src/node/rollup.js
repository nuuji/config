const resolve = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");
const shebang = require("rollup-plugin-preserve-shebang");

module.exports = () => { 
    return {
        input: "src/index.js",
        output: [
            {
                file: "lib/index.js",
                format: "cjs",
            },
        ],
        // TODO https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
        plugins: [shebang(), resolve(), babel({ babelHelpers: 'bundled' })],
    };
};

const resolve = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");

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
        plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
    };
};

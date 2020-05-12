const resolve = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");
const { terser } = require("rollup-plugin-terser");

module.exports = ({ name }) => { 
    return {
        input: "src/index.js",
        output: [
            {
                file: "lib/index.js",
                format: "cjs",
            },
            {
                file: "lib/index.min.js",
                format: "iife",
                name,
                globals: {
                    react: "React",
                    "prop-types": "PropTypes",
                },
                plugins: [terser()],
            },
        ],
        external: ["react", "react-dom", "prop-types"],
        // TODO https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
        plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
    };
};

const isTest = process.env.NODE_ENV === "test";

module.exports = () => ({
    presets: [
        [
            "@babel/env",
            {
                modules: isTest ? "commonjs" : false,
            },
        ],
    ],
    plugins: ["@babel/plugin-proposal-class-properties"],
});

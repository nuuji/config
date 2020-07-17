const isTest = process.env.NODE_ENV === "test";

module.exports = ({ targets }) => ({
    presets: [
        [
            "@babel/env",
            {
                modules: isTest ? "commonjs" : false,
                targets,
            },
        ],
    ],
    plugins: ["@babel/plugin-proposal-class-properties"],
});

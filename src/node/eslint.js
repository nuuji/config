const baseConfig = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    parser: "babel-eslint",
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
    },
    rules: {
        semi: "error",
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                useTabs: false,
            },
        ],
    },
};

module.exports = ({ jest = false } = {}) => {
    const config = JSON.parse(JSON.stringify(baseConfig));

    if (jest) {
        config.env.jest = true;
        config.plugins.push("jest");
    }

    return config;
};

const baseConfig = {
    env: {
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
    ],
    parser: "babel-eslint",
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
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
    settings: {
        react: {
            version: "16.13",
        },
    },
};

module.exports = ({ browser = false, jest = false } = {}) => {
    const config = JSON.parse(JSON.stringify(baseConfig));

    if (browser) {
        config.env.browser = true;
    }

    if (jest) {
        config.env.jest = true;
        config.plugins.push("jest");
    }

    return config;
};

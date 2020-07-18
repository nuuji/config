module.exports = () => ({
    extends: [
        "eslint:recommended", 
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["prettier"],
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
});

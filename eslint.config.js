import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import stylistic from "@stylistic/eslint-plugin";

export default [
    js.configs.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    reactHooks.configs["recommended-latest"],
    reactRefresh.configs.vite,
    eslintConfigPrettier,
    stylistic.configs["recommended"],
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2025,
            },
        },
        rules: {
            "no-empty": ["error", { allowEmptyCatch: true }],
            "no-extra-boolean-cast": "warn",
            "no-implicit-coercion": "warn",
            "no-undef": "warn",
            "no-unused-vars": [
                "error",
                { argsIgnorePattern: "^[A-Z_]", varsIgnorePattern: "^[A-Z_]" },
            ],
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "@stylistic/dot-location": ["warn", "property"],
            "@stylistic/indent": [
                "error",
                4,
                { ignoreComments: true, SwitchCase: 1 },
            ],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/space-before-function-paren": [
                "error",
                { anonymous: "never", named: "never", asyncArrow: "always" },
            ],
            "@stylistic/space-in-parens": ["error", "never"],
            "@stylistic/switch-colon-spacing": [
                "error",
                { after: true, before: false },
            ],
            "@stylistic/linebreak-style": ["error", "windows"],
            "@stylistic/quotes": ["warn", "double"],
            "@stylistic/quote-props": [
                "error",
                "as-needed",
                { keywords: true, unnecessary: false, numbers: true },
            ],
            "@stylistic/comma-dangle": [
                "error",
                {
                    arrays: "only-multiline",
                    objects: "only-multiline",
                    imports: "only-multiline",
                    exports: "only-multiline",
                    functions: "never",
                },
            ],
            "@stylistic/comma-spacing": ["error", { before: false, after: true }],
            "@stylistic/jsx-curly-spacing": [
                "warn",
                { when: "never", children: true, allowMultiline: true },
            ],
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/object-curly-newline": [
                "error",
                { multiline: true, consistent: true },
            ],
            "@stylistic/object-property-newline": [
                "error",
                { allowAllPropertiesOnSameLine: true },
            ],
            "@stylistic/operator-linebreak": ["error", "after"],
            "@stylistic/no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
        },
    },
];

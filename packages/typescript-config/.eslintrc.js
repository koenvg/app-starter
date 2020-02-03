module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "jest"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "all",
        printWidth: 120,
      }
    ],
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": ["error", {"groups": ["index", "sibling", "parent", "internal", "external", "builtin"]}],
    "import/named": "off",
    "import/no-unresolved": "off"
  },
  settings: {
    react: {
      version: "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import * as importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // 1. Ignore non-source folders
  {
    ignores: [
      "**/.github",
      "**/.husky",
      "**/.licenses",
      "**/.storybook/build",
      "**/.vscode",
      "**/build",
      "**/node_modules",
      "eslint.config.js",
    ],
  },

  // 2. Base JavaScript rules
  js.configs.recommended,

  // 3. Import plugin rules
  importPlugin.flatConfigs?.recommended ?? {},

  // 4. Prettier compatibility (disables stylistic conflicts)
  prettier,

  // 5. React + JSX + a11y rules for TSX files
  {
    files: ["**/*.tsx"],
    plugins: {
      "jsx-a11y": jsxA11y,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.storybook.json"],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    rules: {
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 6. TypeScript-specific settings and overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...tseslint.configs.recommendedTypeChecked[0], // scope this to only Typescript related files
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: [
          "./tsconfig.app.json",
          "./tsconfig.node.json",
          "./tsconfig.storybook.json",
        ],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-empty-object-type": [
        "warn",
        { allowInterfaces: "always" },
      ],
      "@typescript-eslint/no-floating-promises": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off", // optional, only if avoiding ESLint conflicts
    },
    settings: {
      react: { version: "detect" },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          project: [
            "./tsconfig.app.json",
            "./tsconfig.node.json",
            "./tsconfig.storybook.json",
          ],
          alwaysTryTypes: true, // optional, but helps with index files
        },
      },
    },
  },

  // 7. Test and config files (Node.js + test globals)
  {
    files: ["vite.config.ts", "**/*.test.ts", "**/*.test.tsx"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // or use `globals.mocha` if using Mocha instead
        ...globals.browser, // optional if you test in a browser-like env (e.g. jsdom)
      },
      parserOptions: {
        project: ["./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "off", // allow console logs in test or config files
    },
  },

  // 8. Storybook rules (spread plugin config)
  storybook.configs["flat/recommended"],

  // 9. Storybook file-specific parser options
  {
    files: [
      "src/.stories/**/*.ts",
      "src/.stories/**/*.tsx",
      "src/**/*.stories.@(ts|tsx)",
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.storybook.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
  },
);

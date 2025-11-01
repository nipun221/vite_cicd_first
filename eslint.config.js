import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import vitest from "eslint-plugin-vitest-globals";

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      reactHooks,
      reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  {
    files: [
      "**/*.test.{js,jsx}",
      "**/*.spec.{js,jsx}",
      "src/__tests__/**/*.{js,jsx}",
    ],
    plugins: {
      vitest,
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals, // adds test, expect, describe, etc.
      },
    },
    rules: {
      // optional: allow dev deps in test files
      "no-unused-expressions": "off",
    },
  },
]);
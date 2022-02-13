module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-anonymous-default-export': 'off',
        'react/function-component-definition': 'off'
      },
    },
  ],
  rules: {
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-relative-parent-imports': 'error',
  }
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-relative-parent-imports': 'error'
  }
};

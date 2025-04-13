module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'react/prop-types': 'warn',
    'react/button-has-type': 'warn',
    'no-promise-executor-return': 'warn',
    'no-plusplus': 'warn',
    'no-await-in-loop': 'warn',
    'no-unused-vars': 'warn',
    'react/no-array-index-key': 'warn',
    'consistent-return': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-console': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'linebreak-style': 0,

    'react/prop-types': 'off', // not the best practice
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'no-multiple-empty-lines': ['error', { max: 2 }],
  },
};

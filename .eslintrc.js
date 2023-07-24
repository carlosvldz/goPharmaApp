module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: ['standard', 'eslint:recommended', 'plugin:react/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    version: 'detect'
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off'
  }
}

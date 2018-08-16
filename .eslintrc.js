module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/jsx-filename-extension': 0,
    'import/extensions': 'never',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'linebreak-style': 0,
    'arrow-parens': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
};

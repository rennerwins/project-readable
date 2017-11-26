module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'no-undef': 0,
    'jsx-a11y/anchor-is-valid': { components: ['Link'] },
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};

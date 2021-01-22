module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0,
    'max-len': 0,
    'no-unused-expressions': 0,
    'linebreak-style': 0,
    "no-plusplus": 0,
    "default-case": 0,
    "no-unused-vars": 'error' ,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js',
      },
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

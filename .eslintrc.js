module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-multiple-empty-lines": [2, {"max": 3, "maxEOF": 4}],
    "indent": [0],
    "object-shorthand": [0]
  }
}

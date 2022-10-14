module.exports =  {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin: vue/vue3-recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: ["error", "always"],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      }, 
      "svg": "always",
      "math": "always"
    }]
  }
}
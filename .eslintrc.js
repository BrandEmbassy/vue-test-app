function severity() {
  return process.env.NODE_ENV === 'production' ? 'error' : 'warn';
}

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'prettier',
    'prettier/vue'
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
    'indent': 'off',
    'linebreak-style': ['error', 'unix'],
    'quotes': [severity(), 'single'],
    'semi': [severity(), 'always'],
    'vue/require-prop-types': ['off'],
    'comma-dangle': [severity(), {
      'arrays': 'always-multiline',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'no-empty': severity(),
    'no-unused-vars': severity(),
    'no-undef': severity(),
    'space-before-function-paren': [severity(), 'never'],
    'no-trailing-spaces': severity(),
    'no-multiple-empty-lines': severity(),
    'vue/mustache-interpolation-spacing': [severity(), 'always'],
    'vue/html-closing-bracket-spacing': [severity(), {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never',
    }],
    'vue/require-v-for-key': severity(),
    'vue/no-v-html': 0,
    'no-console': [severity(), {allow: ['warn', 'error']}],
    'no-debugger': severity(),
    'object-curly-spacing': [
      severity(),
      'always'
    ],

    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],

    // allow async-await
    'generator-star-spacing': 'off',

    // allow paren-less arrow functions
    'arrow-parens': 0,
    'one-var': 0,

    'vue/max-attributes-per-line': [severity(), {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    'vue/valid-v-for': [severity()],
    "vue/script-indent": [severity(), 2, {
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }],
    "vue/html-indent": [severity(), 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-self-closing": [severity(), {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/html-closing-bracket-newline": [severity(), {
      "singleline": "never",
      "multiline": "always"
    }]
  }
}

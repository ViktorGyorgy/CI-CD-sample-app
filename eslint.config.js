// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    plugins: {
      '@stylistic': stylistic
    },
    languageOptions: {
      parser: parserTs,
    },
    
    files: ["src/**/*.ts"],
    ignores: ["**/*.config.js"],
    rules: {
      "@stylistic/comma-dangle": ["error", "always"],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-extra-semi': ['error'],
      '@stylistic/quotes': ['error', "single"],
      '@stylistic/semi': ['error', 'always'],
      // ...
    }
  }
]
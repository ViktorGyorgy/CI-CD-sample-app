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
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      // '@stylistic/no-extra-semi': ['error', true],
      "@stylistic/comma-dangle": ["error", "always"],
      // ...
    }
  }
]
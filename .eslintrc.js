module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': 'warn', // Change to 'warn' if you want to keep console statements during development
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Adjust based on your project's requirements
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
  },
}

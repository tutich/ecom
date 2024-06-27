module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'plugin:prettier/recommended'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error', // enforce prettier formatting
    'simple-import-sort/imports': 'error', // enforce import sorting
    'no-console': 'warn', // optionally warn about console statements
  },
};

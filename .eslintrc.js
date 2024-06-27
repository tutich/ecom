module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'off', // Disable all prettier rules
    'simple-import-sort/imports': 'error', // Enable simple import sort for imports
    'simple-import-sort/exports': 'error', // Enable simple import sort for exports
  },
};

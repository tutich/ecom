module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'off', // Disable all prettier rules
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': 'off', // Disable no-console rule
    'eol-last': ['error', 'always'], // Ensure newline at end of file
    'comma-dangle': ['error', 'always-multiline'], // Ensure trailing commas
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Allow unused vars prefixed with _
  },
};

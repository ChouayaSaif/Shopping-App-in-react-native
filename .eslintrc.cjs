// .eslintrc.cjs
module.exports = {
  root: true,
  extends: [
    'eslint-config-expo/flat', // Expo base config
    'prettier'                  // Prettier last so it overrides ESLint formatting rules
  ],
  plugins: ['prettier'],        // enable prettier plugin
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // enforce prettier formatting
  },
  ignorePatterns: ['node_modules/', 'build/', 'dist/'], // optional
};

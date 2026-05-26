export default [
  {
    files: ['**/*.js'], // Apply to all JavaScript files
    rules: {
      semi: 'error', //force semicolons at the end of statements
      'no-unused-vars': 'warn', //warn if there are unused variables
    },
  },
];

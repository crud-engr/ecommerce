// {
//   "extends": ["plugin:adonis/typescriptApp", "prettier"],
//   "plugins": ["prettier"]
// }
module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
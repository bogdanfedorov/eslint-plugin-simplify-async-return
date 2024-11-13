const simplifyAsyncReturn = require("./rules/eslint-plugin-simplify-async-return.js");

module.exports = {
  plugins: {
    "simplify-async-return": simplifyAsyncReturn,
  },
  rules: {
    "simplify-async-return/simplify-async-return": "error",
  },
};

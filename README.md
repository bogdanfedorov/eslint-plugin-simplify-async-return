# eslint-plugin-simplify-async-return

A custom ESLint plugin to simplify async functions that immediately return a promise.

## Description

This ESLint plugin provides a rule that detects async functions with a single awaited assignment followed by an immediate return of that assigned value. It suggests simplifying such functions by directly returning the promise.

## Installation

Since this is a local, custom plugin, you don't need to publish it on npm. Instead, follow these steps:

1. Create a directory for your custom ESLint plugins in your project:

```bash
mkdir -p eslint-plugins/eslint-plugin-simplify-async-return
```

2. Copy the plugin files into this directory:

```bash
cp eslint-plugin-simplify-async-return.js eslint-plugins/eslint-plugin-simplify-async-return/index.js
```

## Usage

To use this local plugin, you need to update your ESLint configuration file (`.eslintrc.js` or `.eslintrc.json`).

1. Add the plugin to the `plugins` array, using a relative path:

```json
{
  "plugins": ["./eslint-plugins/eslint-plugin-simplify-async-return"]
}
```

2. Configure the rule under the `rules` section:

```json
{
  "rules": {
    "simplify-async-return/simplify-async-return": "error"
  }
}
```

## Rule Details

This rule aims to simplify async functions that can be written more concisely.

Examples of **incorrect** code for this rule:

```js
async function fetchData() {
  const data = await getData();
  return data;
}

const fetchUser = async () => {
  const user = await getUser();
  return user;
};
```

Examples of **correct** code for this rule:

```js
async function fetchData() {
  return getData();
}

const fetchUser = async () => {
  return getUser();
};
```

## Options

This rule does not have any options.

## When Not To Use It

If you prefer to always use intermediate variables in async functions for clarity or debugging purposes, you may want to disable this rule.

## Further Reading

- [JavaScript async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

## Contributing

This is a custom, local plugin. If you want to make changes, simply edit the plugin file directly in your project.

## License

This project is for personal use and is not licensed for distribution.

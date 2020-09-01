# babel-plugin-short-css-vars

[![NPM Version](https://img.shields.io/npm/v/babel-plugin-short-css-vars?style=flat-square)](https://www.npmjs.com/package/babel-plugin-short-css-vars)
[![Build Status](https://img.shields.io/circleci/build/gh/godaddy/short-css-vars?style=flat-square)](https://circleci.com/gh/godaddy/short-css-vars)
[![License MIT](https://img.shields.io/github/license/godaddy/short-css-vars?style=flat-square)](LICENSE.md)

Babel plugin using [short-css-vars] to shorten the names of CSS variables in
JavaScript code.

CSS variables are renamed with a unique hash that is consistent across processed
files. This allows you to have common style files that reference variables with
varying values defined in theme files.

## Installation

```
$ npm install babel-plugin-short-css-vars --save-dev
```

## Example

**Input**

```js
const sheet = document.createElement('style');
sheet.innerHTML = `
:root { --long-variable-name-that-defines-a-particular-color: blue; }
`;

const div = document.createElement('div');
div.style.color = "var(--long-variable-name-that-defines-a-particular-color)";
```

**Output**

```js
const sheet = document.createElement('style');
sheet.innerHTML = `
:root { --vf2dsn: blue; }
`;

const div = document.createElement('div');
div.style.color = "var(--vf2dsn)";
```

This plugin also works with JSX/React source.

## Usage

```json
{
  "plugins": [
    "babel-plugin-short-css-vars"
  ]
}
```

See the [babel docs] for more configuration details.

### Options

This plugin supports all the [utility options]. Because these options will need
to be a RegExp or function, the Babel config willl need to be a
[JavaScript configuration file].

#### formatter

See the utility for how the [default formatting] works. If you wish to use a
different pattern, simply provide a different formatter function via options.

```js
// babel.config.js
const fnv1a = require('fnv1a');

module.exports = {
  "plugins": [
    [
      "babel-plugin-short-css-vars",
      {
        formatter: name => fnv1a(name).toString(36)
      }
    ]
  ]
}
```

The `name` provided to the formatter is the variable name WITHOUT the '--'
prefix. The return value should also be name-only. So `my-custom-var` rather
than `--my-custom-var`.

#### ignore

If you need to avoid hashing certain variable names, you can ignore them with
this option by either RegExp, function, or string (which will be turned into
RegExp). This can be useful if you are referencing CSS Variables in an app,
yet you do not have control over some of the declarations.

```js
// babel.config.js
module.exports = {
  "plugins": [
    [
      "babel-plugin-short-css-vars",
      {
        ignore: /^third-party-theme/
      }
    ]
  ]
}
```

In another scenario, if you have several short variable names (for example
`--blue`) you can use a function to ignore names by length.

```js
postcss([shortCssVars({
  ignore: name => name.length <= 4
})])
```

The `name` provided to ignore is the variable name WITHOUT the '--' prefix. So
`blue` rather than `--blue`.

<!-- LINK -->

[short-css-vars]:../short-css-vars/README.md
[default formatting]:../short-css-vars/README.md#formatting
[utility options]:../short-css-vars/README.md#new-shortcssvarsoptions
[babel docs]:https://babeljs.io/docs/en/configuration
[JavaScript configuration file]:https://babeljs.io/docs/en/configuration#javascript-configuration-files


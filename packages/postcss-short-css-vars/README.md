# postcss-short-css-vars

[![NPM Version](https://img.shields.io/npm/v/postcss-short-css-vars?style=flat-square)](https://www.npmjs.com/package/postcss-short-css-vars)
[![Build Status](https://img.shields.io/circleci/build/gh/godaddy/short-css-vars?style=flat-square)](https://circleci.com/gh/godaddy/short-css-vars)
[![License](https://img.shields.io/github/license/godaddy/short-css-vars?style=flat-square)](LICENSE.md)

PostCSS plugin using [short-css-vars] to shorten the names of CSS variables in
stylesheets.

CSS variables are renamed with a unique hash that is consistent across processed
files. This allows you to have common style files that reference variables with
varying values defined in theme files.

## Installation

```
$ npm install postcss-short-css-vars --save-dev
```

## Example

**Input**

```css
:root {
 --long-variable-name-that-defines-a-particular-color: blue;
}

.my-class {
  color: var(--long-variable-name-that-defines-a-particular-color);
}
```

**Output**

```css
:root {
 --1vf2dsn: blue;
}

.my-class {
  color: var(--1vf2dsn);
}
```

## Usage

See the [PostCSS docs] for examples on how to use this plugin in different
environments.

### Options

This plugin supports all the [utility options] with the addition of a callback
to retrieve the rename map.

#### callback

A `callback` can be provided which will be provided with an object to show what
variables were renamed as.

```json
{
  "long-variable-name-that-defines-a-particular-color": "1vf2dsn"
}
```

You can utilize this for logging or other tracking purposes.

```js
const postcss = require('postcss');
const shortCssVars = require('postcss-short-css-vars');
const fs = require('fs');

postcss([shortCssVars({
  callback: map => {
    console.log(JSON.stringify(map));
    fs.writeFile('css-vars-map.json', JSON.stringify(map), 'utf8');    
  }
})])
```

#### formatter

See the utility for how the [default formatting] works. If you wish to use a
different pattern, simply provide a different formatter function via options.

```js
const postcss = require('postcss');
const shortCssVars = require('postcss-short-css-vars');
const fnv1a = require('fnv1a');

postcss([shortCssVars({
  formatter: name => fnv1a(name).toString(36)
})])
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
const postcss = require('postcss');
const shortCssVars = require('postcss-short-css-vars');

postcss([shortCssVars({
  ignore: /^third-party-theme/
})])
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

[short-css-vars]: ../short-css-vars/README.md
[default formatting]: ../short-css-vars/README.md#formatting
[utility options]: ../short-css-vars/README.md#new-shortcssvarsoptions
[PostCSS docs]: https://github.com/postcss/postcss#usage


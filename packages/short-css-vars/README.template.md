# short-css-vars

[![NPM Version](https://img.shields.io/npm/v/short-css-vars?style=flat-square)](https://www.npmjs.com/package/short-css-vars)
[![Build Status](https://img.shields.io/circleci/build/gh/godaddy/short-css-vars?style=flat-square)](https://circleci.com/gh/godaddy/short-css-vars)
[![License MIT](https://img.shields.io/github/license/godaddy/short-css-vars?style=flat-square)](LICENSE.md)

Utility to shorten the names of CSS variables in stylesheets.

CSS variables are renamed with a unique hash that is consistent across processed
files. This allows you to have common style files that reference variables with
varying values defined in theme files.

## Usage

For many cases you can simply configure these plugins in your build chains:
- [postcss-short-css-vars]
- [babel-plugin-short-css-vars]

Otherwise, see the [API] docs below to use the utility directly.

## Formatting

The default formatter uses the popular [string-hash] with a djb2-like algorithm,
then [base-36] encodes the result. In the rare chance of collisions, an error
will be thrown with the colliding names. A custom formatter can provided via
the [options](#new-shortcssvarsoptions)

## Installation

```
$ npm install short-css-vars
```
{{>main}}

[API]:#installation
[postcss-short-css-vars]:../postcss-short-css-vars/README.md
[babel-plugin-short-css-vars]:../babel-plugin-short-css-vars/README.md
[base-36]:https://en.wikipedia.org/wiki/Base36
[string-hash]:https://www.npmjs.com/package/string-hash

const stringHash = require('string-hash');

const reName = /(--)([\w-]+)/;
const reDef = /(^--|[^(]--)([\w-]+)((?:[\s]+)?:)/g;
const reRef = /(,?\s*var\(\s*--)([\w-]+)(,\s*var.+)?/g;

/**
 * Returns a unique hash for a string name.
 *
 * @param {string} name - Variable name
 * @returns {string} encoded hash
 * @private
 */
const defaultFormatter = name => stringHash(name).toString(36);

/**
 * Normalize ignore string/regexp to a function
 *
 * @param {RegExp|string|function} ignore - Rule to ignore certain variable names
 * @returns {(function(string): boolean)} fn
 * @private
 */
function normalizeIgnore(ignore) {
  if (ignore instanceof Function) return ignore;

  if (ignore) {
    if (typeof ignore === 'string') {
      ignore = new RegExp(ignore);
    }
    if (ignore instanceof RegExp) {
      return str => ignore.test(str);
    }

    throw new Error(`'ignore' must be of type function, RegExp, or string. Received ${typeof ignore}`);
  }

  return () => false;
}

/**
 * Each instance keeps track of renamed variables to check for collisions and
 * to provide a mapping of changed names.
 *
 * @class
 * @classdesc Shorten lengthy CSS variable names
 *
 * @param {object} [options] - Optional configurations
 * @param {function} [options.formatter] - Custom formatter
 * @param {RegExp|string|function} [options.ignore] - Rule to ignore certain variable names
 */
function ShortCssVars(options = {}) {
  const formatter = options.formatter || defaultFormatter;
  const ignore = normalizeIgnore(options.ignore);

  const renameMap = {};
  const collisionMap = {};

  const shorten = name => {
    if (ignore(name)) return name;

    const shortName = formatter(name);
    renameMap[name] = shortName;

    // Detect collisions
    const existingName = collisionMap[shortName];
    if (existingName && existingName !== name) {
      throw new Error(`Short name '${shortName}' for '${name}' is already used for '${existingName}'`);
    } else {
      collisionMap[shortName] = name;
    }

    return shortName;
  };

  const replaceDefs = css => css.replace(reDef, (_, dashes, name, colon) => {
    return dashes + shorten(name) + colon;
  });

  const replaceRefs = css => css.replace(reRef, (_, start, name, nested) => {
    const end = nested ? replaceRefs(nested) : '';
    return start + shorten(name) + end;
  });

  /**
   * Shortens the name part of a variable string
   *
   * @method
   * @type {function(string): string}
   * @param {string} varName - Variable name including -- prefix
   * @returns {string} short
   */
  this.replaceName = varName => varName.replace(reName, (full, dashes, name) => {
    return dashes + shorten(name);
  });

  /**
   * Shortens the names of variables throughout CSS
   *
   * @method
   * @type {function(string): string}
   * @param {string} css - Text containing CSS variables
   * @returns {string} shortened CSS
   */
  this.replaceCss = css => replaceDefs(replaceRefs(css));

  /**
   * Get a mapping of original names to shortened names
   *
   * @example
   * {
   *   'long-variable-name-that-defines-a-particular-color': '1vf2dsn'
   * }
   *
   * @method
   * @type {function(string): string}
   * @returns {object} map
   */
  this.getMap = () => renameMap;
}

module.exports = ShortCssVars;

const postcss = require('postcss');
const ShortCssVars = require('short-css-vars');

/**
 * PostCSS plugin to shorten lengthy CSS variable names
 *
 * @type {postcss.PluginInitializer}
 * @param {object} [options] - Options object
 * @param {function} [options.callback] - Function that receives a mapping
 * @param {function} [options.formatter=defaultFormatter] - Custom formatter
 * @param {RegExp|function} [options.ignore] - Expression or function to ignore certain variable names
 * @returns {postcss.Transformer} transformer
 */
function plugin(options = {}) {
  const { callback, ...opts } = options;
  const shortCssVars = new ShortCssVars(opts);

  return (root) => {
    root.walkRules(rule => {
      rule.walkDecls(decl => {
        decl.prop = shortCssVars.replaceName(decl.prop);
        decl.value = shortCssVars.replaceCss(decl.value);
      });
    });
    if (callback) return callback(shortCssVars.getMap());
  };
}

module.exports = postcss.plugin('postcss-short-css-vars', plugin);

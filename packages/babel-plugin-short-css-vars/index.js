const ShortCssVars = require('short-css-vars');

module.exports = function plugin(api, options) {
  const shortCssVars = new ShortCssVars(options);
  return {
    visitor: {
      TemplateElement: path => {
        const raw = shortCssVars.replaceCss(path.node.value.raw);
        path.node.value = { raw };
      },
      StringLiteral: path => {
        path.node.value = shortCssVars.replaceCss(path.node.value);
      }
    }
  };
};

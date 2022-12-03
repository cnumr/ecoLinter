const stylelint = require('stylelint');
const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'greenit/avoid-white-blue-color';

const messages = ruleMessages(ruleName, {
  expected: (badColor) => `Avoid "${badColor}" color`,
});

module.exports = stylelint.createPlugin(ruleName, function getPlugin() {
  return function lint(postcssRoot, postcssResult) {
    const validOptions = validateOptions(postcssResult, ruleName, {
      //No options for now...
    });

    if (!validOptions) {
      //If the options are invalid, don't lint
    }

    postcssRoot.walkDecls((decl) => {
      const color = decl.value;

      if (color === 'white' || color === 'blue') {
        report({
          ruleName,
          result: postcssResult,
          message: messages.expected(color),
          node: decl,
          word: color,
        });
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;

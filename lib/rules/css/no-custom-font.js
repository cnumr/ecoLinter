const stylelint = require('stylelint');
const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'greenit/no-custom-font';

const messages = ruleMessages(ruleName, {
  expected: (unfixed) => `Use a standard font instead of "${unfixed}"`,
});

const standardFonts = [
  'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
  'system-ui',
  'emoji',
  'math',
  'fangsong',
  'inherit',
  'initial',
  'unset',
];

module.exports = stylelint.createPlugin(ruleName, function getPlugin() {
  return function lint(postcssRoot, postcssResult) {
    const validOptions = validateOptions(postcssResult, ruleName, {
      //No options for now...
    });

    if (!validOptions) {
      //If the options are invalid, don't lint
      return;
    }

    postcssRoot.walkDecls(/^font-family/, (decl) => {
      if (!standardFonts.includes(decl.value)) {
        report({
          ruleName,
          result: postcssResult,
          message: messages.expected(decl.value), // Build the reported message
          node: decl, // Specify the reported node
          word: 'blue', // Which exact word caused the error? This positions the error properly
        });
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;

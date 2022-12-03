const stylelint = require('stylelint');
const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'greenit/avoid-white-blue-color';

const messages = ruleMessages(ruleName, {
  expected: () => 'Avoid white and blue color',
});


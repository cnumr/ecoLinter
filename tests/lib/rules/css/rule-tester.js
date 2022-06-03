const { getTestRule } = require('jest-preset-stylelint');

module.exports.createTestRule = (pluginName) => ({
  ruleFilePath: `../../../../lib/rules/css/${pluginName}.js`,
  testRule: getTestRule({ plugins: [`./lib/rules/css/${pluginName}.js`] }),
});

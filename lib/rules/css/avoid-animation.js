const stylelint = require('stylelint');
const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'greenit/avoid-animation';

const messages = ruleMessages(ruleName, {
    expected: () => 'Avoid too many js/css animation',
});

module.exports = stylelint.createPlugin(ruleName, function getPlugin() {
    return function lint(postcssRoot, postcssResult) {
        const validOptions = validateOptions(postcssResult, ruleName, {
            //No options for now...
        });

        if (!validOptions) {
            //If the options are invalid, don't lint
            return;
        }

        postcssRoot.walkDecls(/^will-change/, (decl) => {
            report({
                ruleName,
                result: postcssResult,
                message: messages.expected(),
                node: decl,
                word: 'will-change',
            });
        });
    };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;

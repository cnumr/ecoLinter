const stylelint = require("stylelint");
const {report, validateOptions} = stylelint.utils;

const ruleName = "greenit/avoid-animation";

module.exports = stylelint.createPlugin(
    ruleName,
    function getPlugin(primaryOption, secondaryOptionObject, context) {
        return function lint(postcssRoot, postcssResult) {
            const validOptions = validateOptions(postcssResult, ruleName, {
                //No options for now...
            });

            if (!validOptions) {
                //If the options are invalid, don't lint
                return;
            }

            postcssRoot.walkDecls(/^will-change/, decl => {

                report({
                    ruleName,
                    result: postcssResult,
                    message: "Avoid too many js/css animation",
                    node: decl,
                    word: 'will-change',
                });

            })
        };
    }
);

module.exports.ruleName = ruleName;
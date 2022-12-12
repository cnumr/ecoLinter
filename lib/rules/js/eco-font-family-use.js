/**
 * @fileoverview prevent use of custom font for eco coding
 * @author alexandre
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'prevent use of custom font for eco coding',
      recommended: false,
      category: 'ecoCode',
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
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
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    function checkIfStandard(arr) {
      const checker = arr.reduce((acc, i) => {
        !standardFonts.includes(i) ? acc.push(i) : acc;
        return acc;
      }, []);
      if (checker < arr.length) return false;
      return checker;
    }

    return {
      TemplateElement: (node) => {
        let policy = node.value.raw
          .toString()
          .replace(/[\n\t;\s"']/g, '')
          .split(':')[1]
          .split(',');
        if (checkIfStandard(policy))
          context.report({
            node,
            message:
              'Your font-family is not in the standard fonts family : ' + checkIfStandard(policy),
          });
      },
      Identifier: (node) => {
        if (node.name === 'fontFamily' && node.parent.value.value) {
          let vl = node.parent.value.value.replace(/[\n\t;\s"]/g, '').split(',');
          if (checkIfStandard(vl))
            context.report({
              node,
              message:
                'Your font-family is not in the standard fonts family : ' + checkIfStandard(vl),
            });
        }
      },
    };
  },
};

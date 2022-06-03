'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'SetTimeout and SetInterval should not be called with string as first argument',
      category: 'eco',
      recommended: false,
    },
    fixable: null, // or 'code' or 'whitespace'
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    function noCallWithStringArg(node) {
      let method =
        node.callee.type === 'MemberExpression' ? node.callee.property.name : node.callee.name;

      if (
        (method === 'setTimeout' || method === 'setInterval') &&
        typeof node.arguments[0].value === 'string'
      ) {
        context.report({
          node,
          message: method + ' should not be called with string as first argument',
        });
      }
    }

    return {
      CallExpression: noCallWithStringArg,
    };
  },
};

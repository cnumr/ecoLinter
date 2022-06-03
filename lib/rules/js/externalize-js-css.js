/**
 * @fileoverview Externalisze .css and .js files
 * @author Nicolas DAVIET
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Externalize .js and .css files',
      category: 'Fill me in',
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
    function findImportFiles(node) {
      const path = node.source.value;
      if ((path.endsWith('.css') || path.endsWith('.js')) && !path.startsWith('http')) {
        context.report({
          node,
          message: 'Externalize .js and .css files',
        });
      }
    }

    return {
      ImportDeclaration: findImportFiles,
    };
  },
};

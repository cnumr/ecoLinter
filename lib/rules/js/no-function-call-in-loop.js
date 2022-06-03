/**
 * @fileoverview Ne pas appeler de fonction dans la déclaration d’une boucle de type for
 * @author Gael Pellevoizin
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Ne pas appeler de fonction dans la déclaration d’une boucle de type for',
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

    function findFunctionDeclarationInLoop(node) {
      const message = 'There should be no function call in loop declaration';
      //for (getNum(), i > 5, ++i)
      if (node.init.type === 'CallExpression') {
        context.report(node.init, message);
      }
      //for (let i in gettab())
      if ('node.right' in node && node.right.kind === 'CallExpression') {
        context.report(node.right, message);
      }
      //for (i = 0, i > 5, getNext())
      if (node.update.type === 'CallExpression') {
        context.report(node.update, message);
      }
      //for (i = 0, getTest(), ++i)
      if (node.test.type === 'CallExpression') {
        context.report(node.test, message);
      }
      //for (i = 0,i > getTest(), ++i)
      if (node.test.right.type === 'CallExpression') {
        context.report(node.test.right, message);
      }
      //for (i = 0, getTest() > i , ++i)
      if (node.test.left.type === 'CallExpression') {
        context.report(node.test.left, message);
      }
    }

    return {
      ForStatement: findFunctionDeclarationInLoop,
    };
  },
};

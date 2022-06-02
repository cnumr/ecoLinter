/**
 * @fileoverview Ne pas appeler de fonction dans la déclaration d’une boucle de type for
 * @author Gael Pellevoizin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Should not use string as argument in setTimout",
      category: "eco", // TODO a revoir
      recommended: false
    },
    fixable: null, // or 'code' or 'whitespace'
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    function obvious(node) {
      if (node.callee.name === 'setTimeout' && typeof node.arguments[0].value === 'string') {
        context.report({
          node,
          message: "SetTimeout and SetInterval should not be called with string arguments"
        });
      }
    }

    return {
      "CallExpression": obvious
    };
  }
};
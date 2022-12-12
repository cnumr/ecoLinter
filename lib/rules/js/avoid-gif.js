/**
 * @fileoverview Ne pas utiliser trop de gif dans une même page
 * @author Nathan Barré
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Do not use too many Gif',
      category: 'ecoCode',
      recommended: false,
    },
    fixable: null,
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here
    let nbGif = 0;
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    function isGif(value) {
      const myArray = value.split('.');
      if (myArray[myArray.length - 1] === 'gif' && nbGif >= 3) {
        return true;
      } else if (myArray[myArray.length - 1] === 'gif' && nbGif < 3) {
        nbGif += 1;
      }
      return false;
    }
    // any helper functions should go here or else delete this section
    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    return {
      Literal(node) {
        if (typeof node.value === 'string' && isGif(node.value)) {
          context.report({ node, message: 'You should use less than 3 Gif' });
        }
      },
    };
  },
};

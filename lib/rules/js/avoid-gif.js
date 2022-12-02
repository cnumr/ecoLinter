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
      description: 'Ne pas utiliser trop de gif dans une même page',
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

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    function findTooManyGif(node) {
      const message = "There should be no more than 3 gif";
    }

    return {
      GifStament: findTooManyGif,
    };
  },
};

/**
 * @fileoverview Ne pas utiliser de requête SQL qui sélectionne tous les champs
 * @author Maxime Malgorn
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Ne pas utiliser de requête SQL qui sélectionne tous les champs',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or 'code' or 'whitespace'
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    //eslint-disable-next-line
    const matching = 'select * from';
    const message = 'There should be no full sql request in litteral';

    return {
      Literal: (node) => {
        if (typeof node.value === 'string' && node.value.toLowerCase().includes(matching)) {
          context.report(node, message);
        }
      },
      TemplateLiteral: (node) => {
        const joined = node.quasis.map((node) => node.value.cooked).join(' ');
        if (joined.toLowerCase().includes(matching)) {
          context.report(node, message);
        }
      },
    };
  },
};

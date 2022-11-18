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
      description: 'Do not use an SQL query that selects all fields',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or 'code' or 'whitespace'
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
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

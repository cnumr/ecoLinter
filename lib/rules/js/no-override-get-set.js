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
      description: "Getters and setters should not be overridden",
      category: "eco",
      recommended: false,
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

    function noOverrideGetterAndSetter(node) {
      if (node.callee.type === "MemberExpression" && node.callee.object.name === "Object" && node.callee.property.name) {
        if (node.arguments[2].type === "ObjectExpression" && node.arguments[2].properties.some((prop) => (prop.key.name === "get" || prop.key.name === "set") && prop.value.type === "FunctionExpression" || prop.value.type === 'ArrowFunctionExpression')) {
          context.report({
            node,
            message: "Getters and setters should not be overridden"
          });
        }
      }
    }

    return {
      "CallExpression": noOverrideGetterAndSetter
    };
  }
};

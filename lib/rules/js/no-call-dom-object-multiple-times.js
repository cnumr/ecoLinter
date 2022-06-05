"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "DOM objects called multiple times should be assign to a variable",
      category: "eco",
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
    const map = {};
    const DOMAccessMethods = ["getElementById", "getElementsByTagName", "getElementsByClassName", "getElementsByName", "querySelectorAll"];
    const isInTheSameScope = (scope1, scope2) => {
      return scope1.childScopes != null || scope1.childScopes.includes(scope2)
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    function noCallDOMObjectMultipleTimes(node) {
      if (node.callee.object.name === "document" && DOMAccessMethods.includes(node.callee.property.name)) {
        const uniqueCallStr = node.callee.property.name + node.arguments[0].value;
        if (map[uniqueCallStr] != null && isInTheSameScope(map[uniqueCallStr], context.getScope())) {
          context.report({
            node,
            message: "DOM objects called multiple times should be assign to a variable"
          });
        } else {
          map[uniqueCallStr] = context.getScope();
        }
      }

    }

    return {
      "CallExpression": noCallDOMObjectMultipleTimes
    };
  }
};

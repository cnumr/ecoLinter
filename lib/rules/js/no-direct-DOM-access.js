/**
 * @fileoverview No DOM access without assignation
 * @author Rémi BOUSSU
 */
 'use strict';

 //------------------------------------------------------------------------------
 // Rule Definition
 //------------------------------------------------------------------------------


 const domAccessInVanillaJs = [
     "getElementById",
     "getElementsByClassName",
     "getElementsByName",
     "getElementsByTagName",
     "getElementsByTagNameNS",
     "querySelector",
     "querySelectorAll"
    ];

 module.exports = {
     meta: {
        type: "suggestion",
         docs: {
             description: `DOM access cost a lot of resources. 
             We should be using variables to avoid requesting the same element multiple times
             If you are doing a single reference, you can ignore this suggestion`,
             category: 'ecoCode',
             recommended: false
         },
         fixable: null,
         schema: []
     },

     create: function(context) {
         function testDomAccess(node) {
            if(domAccessInVanillaJs.includes(node?.callee?.property?.name))
            {
                const areWeInAVarDeclaration = node.parent.parent.type == "VariableDeclaration";
                if(!areWeInAVarDeclaration)
                {
                    context.report({
                        node,
                        message: "DOM access should be sparsely used. We recommend using a variable to store DOM accesses",
                    });
                }
            }
         }
         return {
             'CallExpression': testDomAccess
         };
     }
 }; 
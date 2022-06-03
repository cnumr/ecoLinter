/**
 * @fileoverview Externalisze .css and .js files
 * @author Gabriel Giboulot
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Resize image in browser',
            category: 'Fill me in',
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
        function findResizingImage(node) {
            if('img' === node.callee.property.name){
                for(let arg in node.arguments){
                    if(["width","height"].includes(node.arguments[args].name)){
                        if(node.arguments[args].value !== "100%"){
                            context.report({
                                node,
                                message: 'Resize image in browser',
                            });
                        }
                    }
                }
            }
        }

        return {
            'UpdateExpression:exit': findResizingImage,
        };
    }
};
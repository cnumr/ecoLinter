/**
 * @fileoverview Resize image in browser
 * @author 
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

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        function findResizingImage(node) {
            if (node.name === "img") {
                if (!hasStyleValid(node))
                    context.report({
                        node,
                        message: 'Resize image in browser',
                    })
            };
        }

        return {
            'Tag': findResizingImage,
        };

        function hasStyleValid(node) {
            return node.attributes.some((attr) => {
                if (attr.key && attr.value) {
                    if (attr.key.value === "style" && typeof attr.value.value === "string") {
                        let arr = attr.value.value.split(/\s*:\s*/).join(';').split(/\s*;\s*/);
                        for (let i = 0; i < arr.length; i = i + 2) {
                            if (["width", "height"].includes(arr[i]) && arr[i + 1] && !["100%", "auto"].includes(arr[i + 1])) {
                                return false;
                            }
                        }
                        return true;
                    }
                }
            });
        }
    }

};
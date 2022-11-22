/**
 * @fileoverview Change multiple CSS properties at once
 * @author Rémi BOUSSU
 */
 'use strict';

 //------------------------------------------------------------------------------
 // Rule Definition
 //------------------------------------------------------------------------------
 
 module.exports = {
     meta: {
        type: "suggestion",
         docs: {
             description: `Change multiple CSS properties at once
To limit the number of repaint/reflow, it is advised to batch style modifications by adding a 
class containing all style changes that will generate a sole reflow`,
             category: 'ecoCode',
             recommended: false,
             url: "https://collectif.greenit.fr/ecoconception-web/115-bonnes-pratiques-eco-conception_web.html R39"
         },
         fixable: null,
         schema: []
     },
 
     create: function(context) {
         function checkForStyleAssignations(node) {
             // Are we checking an assignation on a style property
             if(node?.left?.object?.property?.name == 'style')
             {
                const domElementName = node?.left?.object?.object?.name;
                const currentRangestart = node?.left?.object?.object.range[0];

                /** We get the parent AST to check if there is more than one assignation on 
                the style of the same domElement */
                const currentScopeASTBody = 
                    context.getScope().block.body.length != 
                        undefined ? 
                            context.getScope().block.body : 
                            context.getScope().block.body.body ;

                const filtered = currentScopeASTBody.filter(
                        e => e.type == "ExpressionStatement" &&
                        e.expression.type == "AssignmentExpression" &&
                        e.expression?.left?.object?.object?.name == domElementName &&
                        e.expression?.left?.object?.property?.name == 'style'
                    );

                // De-duplication, prevents multiple alerts for each line involved
                const isCurrentNodeTheFirstAssignation = currentRangestart <= filtered[0].expression?.left?.object?.object.range[0];
                
                if(filtered.length > 1 && isCurrentNodeTheFirstAssignation)
                {
                    context.report({
                        node,
                        message: "More than two style assignation",
                      });
                }
             }
         }
         return {
             'AssignmentExpression': checkForStyleAssignations
         };
     }
 };
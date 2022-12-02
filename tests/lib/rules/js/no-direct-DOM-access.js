/**
 * @fileoverview No DOM access without assignation
 * @author Remi Boussu
 */
 'use strict';

 //------------------------------------------------------------------------------
 // Requirements
 //------------------------------------------------------------------------------
 
 const rule = require('../../../../lib/rules/js/no-direct-DOM-access');
 const RuleTester = require('eslint').RuleTester;
 
 //------------------------------------------------------------------------------
 // Tests
 //------------------------------------------------------------------------------
 
 var ruleTester = new RuleTester();
 ruleTester.run('no-direct-DOM-access', rule, {
   valid: [
       {
            code: 
            `
            var Mario = document.getElementById("Mario");
            Mario.coin();
            Mario.jump();
            `
       },
       {
            code: 
            `
            for(var a = document.getElementById("Mario"); a != null;)
            {
                console.log("test");
            }
            `
       }
   ],
 
   invalid: [
     {
       code: 
         `
         document.getElementById("Mario").coin();
         document.getElementById("Mario").jump();
         `,
       errors: [
         {
           message: "DOM access should be sparsely used. We recommend using a variable to store DOM accesses",
           type: 'CallExpression',
         },
         {
           message: "DOM access should be sparsely used. We recommend using a variable to store DOM accesses",
           type: 'CallExpression',
         }
       ],
     },
     {
        code: 
          `
          anyFunctionCall(document.getElementById("Mario"));
          `,
        errors: [
          {
            message: "DOM access should be sparsely used. We recommend using a variable to store DOM accesses",
            type: 'CallExpression',
          },
        ],
      }
    ],
 });
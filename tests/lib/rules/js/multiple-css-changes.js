/**
 * @fileoverview Utiliser les opérations primitives
 * @author Gael Pellevoizin
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../../lib/rules/js/multiple-css-changes');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('multiple-css-changes', rule, {
  valid: [
    {
      code: 'element.style.height = "800px";'
    },
    {
      code: 
      `element.style.height = "800px";
      element2.style.width = "800px";`
    },
    {
      code: 
      `element.style.height = "800px";
      function a() { element.style.width = "800px"; }
      `
    }
  ],

  invalid: [
    {
      code: 
        `function a(element){
          element.style.height = "800px";
          element.style.width = "800px";
        }`,
      errors: [
        {
          message: "More than two style assignation",
          type: 'AssignmentExpression',
        },
      ],
    },
    {
      code: 
      `element.style.height = "800px";
      element.style.width = "800px";`,
      errors: [
        {
          message: "More than two style assignation",
          type: 'AssignmentExpression',
        },
      ],
    },
    {
      code: 
      `
      function changeStyle()
      {
        var anyScopedVar;
        element.style.any = "800px";
        anotherChildElement.style.any = "800px";
        anyGlobalVar.assignation = "any";
        anyScopedVar = anyGlobalVar.assignation;
        element.style.anyOther = "800px";
      }
      `,
      errors: [
        {
          message: "More than two style assignation",
          type: 'AssignmentExpression',
        },
      ],
    }
  ],
});

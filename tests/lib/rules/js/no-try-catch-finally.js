/**
 * @fileoverview Utiliser les opérations primitives
 * @author Gael Pellevoizin
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../../lib/rules/js/no-try-catch-finally');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-try-catch-finally', rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: 'try { \n' + ' nonExistentFunction();' + ' } catch (error) {' + ' console.log(error) }',
      errors: [
        {
          message: 'Avoid the use of try-catch-finally',
          type: 'TryStatement',
        },
      ],
    },
  ],
});

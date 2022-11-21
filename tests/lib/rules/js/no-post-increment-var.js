/**
 * @fileoverview Remplacer les $i++ par ++$i
 * @author Gael Pellevoizin
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../../lib/rules/js/no-post-increment-var');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-post-increment-var', rule, {
  valid: ['++counter', 'counter + 73', 'counter += 73', 'counter =+ 73', '73 + counter'],

  invalid: [
    {
      code: 'counter++;',
      errors: [
        {
          message: 'Use i++ instead of ++i.',
          type: 'UpdateExpression',
        },
      ],
    },
  ],
});

/**
 * @fileoverview Functions should not be called inside the declaration of a loop
 * @author
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../../lib/rules/js/no-full-sql-request');
const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  },
});

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const literalError = {
  message: 'There should be no full sql request in litteral',
  type: 'Literal',
};

const templateLiteralError = {
  message: 'There should be no full sql request in litteral',
  type: 'TemplateLiteral',
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('no-full-sql-request', rule, {
  valid: [
    'var integer = 8;',
    'var str = `hello world`;',
    'var str = "hello world";',
    'var sql = "SELECT field1, field2 FROM table";',
  ],
  invalid: [
    {
      code: 'var sql = `SELECT * FROM table`;',
      errors: [templateLiteralError],
    },
    {
      code: 'var sql = "SELECT * FROM table";',
      errors: [literalError],
    },
    {
      code: 'var sql = "select * from table";',
      errors: [literalError],
    },
  ],
});

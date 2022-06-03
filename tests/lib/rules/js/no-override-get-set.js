/**
 * @fileoverview Functions should not be called inside the declaration of a loop
 * @author
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../../lib/rules/js/no-override-get-set'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  },
});

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const error = {
  message: 'Getters and setters should not be overridden',
  type: 'CallExpression',
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('no-override-get-set', rule, {
  valid: [
    'Object.defineProperty(foo, "bar", { test: function() {}})',
    'Object.defineProperty(foo, "bar", { get: \'test\'})',
    'Object.defineProperty(foo, "bar", { set: \'test\'})',
  ],

  invalid: [
    {
      code: 'Object.defineProperty(foo, "bar", { get: function() {}})',
      errors: [error],
    },
    {
      code: 'Object.defineProperty(foo, "bar", { get: () => {}})',
      errors: [error],
    },
    {
      code: 'Object.defineProperty(foo, "bar", { set: function() {}})',
      errors: [error],
    },
    {
      code: 'Object.defineProperty(foo, "bar", { set: () => {}})',
      errors: [error],
    },
  ],
});

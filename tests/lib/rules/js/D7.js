/**
 * @fileoverview Functions should not be called inside the declaration of a loop
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/js/D7"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6
  }
});

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const callExpressionError = {
  message: "Getters and setters should not be override",
  type: "CallExpression"
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("D7", rule, {
  valid: [
    "Object.defineProperty(foo, \"bar\", { test: function() {}})",
    "Object.defineProperty(foo, \"bar\", { get: 'test'})",
    "Object.defineProperty(foo, \"bar\", { set: 'test'})"
  ],

  invalid: [
    {
      code: "Object.defineProperty(foo, \"bar\", { get: function() {}})",
      errors: [
        callExpressionError
      ]
    },
    {
      code: "Object.defineProperty(foo, \"bar\", { get: () => {}})",
      errors: [
        callExpressionError
      ]
    },
    {
      code: "Object.defineProperty(foo, \"bar\", { set: function() {}})",
      errors: [
        callExpressionError
      ]
    },
    {
      code: "Object.defineProperty(foo, \"bar\", { set: () => {}})",
      errors: [
        callExpressionError
      ]
    }
  ]
});

/**
 * @fileoverview Functions should not be called inside the declaration of a loop
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/js/D5"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  },
});

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const callExpressionError = {
  message: "SetTimeout and SetInterval should not be called with string arguments",
  type: "CallExpression",
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("D5", rule, {
  valid: [
    "setTimeout(() => {})",
    "setTimeout(() => {}, 1000)",
    "setTimeout(myFunction)",
    "setTimeout(myFunction, 1000)"
  ],

  invalid: [
    {
      code: "setTimeout('bouh')",
      errors: [
        callExpressionError
      ],
    },
    {
      code: "setTimeout('bouh', 1000)",
      errors: [
        callExpressionError
      ],
    },
    {
      code: "setTimeout('() => {}')",
      errors: [
        callExpressionError
      ],
    },
  ],
});

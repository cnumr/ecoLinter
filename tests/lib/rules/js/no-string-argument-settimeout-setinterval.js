"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/js/no-string-argument-settimeout-setinterval"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  },
});

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const setTimeoutCallExpressionError = {
  message: "setTimeout should not be called with string as first argument",
  type: "CallExpression",
};

const setIntervalCallExpressionError = {
  message: "setInterval should not be called with string as first argument",
  type: "CallExpression",
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-string-argument-settimeout-setinterval", rule, {
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
        setTimeoutCallExpressionError
      ],
    },
    {
      code: "setTimeout('bouh', 1000)",
      errors: [
        setTimeoutCallExpressionError
      ],
    },
    {
      code: "setTimeout('() => {}')",
      errors: [
        setTimeoutCallExpressionError
      ],
    },
    {
      code: "window.setInterval('() => {}')",
      errors: [
        setIntervalCallExpressionError
      ],
    },
  ],
});

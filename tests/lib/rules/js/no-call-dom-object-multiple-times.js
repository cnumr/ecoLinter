"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/js/no-call-dom-object-multiple-times"),
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
  message: "DOM objects called multiple times should be assign to a variable",
  type: "CallExpression"
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-call-dom-object-multiple-times", rule, {
  valid: [
    `
    var el1 = document.getElementById('block1').test;
    var el2 = document.getElementById('block2').test
    `,
    `
    var el1 = document.getElementsByClassName('block1').test;
    var el2 = document.getElementsByClassName('block2').test
    `
    // "function test1() { var el1 = document.getElementById('block1').test1; }; function test2()  { var el2 = document.getElementById('block1').test2; }"
  ],

  invalid: [
    {
      code: "var el1 = document.getElementById('block1').test1; var el2 = document.getElementById('block1').test2",
      errors: [
        callExpressionError
      ]
    },
    {
      code: "function test() {var el1 = document.getElementById('block1').test1; if(toto) { var el2 = document.getElementById('block1').test2 }}",
      errors: [
        callExpressionError
      ]
    }
  ]
});

/**
 * @fileoverview prevent use of custom font for eco coding
 * @author alexandre nathan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/js/eco-font-family-use");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      "jsx": true
    },
  },
});

const TemplateElement = {
  message: "Your font-family is not in the standard fonts family : Impact",
  //type: "TemplateElement"
};

const Identifier = {
  message: "Your font-family is not in the standard fonts family : Azerty",
  //type: "Identifier"
};


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("eco-font-family-use", rule, {
  valid: [
      "const style={fontFamily: 'serif'}",
      "const Button = styled.input`font-family: 'serif';`"
  ],
  invalid: [
    {
      code: "const style={fontFamily: 'Azerty'}",
      errors: [Identifier]
    },
    {
      code: "const Button = styled.input`font-family: 'Impact';`",
      errors: [TemplateElement]
    },
  ],
});


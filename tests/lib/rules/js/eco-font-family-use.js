/**
 * @fileoverview prevent use of custom font for eco coding
 * @author alexandre nathan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/eco-font-family-use"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("eco-font-family-use", rule, {
  valid: [
        "<span style={{fontFamily: 'Cesar, sans-serif'}}>hello</span>",
        "const Button = styled.button`font-family: 'serif, sans-serif, arial';`",
  ],

  invalid: [
    {
      code: [
        "<span style={{fontFamily: 'Cesar, sans-serif'}}>hello</span>",
        "const Button = styled.button`font-family: 'serif, sans-serif, arial';`",
      ]
      ,
      errors: [{ message: "Your font-family is not in the standard fonts family", type: "Identifier" }],
    },
    {
      code: [
        "const Button = styled.button`font-family: 'serif, sans-serif, arial';`",
      ]
      ,
      errors: [{ message: "Your font-family is not in the standard fonts family", type: "TemplateElement" }],
    },
  ],
});

'const Page = (props) => { return (<div>  </div>);}'
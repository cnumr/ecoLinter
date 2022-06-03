/**
 * @fileoverview Externalisze .css and .js files
 * @author Nicolas DAVIET
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../../lib/rules/js/externalize-js-css');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
});

ruleTester.run('externalize-js-css', rule, {
  valid: [
    // give me some code that won't trigger a warning
    { code: 'import {faireTirage} from "http://monmodule/tirage.js"' },
    { code: 'import {faireTirage} from "http://monmodule/tirage.css"' },
  ],

  invalid: [
    {
      code: 'import {faireTirage} from "./tirage.js"',
      errors: [
        {
          message: 'Externalize .js and .css files',
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
});

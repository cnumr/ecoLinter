/**
 * @fileoverview Ne pas utiliser trop de gif dans une même page
 * @author Nathan Barré
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../../lib/rules/js/avoid-gif');
const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const literalError = {
  message: 'You should use less than 3 Gif',
  // type: 'Literal',
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('avoid-gif', rule, {
  valid: [
    'const Page = (props) =>  {return (<div> <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." /> <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." /> <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." /> </div>);}',
  ],
  invalid: [
    {
      code: 'const Page = (props) =>  {return (<div> <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." /> <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." /> <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." /> <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." /> </div>);}',
      errors: [literalError],
    },
  ],
});

/**
 * @fileoverview Utiliser les opérations primitives
 * @author Gael Pellevoizin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../../lib/rules/js/s34"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("s34", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [{
        code: "try { \n" +
            " nonExistentFunction();" +
            " } catch (error) {" +
            " console.log(error) }",
        errors: [{
            message: "Avoid the use of try-catch-finally",
            type: "TryStatement"
        }]
    }]
});
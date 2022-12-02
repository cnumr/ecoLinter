/**
 * @fileoverview Avoid resizing image in browser
 * @author Clest
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../../lib/rules/js/no-resize-image"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve("@html-eslint/parser")
});

ruleTester.run("no-resize-image", rule, {

    valid: [
        // give me some code that won't trigger a warning
        { code: '<img src="data.png" style="width:auto">' }
    ],

    invalid: [{
        code: '<img src="data.png" style="width:450px;height:250px">',
        errors: [{
            message: "Resize image in browser",
            type: "Tag"
        }]
    }]
});
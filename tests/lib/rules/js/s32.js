// /**
//  * @fileoverview Externalisze .css and .js files
//  * @author Nicolas DAVIET
//  */
// "use strict";
//
// //------------------------------------------------------------------------------
// // Requirements
// //------------------------------------------------------------------------------
//
// var rule = require("../../../../lib/rules/js/s32"),
//
//     RuleTester = require("eslint").RuleTester;
//
//
// //------------------------------------------------------------------------------
// // Tests
// //------------------------------------------------------------------------------
//
// var ruleTester = new RuleTester();
// ruleTester.run("s32", rule, {
//
//     valid: [
//     // give me some code that won't trigger a warning
// 	{code : 'import {faireTirage} from "http://monmodule/tirage.js"'},
// 	{code : 'import {faireTirage} from "http://monmodule/tirage.css"'}
//     ],
//
//     invalid: [{
//         code: 'import {faireTirage} from "./tirage.js"',
//         errors: [{
//             message: "Externalize .js and .css files",
//             type: "ImportDeclaration"
//         }]
//     }]
// });
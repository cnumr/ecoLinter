/**
 * @fileoverview GreenIT rules for JavaScript
 * @author
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');
const path = require('path');
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules/js
module.exports.rules = requireIndex(path.join(__dirname + '\\rules\\js'));




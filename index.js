'use strict';
const stripIndent = require('strip-indent');
const indentString = require('indent-string');

module.exports = (str, count, options) => indentString(stripIndent(str), count || 0, options);

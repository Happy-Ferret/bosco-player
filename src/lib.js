/**
 * Declare the nodejs library imports
 *
 *  browserify --standalone bundle src/lib.js -o src/common.js
 * 
 * I just want xml2js, but we may as well expose it's dependancies.
 */
//exports.lodash = require('lodash') but not _, it's reserved
exports.sax = require('sax')
exports.xml2js = require('xml2js')
exports.xmlbuilder = require('xmlbuilder')
exports.liquid = require('liquid.coffee')

'use strict'
const levelup  = require('level');
const path     = require('path');

module.exports.sessions_db = levelup(path.resolve(__dirname, '../../sessions_database'), {valueEncoding: 'json'});
'use strict';
const {load, url} = require('sdk/self').data;
exports.load = function(name){return load('browser-action-data/'+name)};
exports.url = function(name){return url('browser-action-data/'+name)};


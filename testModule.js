const pathMod = require('path');
console.log(__filename);
console.log(pathMod.basename(__filename));

const utilMod = require('util');
//console.log(utilMod);
console.log(pathMod.basename(__filename));

const first = require('./mods/first.js');
first();



var one = require('one');

var two = require('two');

var pp = function(o) { return JSON.stringify(o,null,'  ')};

console.log(pp([one, two]));

two.data['from_main'] = 'Hello!';

console.log(pp([one, two]));



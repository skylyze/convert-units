var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['l/100km to l/km'] = function () {
  assert.strictEqual( convert(100).from('l/100km').to('l/km') , 1);
};

tests['l/100km to l/m'] = function () {
  assert.strictEqual( convert(100).from('l/100km').to('l/m') , 0.001);
};

tests['l/100km to mpg'] = function () {
  assert.strictEqual( convert(1).from('l/100km').to('mpg') , 235.215);
};

tests['l/100km to mpg-us'] = function () {
  assert.strictEqual( convert(1).from('l/100km').to('mpg-us') , 235.215);
};

tests['l/100km to mpg-uk'] = function () {
  assert.strictEqual( convert(1).from('l/100km').to('mpg-uk') , 282.481);
};

module.exports = tests;

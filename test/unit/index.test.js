var assert = require('chai').assert;
var index = require('../../index');

describe('Entry Point', function () {
  it('Should properly export', function () {
    assert.isObject(index);
  });
});

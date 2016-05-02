var bedug = require('../.');
var debug = require('debug');
var should = require('should');

describe('create middleware', function() {
  it('should create different \'debug\' middlware', function() {
    var m1 = bedug('m1', debug);
    var m2 = bedug('m2', debug);
    m1.should.not.be.equal(m2);
  });
});

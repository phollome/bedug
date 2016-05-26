'use strict';

var bedug = require('../.');
var debug = require('debug');
var should = require('should');

describe('create middleware', () => {
  it('should create different \'debug\' middleware', () => {
    let m1 = bedug('test-m1', debug);
    let m2 = bedug('test-m2', debug);
    m1.should.not.be.equal(m2);
  });
});

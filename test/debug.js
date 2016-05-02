var bedug = require('../.');
var debug = require('debug');
var intersect_stdout = require('intercept-stdout');
var should = require('should');

describe('create an middleware with \'debug\'', function() {
  it('should use namespace', function(done) {
    var ns = 'test-namespace';
    var i = bedug(ns, debug);
    var output = '';
    var unhook = intersect_stdout(function(stdout) {
      output += stdout;
    });
    i.log('testing namespace log');
    unhook();
    output.should.match(new RegExp(ns, 'g'));
    done();
  });
});
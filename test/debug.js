var _ = require('lodash');
var bedug = require('../.');
var debug = require('debug');
var intersect_stdout = require('intercept-stdout');
var should = require('should');

describe('create an middleware with \'debug\'', function() {
  it('should use namespace', function() {
    var ns = 'test-namespace';
    var i = bedug(ns, debug);
    var output = '';
    var unhook = intersect_stdout(function(stdout) {
      output += stdout;
    });
    i.log('testing namespace log');
    unhook();
    output.should.match(new RegExp(ns, 'g'));
  });
  it('should use all log level', function() {
    var ns = 'test-log-level';
    var i = bedug(ns, debug);
    var output = '';
    var unhook = intersect_stdout(function(stdout) {
      output += stdout;
    });
    var lvl = [];
    _.each(i.levels, function(val) {
      i[val]('testing log level log');
      lvl.push(val + i.separator);
    });
    unhook();
    output.should.match(new RegExp('(' + lvl.join('|') + ')', 'g'));
  });
});
'use strict';

var _ = require('lodash');
var bedug = require('../.');
var debug = require('debug');
var intersect_stdout = require('intercept-stdout');
var should = require('should');

describe('create an middleware with \'debug\'', () => {
  it('should use namespace', () => {
    var ns = 'test-namespace';
    var i = bedug(ns, debug);
    var output = '';
    var unhook = intersect_stdout( stdout => {
      output += stdout;
    });
    i.log('testing namespace log');
    unhook();
    output.should.match(new RegExp(ns, 'g'));
  });
  it('should use all log level', () => {
    var ns = 'test-log-level';
    var i = bedug(ns, debug);
    var output = '';
    var unhook = intersect_stdout(stdout => {
      output += stdout;
    });
    var lvl = [];
    _.each(i.levels, (val) => {
      i[val]('testing log level log');
      lvl.push(val + i.separator);
    });
    unhook();
    output.should.match(new RegExp('(' + lvl.join('|') + ')', 'g'));
  });
});
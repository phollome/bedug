'use strict';

let _ = require('lodash');
let bedug = require('../.');
let debug = require('debug');
let intersect_stdout = require('intercept-stdout');
let should = require('should');

describe('create an middleware with \'debug\'', () => {
  it('should use namespace', () => {
    let ns = 'test-namespace';
    let i = bedug(ns, debug);
    let output = '';
    let unhook = intersect_stdout( stdout => {
      output += stdout;
    });
    i.log('testing namespace log');
    unhook();
    output.should.match(new RegExp(ns, 'g'));
  });
  it('should use all log level', () => {
    let ns = 'test-log-level';
    let i = bedug(ns, debug);
    let output = '';
    let unhook = intersect_stdout(stdout => {
      output += stdout;
    });
    let lvl = [];
    _.each(i.LEVELS, (val) => {
      i[val]('testing log level log');
      lvl.push(val + i.SEPARATOR);
    });
    unhook();
    output.should.match(new RegExp('(' + lvl.join('|') + ')', 'g'));
  });
});
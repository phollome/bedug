'use strict';

let _ = require('lodash');
let merge_descriptors = require('merge-descriptors');

exports = module.exports = create;

const LEVELS = {
  info: 'info',
  log: 'log',
  warn: 'warn',
  error: 'error'
};

const SEPARATOR = '::';

/**
 * create bedug middlware
 * @param namespace
 * @param consumer
 * @return {{
 *  init: Function(namespace: String, consumer: Object),
 *  info: Function,
 *  log: Function,
 *  warn: Function,
 *  error: Function,
 *  LEVELS: Object,
 *  SEPARATOR: String
 * }}
 */
function create(namespace, consumer) {
  let i = () => {};
  merge_descriptors(i, bedug, false);
  i.init(namespace, consumer);
  return i;
}

let bedug = {};

bedug.init = function init(ns, co) {
  if(_.has(co, 'name') && co.name == 'debug') {
    _.each(LEVELS, (item, key) => {
      this[key] = co(item + SEPARATOR + ns);
    });
  }
};

bedug.LEVELS = LEVELS;
bedug.SEPARATOR = SEPARATOR;
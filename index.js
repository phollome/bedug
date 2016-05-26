'use strict';

var _ = require('lodash');
var merge_descriptors = require('merge-descriptors');

exports = module.exports = create;

const levels = {
  info: 'info',
  log: 'log',
  warn: 'warn',
  error: 'error'
};

const separator = '::';

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
 *  levels: Object,
 *  separator: String
 * }}
 */
function create(namespace, consumer) {
  let i = () => {};
  merge_descriptors(i, bedug, false);
  i.init(namespace, consumer);
  return i;
}

var bedug = {};

bedug.init = function init(ns, co) {
  if(_.has(co, 'name') && co.name == 'debug') {
    _.each(levels, (item, key) => {
      this[key] = co(item + separator + ns);
    });
  }
};

bedug.levels = levels;
bedug.separator = separator;
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
  var i = function() {};
  merge_descriptors(i, bedug, false);
  i.init(namespace, consumer);
  return i;
}

var bedug = {};

bedug.init = function init(ns, co) {
  var self = this;
  if(_.has(co, 'name') && co.name == 'debug') {
    _.each(levels, function(item, key) {
      self[key] = co(item + separator + ns);
    });
  }
};

bedug.levels = levels;
bedug.separator = separator;
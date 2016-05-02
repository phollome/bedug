var merge_descriptors = require('merge-descriptors');

exports = module.exports = create;

/**
 * create bedug middlware
 * @param namespace
 * @param consumer
 * @return {i}
 */
function create(namespace, consumer) {
  var i = function() {};
  merge_descriptors(i, bedug, false);
  i.init(namespace, consumer);
  return i;
}

var bedug = {};

bedug.init = function init(ns, co) {
  this.log = co(ns);
};
var merge_descriptors = require('merge-descriptors');

exports = module.exports = create;

/**
 * create bedug middlware
 * @param namespace
 * @param middleware
 * @return {i}
 */
function create(namespace, middleware) {
  var i = function() {};
  merge_descriptors(i, bedug, false);
  i.init();
  return i;
}

var bedug = {};

bedug.init = function init(ns, mw) {

};
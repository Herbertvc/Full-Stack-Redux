var t = require('./actionTypes');

var set = function set(entries) {
  return {
    type: t.SET,
    entries: entries,
  };
}

exports.set = set;

module.exports = {
  set: set,
};

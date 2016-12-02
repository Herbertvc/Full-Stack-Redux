var t = require('./actionTypes');

exports.set = function set(entries) {
  return {
    type: t.SET,
    entries: entries,
  };
}

module.exports = {
  set: set,
};

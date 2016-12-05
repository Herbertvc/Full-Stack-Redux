var t = require('./actionTypes');

var set = function set(entries) {
  return {
    type: t.SET,
    entries: entries,
  };
}

module.exports = {
  set: set,
};

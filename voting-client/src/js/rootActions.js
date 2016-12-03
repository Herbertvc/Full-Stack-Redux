var t = require('./rootActionTypes');

var setState = function setState(state) {
  return {
    type: t.SET_STATE,
    state: state,
  };
}

var next = function next() {
  return {
    meta: {'remote': true},
    type: t.NEXT,
  };
}

exports.setState = setState;
exports.next = next;

module.exports = {
  setState: setState,
  next: next,
};

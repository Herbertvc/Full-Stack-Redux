var t = require('./rootActionTypes');

var next = function next() {
  return {
    type: t.NEXT,
  };
}

exports.next = next;

module.exports = {
  next: next,
};

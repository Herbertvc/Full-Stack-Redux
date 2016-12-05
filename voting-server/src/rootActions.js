var t = require('./rootActionTypes');

var next = function next() {
  return {
    type: t.NEXT,
  };
}

module.exports = {
  next: next,
};

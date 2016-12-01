var t = require('./actionTypes');

exports.setState = function setState(state) {
  return {
    type: t.SET_STATE,
    state: state,
  };
}

exports.vote = function vote(entry) {
  return {
    meta: {'remote': true},
    type: t.VOTE,
    entry: entry,
  };
}

exports.next = function next() {
  return {
    meta: {'remote': true},
    type: t.NEXT,
  };
}

module.exports = {
  setState: setState,
  vote: vote,
  next: next,
};

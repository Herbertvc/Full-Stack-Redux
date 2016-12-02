var t = require('./actionTypes');

exports.vote = function vote(entry) {
  return {
    type: t.VOTE,
    entry: entry,
  };
}

exports.next = function next() {
  return {
    type: t.NEXT,
  };
}

module.exports = {
  vote: vote,
  next: next,
};

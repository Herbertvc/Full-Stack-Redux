var t = require('./actionTypes');

var vote = function vote(entry) {
  return {
    meta: {'remote': true},
    type: t.VOTE,
    entry: entry,
  };
}

module.exports = {
  vote: vote,
};

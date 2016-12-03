var t = require('./actionTypes');

var vote = function vote(entry) {
  return {
    meta: {'remote': true},
    type: t.VOTE,
    entry: entry,
  };
}

exports.vote = vote;

module.exports = {
  vote: vote,
};

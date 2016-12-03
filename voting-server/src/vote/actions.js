var t = require('./actionTypes');

var vote = function vote(entry) {
  return {
    type: t.VOTE,
    entry: entry,
  };
}

exports.vote = vote;

module.exports = {
  vote: vote,
};

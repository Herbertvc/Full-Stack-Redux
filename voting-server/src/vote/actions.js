var t = require('./actionTypes');

var vote = function vote(entry) {
  return {
    type: t.VOTE,
    entry: entry,
  };
}

module.exports = {
  vote: vote,
};

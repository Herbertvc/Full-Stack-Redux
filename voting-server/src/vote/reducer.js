var t = require('./actionTypes');
var entries = require('../entries/index');

var initialState = null;

exports.vote = function vote(vote, entry) {
  var _vote = Object.assign({}, vote);

  var hasTally = _vote.hasOwnProperty('tally');

  if (!hasTally) {
    _vote.tally = {};
  }

  if (!_vote.tally.hasOwnProperty(entry)) {
    _vote.tally[entry] = 0;
  }

  _vote.tally[entry]++;

  return _vote;
}


module.exports = function (state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case t.VOTE:
      return Object.assign({}, vote(state, action.entry));
    default:
      return state;
  }
}

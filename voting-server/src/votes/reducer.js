var t = require('./actionTypes');
var entries = require('../entries/index');

var initialState = {};

function getWinners(state) {
  if (!votes) {
    return [];
  }

  var pair = state.pair;

  var pairKeys = Object.keys(pair);

  var a = pair[pairKeys[0]];
  var b = pair[pairKeys[1]];

  var hasTally = state.hasOwnProperty('tally');

  var aVotes = 0;
  var bVotes = 0;

  if (hasTally) {
    aVotes = state.tally.hasOwnProperty(a) ? state.tally[a] : 0;
    bVotes = state.tally.hasOwnProperty(b) ? state.tally[b] : 0;
  }

  if (aVotes > bVotes) {
    return [a];
  } else if (aVotes < bVotes) {
    return [b];
  } else {
    return [a, b];
  }
}

function next(state) {
  var entries = state.entries.concat(getWinners(state));
  var _state = Object.assign({}, state);

  if(entries.length === 1) {
    delete _state.votes;
    delete _state.entries;
    _state.winner = entries[0];

    return _state;
  } else {
    var pair = entries.splice(0, 2);

    return Object.assign({}, {
      votes: {
        pair: pair,
      },
      entries: entries,
    });
  }
}

exports.vote = function vote(votes, entry) {
  var _votes = Object.assign({}, votes);

  var hasTally = _votes.hasOwnProperty('tally');

  if (!hasTally) {
    _votes.tally = {};
  }

  if (!_votes.tally.hasOwnProperty(entry)) {
    _votes.tally[entry] = 0;
  }

  _votes.tally[entry]++;

  return _votes;
}


module.exports = function (state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case t.NEXT:
      return next(state);
    case t.VOTE:
      return Object.assign({}, vote(state, action.entry));
  }

  return state;
}

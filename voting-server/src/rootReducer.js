var t = require('./rootActionTypes');
var entries = require('./entries/index');
var vote = require('./vote/index');

var initialState = {};

function getWinners(vote) {
  if (!vote) {
    return [];
  }

  var pair = vote.pair;

  pairKeys = Object.keys(pair);

  var a = pair[pairKeys[0]];
  var b = pair[pairKeys[1]];

  var hasTally = vote.hasOwnProperty('tally');

  var aVotes = 0;
  var bVotes = 0;

  if (hasTally) {
    aVotes = vote.tally.hasOwnProperty(a) ? vote.tally[a] : 0;
    bVotes = vote.tally.hasOwnProperty(b) ? vote.tally[b] : 0;
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
  var entries = state.entries.concat(getWinners(state.vote));
  var _state = Object.assign({}, state);

  if (entries.length === 1) {
    _state.winner = entries[0];

    return _state;
  } else {
    var pair = entries.splice(0, 2);

    return Object.assign({}, {
      vote: {
        pair: pair,
      },
      entries: entries,
    });
  }
}

module.exports = function (state, action) {
  var state = (typeof state !== 'undefined') ? state : initialState;

  switch (action.type) {
    case t.NEXT:
      return next(state);
  }

  return {
    [entries.constants.NAME]: entries.reducer(state.entries, action),
    [vote.constants.NAME]: vote.reducer(state.vote, action),
  };
}

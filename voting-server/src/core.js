exports.INITIAL_STATE = {};

exports.setEntries = function setEntries(state, entries) {
  return Object.assign({}, state, {
    entries: entries,
  });
}

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

exports.next = function next(state) {
  var entries = state.entries.concat(getWinners(state.vote));
  var _state = Object.assign({}, state);

  if(entries.length === 1) {
    delete _state.vote;
    delete _state.entries;
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

exports.vote = function vote(voteState, entry) {
  var _voteState = Object.assign({}, voteState);

  var hasTally = voteState.hasOwnProperty('tally');

  if (!hasTally) {
    _voteState.tally = {};
  }

  if (!_voteState.tally.hasOwnProperty(entry)) {
    _voteState.tally[entry] = 0;
  }

  _voteState.tally[entry]++;

  return _voteState;
}

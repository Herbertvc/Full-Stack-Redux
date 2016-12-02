var t = require('./actionTypes');

var initialState = {};

function setState(state, newState) {
  return Object.assign({}, state, newState);
}

function vote(state, entry) {
  var currentPair = state.pair;
  var entryExists = false;

  if (currentPair) {
    entryExists = currentPair.findIndex(function (el) {
      return entry === el;
    })
  }

  if (currentPair && entryExists) {
    return Object.assign({}, { hasVoted: entry });
  } else {
    return state;
  }
}

function reset(state) {
  var hasVoted = state.hasVoted;
  var currentPair = state.pair;
  var entryExists = false;

  if (currentPair) {
    entryExists = currentPair.findIndex(function (el) {
        return hasVoted === el;
    })
  }

  if (hasVoted && entryExists) {
    delete state.hasVoted;
    return Object.assign({}, state);
  } else {
    return state;
  }
}

module.exports = function (state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case t.SET_STATE:
      return reset(setState(state, action.state));
    case t.VOTE:
      return vote(state, action.entry);
  }

  return state;
}

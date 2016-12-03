var t = require('./rootActionTypes');
var vote = require('./vote/index');

var initialState = {};

function setState(state, newState) {
  return Object.assign({}, state, newState);
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
  var state = (typeof state !== 'undefined') ? state : initialState;

  switch (action.type) {
    case t.SET_STATE:
      return reset(setState(state, action.state));
  }

  return {
    [vote.constants.NAME]: vote.reducer(state.vote, action),
  };
}

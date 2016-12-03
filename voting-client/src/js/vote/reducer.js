var t = require('./actionTypes');

var initialState = null;

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

module.exports = function (state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case t.VOTE:
      return vote(state, action.entry);
    default:
      return state;
  }
}

var t = require('./actionTypes');
var voteActionTypes = require('../vote/index').actionTypes;

var initialState = {
  vote: null,
};

function findIfExists(arr, el) {
  var exists = arr.findIndex(function (val) {
    return el === val;
  })

  return exists === -1
    ? false
    : true;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function setState(state, newState) {
  return Object.assign({}, state, newState);
}

function reset(state, mergedState) {
  if (!state.vote || !mergedState.vote) {
    return mergedState;
  }

  var oldPair = state.vote.pair;
  var newPair = mergedState.vote.pair;

  console.log(mergedState.hasOwnProperty('hasVoted'));
  console.log(oldPair);
  console.log(newPair);

  if (mergedState.hasOwnProperty('hasVoted') && !arraysEqual(oldPair, newPair)) {
    delete mergedState.hasVoted;
  }

  return mergedState;
}

function vote(state, entry) {
  var currentPair = state.vote.pair;
  var entryExists = false;

  if (currentPair) {
    entryExists = findIfExists(currentPair, entry);
  }

  if (currentPair && entryExists) {
    return Object.assign({}, state, { hasVoted: entry });
  } else {
    return state;
  }
}

module.exports = function (state, action) {
  var state = (typeof state !== 'undefined') ? state : initialState;

  switch (action.type) {
    case t.SET_STATE:
      return reset(state, setState(state, action.state));
    case voteActionTypes.VOTE:
      return vote(state, action.entry);
    default:
      return state
  }
}

function setState(state, newState) {
  return Object.assign({}, state, newState);
}

function vote(state, entry) {
  var currentPair = state.vote.pair;
  var entryExits = currentPair.findIndex(function (el) {
      return entry === el;
  });

  if (currentPair && entryExits) {
    return Object.assign({}, {'hasVoted': entry});
  } else {
    return state;
  }
}

function resetVote(state) {
  var hasVoted = state.hasVoted;
  var currentPair = state.vote.pair;
  var entryExits = currentPair.findIndex(function(el) {
      return hasVoted == el;
  })

  if (hasVoted && entryExits) {
    delete state.hasVoted;
    return Object.assign({}, state);
  } else {
    return state;
  }
}

module.exports = function(state, action) {
  if (typeof state === 'undefined') {
    return {};
  }

  switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state));
    case 'VOTE':
      return vote(state, action.entry);
  }
  return state;
}
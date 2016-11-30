exports.setState = function setState(state) {
  return {
    'type': 'SET_STATE',
    'state': state,
  };
}

exports.vote = function vote(entry) {
  return {
    'meta': {'remote': true},
    'type': 'VOTE',
    'entry': entry,
  };
}

exports.vote = function next() {
  return {
    'meta': {'remote': true},
    'type': 'NEXT'
  };
}
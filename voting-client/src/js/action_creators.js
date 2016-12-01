exports.setState = function setState(state) {
  console.log('works apparently');
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

exports.next = function next() {
  return {
    'meta': {'remote': true},
    'type': 'NEXT'
  };
}
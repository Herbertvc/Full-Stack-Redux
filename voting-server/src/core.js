var Immutable = require('immutable');

exports.INITIAL_STATE = Immutable.Map();

exports.setEntries = function setEntries(state, entries) {
  return state.set('entries', Immutable.List(entries));
}

function getWinners(vote) {
  if (!vote) return [];
  var pair = vote.get('pair');
  var a = pair['a'];
  var b = pair['b'];
  var aVotes = vote.getIn(['tally', a], 0);
  var bVotes = vote.getIn(['tally', b], 0);

  if (aVotes > bVotes) return [a];
  else if (aVotes < bVotes) return [b];
  else return [a,b];
}

exports.next = function next(state) {
  var entries = state.get('entries').concat(getWinners(state.get('vote')));

  if(entries.size == 1) {
    return state.remove('vote')
                .remove('entriies')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Immutable.Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
}

// Go to the path ['vote', 'tally', entry], if the key is missing create a new map this place; if the value at the end is missing initialize with 0.
exports.vote = function vote(voteState, entry) {
  return state.updateIn(
    ['tally', entry],
    0,
    function (tally) {
      return tally + 1;
    }
  )
}

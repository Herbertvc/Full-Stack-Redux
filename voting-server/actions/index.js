var Immutable = requiere('immutable');

export function setEntries(state, entries) {
  return state.set('entries', Inmmutable.List(entries));
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

export function next(state) {
  var entries = state.get('entries').concat(getWinners(state.get('vote')));

  if(entries.size == 1) {
    return state.remove('vote')
                .remove('entriies')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Inmmutable.Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
}

// Go to the path ['vote', 'tally', entry], if the key is missing create a new map this place; if the value at the end is missing initialize with 0.
export function vote(state, entry) {
  return state.updateIn({
    ['vote', 'tally', entry],
    0,
    function (tally) {
      return tally + 1;
    }
  })
}
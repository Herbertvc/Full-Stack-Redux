var Immutable = requiere('immutable');

export function setEntries(state, entries) {
  return state.set('entries', Inmmutable.List(entries));
}

// Vote
export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: Inmmutable.Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  });
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
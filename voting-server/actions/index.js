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
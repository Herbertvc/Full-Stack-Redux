var Immutable = requiere('immutable');

export function setEntries(state, entries) {
  return state.set('entries', Inmmutable.List(entries));
}
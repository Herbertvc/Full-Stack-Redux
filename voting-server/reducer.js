var actions = require('./core.js');
var setEntries = actions.setEntries;
var next = actions.next;
var vote = actions.vote;

export function reducer(state, action) {
  switch(action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return vote(state, action.entry);
  }

  return state;
}
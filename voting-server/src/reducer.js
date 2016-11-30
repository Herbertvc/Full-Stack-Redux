var actions = require('./core.js');
var setEntries = actions.setEntries;
var next = actions.next;
var vote = actions.vote;
var INITIAL_STATE = actions.INITIAL_STATE;

module.exports = function (state, action) {
  if (typeof state === 'undefined') {
    return INITIAL_STATE
  }

  switch(action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      var _state = Object.assign({}, state);
      var _vote = vote(_state.vote, action.entry);

      return Object.assign({}, state, {
        vote: _vote,
      });
  }

  return state;
}

var actions = require('./core.js');
var setEntries = actions.setEntries;
var next = actions.next;
var vote = actions.vote;
var INITIAL_STATE = actions.INITIAL_STATE;

module.exports = function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return state.update('vote', function(voteState) {
        return vote(voteState, action.entry);
      });
  }

  return state;
}
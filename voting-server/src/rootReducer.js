var combineReducers = require('redux').combineReducers;
var entries = require('./entries/index');
var votes = require('./votes/index');
var winner = require('./winner/index');

module.exports = combineReducers({
  [entries.constants.NAME]: entries.reducer,
  [votes.constants.NAME]: votes.reducer,
  [winner.constants.NAME]: winner.reducer,
});

var combineReducers = require('redux').combineReducers;
var votes = require('./votes/index');

module.exports = combineReducers({
  [votes.constants.NAME]: votes.reducer,
});
